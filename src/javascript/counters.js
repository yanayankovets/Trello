export function counter() {
  const todoCounterField = document.querySelector('.todo__counter') 
  const inProgressCounterField = document.querySelector(
      '.in__progress__counter'
  ) 
  const doneCounterField = document.querySelector('.done__counter') 
  let todoCounter = 0 
  let inProgressCounter = 0 
  let doneCounter = 0 

  const cards = JSON.parse(localStorage.getItem('todo cards')) || [] 

  cards.forEach((card) => {
    if (card.status == 'todo') {
      todoCounter++ 
    } else if (card.status == 'in progress') {
      inProgressCounter++ 
    } else if (card.status == 'done') {
      doneCounter++ 
    }
  }) 

  todoCounterField.textContent = todoCounter 
  inProgressCounterField.textContent = inProgressCounter 
  doneCounterField.textContent = doneCounter 
  console.log(todoCounter) 
  console.log(inProgressCounter) 
  console.log(doneCounter) 
}