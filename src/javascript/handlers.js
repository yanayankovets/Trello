import { $, $$ } from './helpers.js'

// OPEN THE MODAL //

const modal = $('#mdl')
const addBtn = $('#add-btn')
const cancelBtn = $('#cancel')

function showModal() {
    modal.style.display = 'block'
}
addBtn.addEventListener('click', showModal)

function hideModal() {
    modal.style.display = 'none'
}
cancelBtn.addEventListener('click', hideModal)

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}

export { showModal, hideModal}




// DRAG & DROP TASKS //

const todos = $$('.todo')
const all_status = $$('.status')
let draggableTodo = null

todos.forEach(todo => {
    todo.addEventListener('dragstart', dragStart)
    todo.addEventListener('dragend', dragEnd)
})

function dragStart() {
    draggableTodo = this
}

function dragEnd() {
    draggableTodo = null
}

all_status.forEach(status => {
    status.addEventListener('dragover', dragOver)
    status.addEventListener('dragenter', dragEnter)
    status.addEventListener('dragleave', dragLeave)
    status.addEventListener('drop', dragDrop)
})

function dragOver(e) {
    e.preventDefault()
}

function dragEnter() {
}

function dragLeave() {
}

function dragDrop() {
    this.append(draggableTodo)
}
