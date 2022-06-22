import { getTimeAndDate } from './compositions.js'

const createTemplate = ({title,description,user,createdAt, id }) => {
    const newDate = getTimeAndDate(createdAt)
    return ` 
    <div class="todo" id="${id}">
        <div class="header-todo">
            <p class="title-todo">${title}</p>
            <button type="button" class="btn btn-outline-secondary">Edit</button>
            <button type="button" class="btn btn-outline-danger">Delete</button>
        </div>
        <div class="description-todo">${description}</div>
        <div class="footer-todo">
            <div class="user-todo">${user}</div>
            <div class="time-todo">${newDate}</div>
        </div>
    </div>
	`
}

export { createTemplate }

