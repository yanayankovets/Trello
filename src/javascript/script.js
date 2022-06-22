import { currentTime } from './clock.js'
import { counter } from './counters.js'
import { createCard } from './createCard.js'
import { deleteAll } from './deleteAll.js'
import { deleteModal } from './deleteModal.js'
import { dragAndDrop } from './dragAndDrop.js'
import { editModal } from './editModal.js'
import { getUsers } from './getUsers.js'
import { renderCards } from './renderCards.js'

getUsers()
currentTime()
renderCards()
dragAndDrop()
createCard()
deleteModal()
editModal()
deleteAll()
counter()
