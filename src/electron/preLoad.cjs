const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('api', {
  readFile: () => {
    console.log('preload: readFile called'); // should show in browser DevTools
    return ipcRenderer.invoke('read-file'); // MUST return this
  },
  consoleLog: (message) => {
    console.log('preload: consoleLog called', message); // should show in browser DevTools
    ipcRenderer.invoke('console-log', message); // MUST return this
  }
});