// The code on this page is adapted from a YouTube tutorial by Wanderson:
// <!-- https://www.youtube.com/watch?v=6OcAoXr40oE -->

const maxResBtn = document.getElementById('maxResBtn')

//// MINIMIZE APP
minimizeBtn.addEventListener('click', () => {
  ipcRenderer.send('minimizeApp')
})

//// MAXIMIZE/RESTORE APP
function changeMaxResBtn(isMaximizedApp) {
  if (isMaximizedApp) {
    maxResBtn.title = 'Restore'
    maxResBtn.classList.remove('maximizeBtn')
    maxResBtn.classList.add('restoreBtn')
  } else {
    maxResBtn.title = 'Maximize'
    maxResBtn.classList.remove('restoreBtn')
    maxResBtn.classList.add('maximizeBtn')
  }
}
maxResBtn.addEventListener('click', () => {
  ipcRenderer.send('maximizeRestoreApp')
})
ipcRenderer.on('isMaximized', () => { changeMaxResBtn(true) })
ipcRenderer.on('isRestored', () => { changeMaxResBtn(false) })

//// CLOSE APP
closeBtn.addEventListener('click', () => {
  ipcRenderer.send('closeApp')
})