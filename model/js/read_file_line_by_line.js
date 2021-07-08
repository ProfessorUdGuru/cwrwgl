let input = document.querySelector("input")
let editor = document.querySelector("#editor")

input.addEventListener("change", () => {
  let files = input.files

  if (files.length === 0) return

  const file = files[0]

  let reader = new FileReader()

  reader.onload = (evt) => {
    const file = evt.target.result
    // console.log("file:", file)
    const lines = file.split(/\r\n|\n/)
    // console.log("lines:", lines)
    // editor.value = lines.join("\n") // this works for textarea not div
    let content = lines.join("\n") // this works for textarea but there are no line breaks in the displayed output
    // console.log("content:", content)
    
    
    let text = document.createTextNode(content)
    editor.appendChild(text)
  }

  reader.onerror = (evt) => alert(evt.target.errorl.name)

  reader.readAsText(file)
})