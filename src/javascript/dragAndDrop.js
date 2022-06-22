import { counter } from './counters.js' 

let draggedItem = null 

export function dragAndDrop() {
  const cells = document.querySelectorAll('.js-cell') 
  const cards = document.querySelectorAll('.card') 

  cards.forEach((card) => {
    card.addEventListener('dragstart', () => {
      draggedItem = card 
      console.log(draggedItem) 
      setTimeout(() => {
        card.style.display = 'none' 
      }, 0) 
    }) 

    card.addEventListener('dragend', () => {
      card.style.display = 'flex' 
      console.log(draggedItem) 
      draggedItem = null 
      console.log(draggedItem) 
    }) 

    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('card__edit__btn')) {
        const cardInfo = card.children[3]
        console.log(cardInfo)

        localStorage.setItem('edited title', card.children[1].textContent) 
        localStorage.setItem(
            'edited description',
            card.children[2].textContent
        ) 
        localStorage.setItem('edited user', cardInfo.children[0].textContent) 

        const editTitleInput = document.querySelector('.edit__title') 
        const editDescriptionInput =
            document.querySelector('.edit__description') 
        const editSelect = document.querySelector('.edit__select') 

        const todoCards = JSON.parse(localStorage.getItem('todo cards')) 
        const editCard = todoCards.find((eCard) => eCard.id == card.id) 

        let titleValue = editCard.title 
        let descriptionValue = editCard.description 
        let selectValue = editCard.user 

        editTitleInput.value = titleValue 
        editDescriptionInput.value = descriptionValue 
        editSelect.value = selectValue 

        editTitleInput.addEventListener('input', () => {
          localStorage.setItem('edited title', editTitleInput.value) 
        }) 

        editDescriptionInput.addEventListener('input', () => {
          localStorage.setItem(
              'edited description',
              editDescriptionInput.value
          ) 
        }) 

        editSelect.addEventListener('change', () => {
          localStorage.setItem('edited user', editSelect.value) 
        }) 

        const editBtn = document.querySelector('.edit__btn') 
        console.log(editBtn) 
        editBtn.addEventListener('click', () => {
          card.children[1].textContent = localStorage.getItem('edited title') 
          card.children[2].textContent =
              localStorage.getItem('edited description') 

          cardInfo.children[0].textContent =
              localStorage.getItem('edited user') 
          editCard.title = localStorage.getItem('edited title') 
          editCard.description = localStorage.getItem('edited description') 
          editCard.user = localStorage.getItem('edited user') 
          console.log(todoCards) 
          localStorage.setItem('todo cards', JSON.stringify(todoCards)) 

          const modal = document.getElementById('editModal') 
          modal.style.display = 'none' 
        }) 
      } else if (e.target.classList.contains('card__delete__btn')) {
        const todoCards = JSON.parse(localStorage.getItem('todo cards')) 
        const newTodoCards = todoCards.filter(
            (todoCard) => todoCard.id != card.id
        ) 
        localStorage.setItem('todo cards', JSON.stringify(newTodoCards)) 
        card.remove() 
        counter() 
      }
    }) 

    card.addEventListener('dblclick', () => {
      const todoCards = JSON.parse(localStorage.getItem('todo cards')) 
      const newTodoCards = todoCards.filter(
          (todoCard) => todoCard.id != card.id
      ) 

      localStorage.setItem('todo cards', JSON.stringify(newTodoCards)) 
      card.remove() 
      counter() 
    }) 

    cells.forEach((cell) => {
      cell.addEventListener('dragover', (e) => e.preventDefault()) 
      cell.addEventListener('dragenter', function (e) {
        this.style.backgroundColor = '#ffffff' 
      }) 

      cell.addEventListener('dragleave', function () {
        this.style.backgroundColor = '#ffffff' 
      }) 

      cell.addEventListener('drop', function (e) {
        e.preventDefault() 

        this.style.backgroundColor = '#ffffff' 
        if (e.target.children.length < 6) {
          const cards = JSON.parse(localStorage.getItem('todo cards')) 
          const draggedCard = cards.find((card) => +card.id == +draggedItem.id) 
          const draggedCardId = cards.indexOf(draggedCard) 
          console.log(draggedCardId) 

          if (e.target.classList.contains('js-in-progress-cell')) {
            draggedCard.status = 'in progress' 
          } else if (e.target.classList.contains('js-done-cell')) {
            draggedCard.status = 'done' 
          } else if (e.target.classList.contains('js-todo-cell')) {
            draggedCard.status = 'todo' 
          }

          cards[draggedCardId] = draggedCard 
          localStorage.setItem('todo cards', JSON.stringify(cards)) 

          console.log(draggedCard) 
          counter() 
          this.append(draggedItem) 
        } else {
          console.log('no') 
        }
      }) 
    }) 
  }) 
}