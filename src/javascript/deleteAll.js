import { counter } from './counters.js'

export function deleteAll() {
  const modal = document.getElementById('deleteModal')
  const deleteAllBtn = document.querySelector('.js-delete-all-btn')
  const doneCell = document.querySelector('.js-done-cell')

  deleteAllBtn.addEventListener('click', () => {
    const cards = JSON.parse(localStorage.getItem('todo cards'))
    const filteredCards = cards.filter((card) => card.status != 'done')
    localStorage.setItem('todo cards', JSON.stringify(filteredCards))
    modal.style.display = 'none'
    while (doneCell.firstChild) {
      doneCell.removeChild(doneCell.lastChild)
    }
    counter()
  })
}