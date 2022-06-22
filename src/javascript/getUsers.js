export function getUsers() {
  const select = document.querySelector('.users__select') 
  const editSelect = document.querySelector('.edit__select') 

  const getUsersFromApi = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users') 
    const data = await response.json() 
    localStorage.setItem('users', JSON.stringify(data)) 
    data.forEach((el) => {
      const option = document.createElement('option') 
      option.value = el.name 
      option.textContent = el.name 
      select.append(option) 
    })

    data.forEach((el) => {
      const option = document.createElement('option') 
      option.value = el.name 
      option.textContent = el.name 
      editSelect.append(option) 
    }) 
    return data 
  }
  return getUsersFromApi() 
}