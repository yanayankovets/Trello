import { counter } from './counters.js'
import { dragAndDrop } from './dragAndDrop.js'
import { editModal } from './editModal.js'

export const createCard = () => {
  const todoCell = document.querySelector('.js-todo-cell')
  const modal = document.getElementById('myModal')
  const btn = document.querySelector('.js-btn-add')
  const createBtn = document.querySelector('.js-create-btn')
  const span = document.getElementsByClassName('close')[0]
  const titleInput = document.querySelector('.title__input')
  const descriptionInput = document.querySelector('.description__input')

  btn.onclick = function () {
    modal.style.display = 'block'
  }

  span.onclick = function () {
    modal.style.display = 'none'
    titleInput.value = ''
    descriptionInput.value = ''
    localStorage.setItem('title', '')
    localStorage.setItem('description', '')
  }

  window.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = 'none'
      titleInput.value = ''
      descriptionInput.value = ''
      localStorage.setItem('title', '')
      localStorage.setItem('description', '')
    }
  })

  titleInput.addEventListener('input', (e) => {
    let value = e.target.value
    localStorage.setItem('title', value)
  })

  descriptionInput.addEventListener('input', (e) => {
    let value = e.target.value
    localStorage.setItem('description', value)
  })

  // Повесить обработчик на кнопку Confirm
  createBtn.addEventListener('click', () => {
    let id = +localStorage.getItem('id') || 0 // Вытянуть айди с локал сторэджа или поставить дефолтный 0, если его нет в локал сторэдже
    const select = document.querySelector('.users__select')
    console.log(select.value)
    localStorage.setItem('user', select.value)
    let todoCards = JSON.parse(localStorage.getItem('todo cards')) || [] // вытянуть карточки с локал сторэджа или поставить дефолт [], если их нет в локал сторэдже
    let current = new Date()
    let currentTime = current.toLocaleTimeString()

    // Создать объект с информацией о карточке
    const cardData = {
      title: localStorage.getItem('title'),
      description: localStorage.getItem('description'),
      time: currentTime,
      user: localStorage.getItem('user'),
      id: id,
      status: 'todo',
    }

    todoCards.push(cardData)

    // Отправить в локал сторэдж обновлённые данные(карточки и айди)
    localStorage.setItem('todo cards', JSON.stringify(todoCards))
    localStorage.setItem('id', id + 1) // Отправить обновлённый айди для того, чтобы в следующий раз при создании карточки был новый айди

    const cardBody = document.createElement('div')
    const cardTitle = document.createElement('p')
    const cardDescription = document.createElement('p')
    const cardInfo = document.createElement('div')
    const cardUser = document.createElement('p')
    const cardTime = document.createElement('p')
    const cardControls = document.createElement('div')
    const cardEditBtn = document.createElement('button')
    const cardDeleteBtn = document.createElement('button')

    cardTitle.textContent = localStorage.getItem('title')
    cardDescription.textContent = localStorage.getItem('description')
    cardUser.textContent = select.value
    cardTime.textContent = currentTime
    cardEditBtn.textContent = 'Edit'
    cardDeleteBtn.textContent = 'Delete'

    cardBody.draggable = true
    cardBody.id = id

    cardBody.classList.add('card')
    cardTitle.classList.add('card__title')
    cardDescription.classList.add('card__description')
    cardControls.classList.add('card__controls')
    cardEditBtn.classList.add('card__edit__btn')
    cardDeleteBtn.classList.add('card__delete__btn')
    cardInfo.classList.add('card__info')

    cardInfo.append(cardUser, cardTime)
    cardControls.append(cardEditBtn, cardDeleteBtn)
    cardBody.append(cardControls, cardTitle, cardDescription, cardInfo)
    todoCell.append(cardBody)
    modal.style.display = 'none'
    titleInput.value = ''
    descriptionInput.value = ''
    localStorage.setItem('title', '')
    localStorage.setItem('description', '')
    dragAndDrop()
    editModal()
    counter()
    id++
  })
}