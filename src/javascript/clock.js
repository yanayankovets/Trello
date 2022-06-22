const timeElement = document.querySelector('.clock')

export function currentTime() {
  let time = new Date()
  let hour = time.getHours()
  if (hour < 10) hour = '0' + hour
  let min = time.getMinutes()
  if (min < 10) min = '0' + min
  time = `${hour}:${min}`
  return time
}

setInterval(() => {
  timeElement.textContent = currentTime()
}, 0)