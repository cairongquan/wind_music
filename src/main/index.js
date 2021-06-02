import { app, BrowserWindow } from 'electron'
import '../renderer/store'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow;
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`


const ipc = require('electron').ipcMain;

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({ //
    height: 780,
    useContentSize: true,
    width: 1120,//宽
    frame: false,//无边框
    resizable: false,//用户可拖拽大小尺寸
    transparent: true, //背景是否透明
    thickFrame:true,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      experimentalFeatures: true,
      enableBlinkFeatures:"CSSBackdropfilter"
    }
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


ipc.on('close-window', () => { //关闭程序主进程
  mainWindow.close();
})

ipc.on('min-window', () => {
  mainWindow.minimize()
})

ipc.on('max',  ()=> {
  if (mainWindow.isMaximized()) {
    return mainWindow.restore();
  } else {
    mainWindow.maximize();
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
