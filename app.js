


const departSecond = 5
let temps = departSecond * 60

const timerElement = document.getElementById('time')

setInterval(() => {
    let secondes = parseInt(temps % 60, 10)

    secondes = secondes < 10 ? "60" + secondes : secondes

    timerElement.innerText = `time:${secondes}`
    temps = temps <= 0? 0 : temps - 1
}, 1000)