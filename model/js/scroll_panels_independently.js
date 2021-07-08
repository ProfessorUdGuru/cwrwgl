// expand window when explorer panel opens



let isLeftMenuActive = true
const explorer = document.querySelector("#explorer")

let editor = document.querySelector("#editor").style
let numColPos = document.querySelector("#numCol").style
let col80 = document.querySelector("#col80").style
showHideMenus.addEventListener('click', () => {
  let editorWidth = document.querySelector("#editor").offsetWidth
  let windowWidth = document.body.clientWidth
  console.log(editorWidth, windowWidth)
  if (isLeftMenuActive) {
    // explorer.style.display = 'none' // can't do this, it changes line numbers
    editor.left = "1rem"
    numColPos.left = "1rem"
    col80.left = "87ch"
    document.querySelector("#editable").focus()
    isLeftMenuActive = false
    window.resizeBy(-284, 0)
    // window.resizeTo(screen.width - 284, screen.height)
  } else {
    // // explorer.style.display = 'block'
    explorer.left = "0"
    editor.left = "calc(20rem)"
    numColPos.left = "calc(20rem)"
    col80.left = "calc(20rem + 87ch)"
    document.querySelector("#editable").focus()
    isLeftMenuActive = true
    window.resizeBy(+284, 0)
    // window.resizeTo(screen.width - 284, screen.height)
  }
})

// const resizeBtn = document.getElementById('showHideMenus')
// resizeBtn.addEventListener('click', function () {
//   ipcRenderer.send('resize-for-explorer', isLeftMenuActive)
// })
// resizeBtn.addEventListener('click', function () {
//   ipcRenderer.send('resize-for-explorer', isLeftMenuActive)
// })

document.querySelector("#editable").focus()