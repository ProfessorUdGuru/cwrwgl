const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const path = require('path')
let win;
let addWindow;

function createWindow () {
  win = new BrowserWindow({
    width: 1000,
    height: 700,
    minWidth: 500,
    minHeight: 400,
    frame: false, // hide the standard title bar after adding custom menu
    webPreferences: {
      // preload: path.join(__dirname, './js/preload.js'), 
      devTools: true,
      spellcheck: false,
      nodeIntegration: true, contextIsolation: false
    }
  })

  win.loadFile('cwrwgl.html')

  //// MAXIMIZE/RESTORE APP
  ipcMain.on('maximizeRestoreApp', () => {
    if (win.isMaximized()) {
    console.log('Clicked on Restore Button')
    win.restore()    
    } else {
      console.log('Clicked on Maximize Button')
      win.maximize()
    }
  })
  // Check if is maximized
  win.on('maximize', () => {
    win.webContents.send('isMaximized')
  })
  // Check if is restored
  win.on('unmaximize', () => {
    win.webContents.send('isRestored')
  })
  
  //// MINIMIZE APP
  ipcMain.on('minimizeApp', () => {
    console.log('Clicked on Minimize Button')
    win.minimize()
  })

  //// CLOSE APP
  ipcMain.on('closeApp', () => {
    console.log('Clicked on Close Button')
    win.close()
  })
}

// Browser windows can only be created after the app module's `ready` event is fired.

// MacOS apps generally continue running even without any windows open, and 
// activating the app when no windows are available should open a new one.
// Listen for the app module's activate event, and open a window if none are open.
// Because windows cannot be created before the ready event, only listen for 
// activate events after the app is initialized, by attaching the event 
// listener from within the existing whenReady() callback.

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
})

// how to do a dialog per Grider todo tutorial
function createAddWindow() {
  addWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: 'Add New Todo',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  addWindow.loadURL(`file://${__dirname}/about.html`);
  // allow garbage collection
  addWindow.on('closed', () => addWindow = null);
}
ipcMain.on('todo_add', (evt, todo) => {
  win.webContents.send('todo_add', todo);  
  addWindow.close();
})

// On Windows and Linux, exiting all windows generally quits an application.
// To implement this, listen for the app module's 'window-all-closed' event, 
// and call quit if the user is not on macOS.

app.on('window-all-close', function () {
  if (process.platform !== 'darwin') app.quit()
})

// To print out the version numbers for Electron and its dependencies:
// Accessing this information is done in the main process through Node's global 
// process object. But the DOM can't be edited from the main process. It has no 
// access to the renderer's document context. They're in entirely different processes.
// So attach a preload script to the renderer. A preload script runs before the 
// renderer process is loaded, and has access to both renderer globals 
// (e.g. window and document) and a Node.js environment.

// To add more functionality to the application:
// For interactions with the web contents, add scripts to the renderer process. 
// Because the renderer runs in a normal web environment, add a <script> tag right 
// before the html file's closing </body> tag to include any arbitrary scripts 
// you want: `<script src="./renderer.js"></script>`. The code in renderer.js can 
// then use the same JavaScript APIs and tooling you use for typical front-end 
// development, such as using webpack to bundle and minify the code or React to 
// manage the user interfaces.

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


/* Mac shows menus differently, in the screen title bar instead of
in a window title bar. Mac also shows "Electron" as a first menu
item (app menu) so this difference has to be taken into account.
To do this, add a first menu item which is an empty object, but
conditionally so it won't exist except on a Mac */

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'About Cwrwgl',
        accelerator: 'Ctrl+K',
        click() { createAddWindow(); }
      },
      {
        label: 'Clear To Dos',
        click: () => {
          mainWindow.webContents.send('todo_clear');
        }
      },
      { 
        label: 'Quit',
        accelerator: process.platform === 'darwin' ?  'Command+Q' : 'Ctrl+Q',
        click: () => {
          app.quit();
        }
      }
    ]
  }
];
if (process.platform === 'darwin') {
  menuTemplate.unshift({});
}

if (process.env.NODE_ENV !== 'production') {
  menuTemplate.push({
    label: 'Developer',
    submenu: [
      // Electron has some preset `role` options available for adding
      //  back in certain hot keys lost when opting out of the default menu
      // e.g. 'reload' so you don't have to define accelerator etc.
      // The roles work even if the menu bar is turned off completely with 
      //  `frame: false`.
      { role: 'reload' },
      {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin' ? 'Command+Alt+I' : 'Ctrl+Shift+I',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      }
    ]
  });
}

// expand window when explorer panel opens
// can this be moved to a different .js file or does it have to be in main.js?
// maybe for access to `win` it has to be here?

ipcMain.on('resize-for-explorer', (event, arg) => {
  console.log(arg)
  let offset = 320
  let origSize = win.getContentSize()
  let origPos = win.getPosition()
  let x = origPos[0]
  let y = origPos[1]
  let width = origSize[0]
  let height = origSize[1]
  console.log(origSize)
  if (arg === true) {
    win.setSize(width + offset, height)
    win.setPosition(x - offset, y)    
  } else {
    win.setSize(width - offset, height)
    win.setPosition(x + offset, y) 
  }


})







