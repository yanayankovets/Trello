export function editModal() {
  const modal = document.getElementById('editModal')
  const btns = document.querySelectorAll('.card__edit__btn')

  const span = document.getElementsByClassName('close')[1]

  btns.forEach((btn) => {
    btn.addEventListener('click', function () {
      modal.style.display = 'block'
    })
  })

  span.onclick = function () {
    modal.style.display = 'none'
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none'
    }
  }
}