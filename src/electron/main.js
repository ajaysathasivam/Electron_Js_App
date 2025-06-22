import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync, writeFile } from 'fs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preLoad.cjs'),

        }
    });

    ipcMain.handle('read-file', async () => {
        try {
            const text = readFileSync(path.join(__dirname, 'message.txt'), 'utf8'); // ✅ no await
            return text;
        } catch (err) {
            console.log('main: read-file error', err);
            return 'Error reading file';
        }
    });
    ipcMain.handle('console-log', (event, message) => {
        writeFile(path.join(__dirname, 'console-log.txt'), message, (err) => {
            if (err) {
                console.log('main: console-log error', err);
            }
        });
    });

    win.loadURL('http://localhost:5173');
}

app.whenReady().then(createWindow);


