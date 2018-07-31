const axios = require('axios');
const shell = require('electron').shell;
const ipcRenderer = require('electron').ipcRenderer;
const BrowserWindow = require('electron').remote.BrowserWindow;
const remote = require('electron').remote;


/* API */
const lblName = document.getElementById('lblName');
const lblEmail = document.getElementById('lblEmail');
const lblNumber = document.getElementById('lblNumber');
const imgGerada = document.getElementById('imgGerada');
const lblCountry = document.getElementById('lblCountry');
const btnGerar = document.getElementById('btnGerar');

let apiUrl = "https://uinames.com/api/?ext&?region=germany";

ipcRenderer.on('update-url', (event) => {
  alert('KKK te enganei a API não deixa eu fazer isso :(');
})

var nomeCompleto = '';

btnGerar.addEventListener('click', function () {
  const namey = axios.get(apiUrl)
  .then(function (response) {
    console.log(apiUrl);
        imgGerada.src = response.data.photo;
        lblName.innerHTML = nomeCompleto.concat(response.data.name, ' ', response.data.surname);
        lblEmail.innerHTML = response.data.email;
        lblNumber.innerHTML = response.data.phone;
        lblCountry.innerHTML = response.data.region;
  })
})

/* MENU */

const menuConfig = document.getElementById('menuConfig');
const menuHelp = document.getElementById('menuHelp');

menuHelp.addEventListener('click', function () {
  shell.openExternal("https://uinames.com");
})

menuConfig.addEventListener('click', function () {
  let windowConfig = new BrowserWindow({
      show: false,
      height: 350,
      width: 550,
      autoHideMenuBar: true,
      frame: false
    });

  windowConfig.loadFile('src\\settings.html');

  //windowConfig.webContents.openDevTools();

  windowConfig.on('ready-to-show', () => {
    windowConfig.show();
  })

  windowConfig.on('close', () => {
    windowConfig = null;
  })

})

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Title bar
document.getElementById("min-btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          window.minimize();
        });

document.getElementById("max-btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          if (!window.isMaximized()) {
            window.maximize();
          } else {
            window.unmaximize();
          }
        });

document.getElementById("close-btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          window.close();
        });
