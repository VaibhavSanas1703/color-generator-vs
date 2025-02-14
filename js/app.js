
const inputs = document.querySelectorAll(".custom-inputs input")
const gradientBox = document.querySelector(".gradient-box")
const refreshBtn = document.querySelector(".refresh")
const colorInfo = document.querySelector(".gradient-information p")
const selectMenu = document.querySelector("#selectMenu")
const copyBtn = document.querySelector(".copy")

const getRandomColor = () => {
     const randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
     return `#${randomHex}`
}

const generateGradient = (isRandom) => {
     if(isRandom){
          inputs[0].value = getRandomColor()
          inputs[1].value = getRandomColor()
     }
     const gradient = `linear-gradient(${selectMenu.value},${inputs[0].value},${inputs[1].value})`
     gradientBox.style.background = gradient
     colorInfo.innerHTML = `background: ${gradient}`
}

const copyInfo = () => {
     navigator.clipboard.writeText(colorInfo.innerHTML)
     copyBtn.innerHTML = "Code Copied"
     setTimeout(() => {
             copyBtn.innerHTML = "Copy"
     }, 1400);
}

inputs.forEach((input) => {
     input.addEventListener("input",() => generateGradient(false))
})

selectMenu.addEventListener("change",() => generateGradient(false))
refreshBtn.addEventListener("click",() => generateGradient(true))
copyBtn.addEventListener("click",copyInfo)
