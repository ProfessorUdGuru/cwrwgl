
const {ipcRenderer} = require('electron')

// "About" dialog

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (id, version) => {
    const element = document.getElementById(id)
    if (element) element.innerText = version
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})

// expand window when explorer panel opens
let explorerOpen = true
const explorer = document.querySelector("#explorer")

let editor = document.querySelector("#editor").style
let numColPos = document.querySelector("#numCol").style
let col80 = document.querySelector("#col80").style

showHideMenus.addEventListener('click', () => {
  if (explorerOpen) {
    editor.left = "0"
    numColPos.left = "0"
    col80.left = "87ch"
    explorerOpen = false
    explorer.style.left = "-20rem"
    editor.width = "100%"
    editor.overflowY = "scroll"
    document.querySelector("#editable").focus()
  } else {
    editor.left = "20rem"
    numColPos.left = "20rem"
    col80.left = "calc(20rem + 87ch)"
    explorerOpen = true
    explorer.style.left = "0"
    editor.width = "calc(100% - 20rem)"
    editor.overflowY = "scroll"
    document.querySelector("#editable").focus()
  }
})

const resizeBtn = document.getElementById('showHideMenus')
resizeBtn.addEventListener('click', function () {
  ipcRenderer.send('resize-for-explorer', explorerOpen)
})

document.querySelector("#editable").focus()







