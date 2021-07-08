// THIS FILE IS HERE FOR FUTURE REFERENCE, IT IS NOT DOING ANYTHING
// IF ANY REMOTE CONTENT HAS TO BE ACCESSED FROM AN INTERNET CONNECTION
// THEN THE SECURITY DEFAULTS HAVE TO BE USED INSTEAD OF 
//   `nodeIntegration: true, contextIsolation: false` 
// AND THIS FILE WILL BE NEEDED AT THAT TIME.


// To print out the version numbers for Electron and its dependencies:
// Accessing this information is done in the main process through Node's global 
// process object. But the DOM can't be edited from the main process. It has no 
// access to the renderer's document context. They're in entirely different processes.
// So attach a preload script to the renderer. A preload script runs before the 
// renderer process is loaded, and has access to both renderer globals 
// (e.g. window and document) and a Node.js environment.

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})

// The above code accesses the Node.js process.versions object and runs a basic 
// replaceText helper function to insert the version numbers into the HTML document.
// To attach this script to the renderer process, pass in the path to the preload
// script to the webPreferences.preload option in the BrowserWindow constructor.

// // https://www.electronjs.org/docs/tutorial/context-isolation
// // With contextIsolation: true as it should be:
// const { contextBridge } = require('electron')

// contextBridge.exposeInMainWorld('myAPI', {
//   doAThing: () => {}
// })

// // Good code
// contextBridge.exposeInMainWorld('myAPI', {
//   loadPreferences: () => ipcRenderer.invoke('load-prefs')
// })








