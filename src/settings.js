const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;
const remote = electron.remote;

const btnConfig = document.getElementById('btnConfig');

btnConfig.addEventListener('click', () => {

  ipcRenderer.send('config-url');

  var window = remote.getCurrentWindow();
  window.close();
})
