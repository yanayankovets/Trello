import { $ } from './helpers.js'


// SHOW TIME IN THE HEADER //

const timeElement = $('.time')

function formatTime() {
    let time = new Date()
    let hour = time.getHours()
    if (hour < 10) hour = '0' + hour
    let min = time.getMinutes()
    if (min < 10) min = '0' + min
    time = `${hour}:${min}`
    return time
}

setInterval(() => {
    timeElement.textContent = formatTime()
}, 0)

export { formatTime }


// SHOW TIME & DATE IN THE TASK //
function getTimeAndDate(date) {
    if (typeof (date) == 'string') {
        date = new Date(date)
    }
    let day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate()
    let month = ((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    let year = date.getFullYear()
    return ` ${day}.${month}.${year}`
}

export { getTimeAndDate }
