const electron = require('electron');
const ipcRenderer = electron.ipcRenderer;
const remote = electron.remote;

const btnConfig = document.getElementById('btnConfig');
const slctGenero = document.getElementById('slctGenero');
const slctPais = document.getElementById('slctPais');

btnConfig.addEventListener('click', () => {

  var gender = slctGenero.options[slctGenero.selectedIndex].text;
  var region = slctPais.options[slctPais.selectedIndex].text;

  if(gender == 'Mulher'){
    gender = 'female';
  }

  if(gender == 'Homem'){
    gender = 'male';
  }

  ipcRenderer.send('config-url', gender, region);

  var window = remote.getCurrentWindow();
  window.close();
})
