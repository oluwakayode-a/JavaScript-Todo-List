// Add a Todo to the list of todos when I click the add btn
    // Get the text in the input element
    // Listen for click events when you click the Add Button

// Delete All Checked Todos when you click Del Comp
// Delete All Todos when you click Del All

// Get all DOM Elements
const todoInput = document.getElementById('todo-input')
const addForm = document.getElementById('todo-form')
const todoList = document.getElementById('todo-list')
const delCompleted = document.getElementById('del-completed')
const delAll = document.getElementById('del-all')

addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let todoText = todoInput.value
    // If there is no text in the input, do nothing
    if(!todoText) return

    todoList.innerHTML += `<li class="list-group-item">${todoText}</li>`
    todoInput.value = ''
})


todoList.addEventListener('click', function(e) {
    listClicked = e.target
    listClicked.classList.toggle('todo-completed')
})

delCompleted.addEventListener('click', function(e) {
    let todosCompleted = document.getElementsByClassName('todo-completed');
    
    for(let index = todosCompleted.length; index --;) {
        todosCompleted[index].remove()
    }
})

delAll.addEventListener('click', function(e) {
    let allTodos = todoList.children

    for(let index = allTodos.length; index --;) {
        allTodos[index].remove()
    }
})