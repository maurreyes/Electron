const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {

    // create a window
    const myWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
            }
        });

        myWindow.loadFile('index.html');
        tray.setToolTip('Electron rocks!')        

        const tray = new Tray('electron-icon.png')

        const contextMenu = Menu.builFromTemplate([
            { label: 'Cool', type: 'radio'},
        ])
})