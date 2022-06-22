import { todoList, renderTodoList } from './app.js'


const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('todoList'))
}

function addToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList))
    renderTodoList(todoList)
}

export { addToLocalStorage }