const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const shell = electron.shell;
const ipcMain = electron.ipcMain;

let mainWindow;

function createWindow () {
/* Main window*/
  mainWindow = new BrowserWindow({
    show: false,
    height: 600,
    width: 800,
    autoHideMenuBar: true,
    frame: false
  });

  mainWindow.loadFile('src\\index.html');

  //mainWindow.webContents.openDevTools();

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  })

  mainWindow.on('close', () => {
    mainWindow = null;
  })

  ipcMain.on('config-url', (event, arg1, arg2) => {
    mainWindow.webContents.send('update-url', arg1, arg2);
  })

}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if(process.plataform != 'darwin') {
    app.quit();
  }
})
