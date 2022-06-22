import { dragAndDrop } from './dragAndDrop.js'

export function renderCards() {
  let cards = JSON.parse(localStorage.getItem('todo cards')) || [] 
  const todoCell = document.querySelector('.js-todo-cell') 
  const inProgressCell = document.querySelector('.js-in-progress-cell') 
  const doneCell = document.querySelector('.js-done-cell') 

  const select = document.querySelector('.users__select') 

  cards.forEach((card) => {
    if (card.status == 'todo') {
      const cardBody = document.createElement('div') 
      const cardTitle = document.createElement('p') 
      const cardDescription = document.createElement('p') 
      const cardInfo = document.createElement('div') 
      const cardUser = document.createElement('p') 
      const cardTime = document.createElement('p') 
      const cardControls = document.createElement('div') 
      const cardEditBtn = document.createElement('button') 
      const cardDeleteBtn = document.createElement('button') 

      cardTitle.textContent = card.title 
      cardDescription.textContent = card.description 
      cardUser.textContent = card.user 
      cardTime.textContent = card.time 
      cardEditBtn.textContent = 'Edit' 
      cardDeleteBtn.textContent = 'Delete' 

      cardBody.draggable = true
      cardBody.id = card.id 

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
    }

    if (card.status == 'in progress') {
      const cardBody = document.createElement('div') 
      const cardTitle = document.createElement('p') 
      const cardDescription = document.createElement('p') 
      const cardInfo = document.createElement('div') 
      const cardUser = document.createElement('p') 
      const cardTime = document.createElement('p') 
      const cardControls = document.createElement('div') 
      const cardEditBtn = document.createElement('button') 
      const cardDeleteBtn = document.createElement('button') 

      cardTitle.textContent = card.title 
      cardDescription.textContent = card.description 
      cardUser.textContent = card.user 
      cardTime.textContent = card.time 
      cardEditBtn.textContent = 'Edit' 
      cardDeleteBtn.textContent = 'Delete' 

      cardBody.draggable = true 
      cardBody.id = card.id 

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
      inProgressCell.append(cardBody) 
    }

    if (card.status == 'done') {
      const cardBody = document.createElement('div') 
      const cardTitle = document.createElement('p') 
      const cardDescription = document.createElement('p') 
      const cardUser = document.createElement('p') 
      const cardTime = document.createElement('p') 
      const cardControls = document.createElement('div') 
      const cardEditBtn = document.createElement('button') 
      const cardDeleteBtn = document.createElement('button') 

      cardTitle.textContent = card.title 
      cardDescription.textContent = card.description 
      cardUser.textContent = card.user 
      cardTime.textContent = card.time 
      cardEditBtn.textContent = 'Edit' 
      cardDeleteBtn.textContent = 'Delete' 

      cardBody.draggable = true 
      cardBody.id = card.id 

      cardBody.classList.add('card') 
      cardTitle.classList.add('card__title') 
      cardDescription.classList.add('card__description') 
      cardControls.classList.add('card__controls') 
      cardEditBtn.classList.add('card__edit__btn') 
      cardDeleteBtn.classList.add('card__delete__btn') 

      cardControls.append(cardEditBtn, cardDeleteBtn) 
      cardBody.append(
          cardControls,
          cardTitle,
          cardDescription,
          cardUser,
          cardTime
      ) 
      doneCell.append(cardBody) 
    }
  }) 
  dragAndDrop() 
}