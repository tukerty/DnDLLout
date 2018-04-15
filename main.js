const electron = require('electron')

// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const log = require('electron-log')
const chalk = require('chalk')


log.transports.console = function(msg) {
  if (msg.level == 'error'){
    console.log(chalk.bold.bgRed("Error: ") + chalk.bgRed(msg.data[0]))
  }
  if (msg.level == 'warn'){
    console.log(chalk.black.bold.bgYellow("Warn: ") + chalk.black.bgYellow(msg.data[0]))
  }
  if (msg.level == 'info'){
    console.log(chalk.bold.blue("Info: ") + chalk.blue(msg.data[0]))
  }
  if (msg.level == 'verbose'){
    console.log(chalk.bold.magenta("Verbose: ") + chalk.magenta(msg.data[0]))
  }
  if (msg.level == 'debug'){
    console.log(chalk.bold.cyan("Debug: ") + chalk.cyan(msg.data[0]))
  }
  if (msg.level == 'silly'){
    console.log(chalk.bold.gray("Silly: ") + chalk.gray(msg.data[0]))
  }
  
};

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
