import { $ } from './helpers.js'
import { createTemplate } from './templates.js'
import { hideModal } from './handlers.js'
import { addToLocalStorage } from './storage.js'
import {getTimeAndDate} from "./compositions";

// MODAL //
const titleElement = $('.title_input')
const descriptionElement = $('.description_input')
const selectUser = $('.dropdown-menu')
// const modalElement = $('.modal')
const modalForm = $('.modal-content')

// TODOS //
const numberTodos = $('.todo-left')
const openedTodos = $('.todo-column__tasks')


let todoList = []

function CreateTodo(title, description, user) {
    this.title = title
    this.description = description
    this.user = user
    this.createdAt = new Date()
    this.id = this.createdAt.getTime()
}

function addTodo(event) {
    event.preventDefault()

    if ((descriptionElement.value.trim()) !== '' || (titleElement.value.trim()) !== '') {
        todoList.push(new CreateTodo(titleElement.value, descriptionElement.value, selectUser.value))
    }
    modalForm.reset()
    hideModal()
    addToLocalStorage()
}

modalForm.addEventListener('submit', addTodo)


function renderTodoList() {
    numberTodos.innerHTML = `${todoList.length}`
    openedTodos.innerHTML = ''

    todoList.forEach((item) => {
        openedTodos.innerHTML += createTemplate(item)
    })
}
renderTodoList()


export { todoList, renderTodoList }
