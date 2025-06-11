import { app, BrowserWindow } from 'electron'
import path from 'path';

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // preload: path.join(__dirname, 'preload.js') // Enable preload
        }
    });

    console.log('test',)
    // win.loadFile(path.join(app.getAppPath(),'/dist-react/index.html'));
    win.loadURL('http://localhost:5173/')

}

app.whenReady().then(createWindow);
