const timeElement = document.getElementById("time")
let initTime = 0
let isRunning = false
let startTIme = null

const formatTime = (milliseconds) => {
  const data = new Date(milliseconds * 1000)

  const hours = data.getUTCHours().toString().padStart(2, "0")
  const minutes = data.getUTCMinutes().toString().padStart(2, "0")
  const seconds = data.getUTCSeconds().toString().padStart(2, "0")
  return `${hours}:${minutes}:${seconds}`

}

const start = () => {
  if (isRunning === false) {
    timeElement.dataset.mode = ""
    console.log("O time foi iniciado com sucesso!")
    startTIme = setInterval(() => {
      initTime += 1
      const time = formatTime(initTime)
      timeElement.textContent = time
    }, 1000);
    isRunning = true
  }
}

const pause = () => {
  if (isRunning === true) {
    timeElement.dataset.mode = "red"
    console.log("O time foi pausado com sucesso!")
    clearInterval(startTIme)
    isRunning = false
  }
}

const reset = () => {
  if (initTime > 0) {
    timeElement.dataset.mode = ""
    console.log("O time foi resetado com sucesso!")
    timeElement.innerText = formatTime(0)
    clearInterval(startTIme)
    isRunning = false
    initTime = 0
    startTIme = null
  }
}

async function startCronometro() {
  const containerButtons = document.getElementById("buttons")
  containerButtons.addEventListener("click", (e) => {
    e.preventDefault()

    const bottonclidado = e.target
    switch (bottonclidado.id) {
      case "start":
        start()
        break
      case 'pause':
        pause()
        break
      case "reset":
        reset()
        break
      default:
        return
    }

  })
}

startCronometro()