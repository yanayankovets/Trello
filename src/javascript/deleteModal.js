export function deleteModal() {
  const modal = document.getElementById('deleteModal')
  const btn = document.querySelector('.js-delete-btn')

  btn.onclick = function () {
    modal.style.display = 'block'
  }

  window.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = 'none'
    }
  })
}