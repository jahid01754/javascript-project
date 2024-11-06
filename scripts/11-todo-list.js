const todoList = [];
//const len = todoList.length;

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++){
    const task = todoList[i];
    const html = `<p>${task}</p>`;
    todoListHTML += html;
  }
  //console.log(task);
  console.log(todoListHTML);
  
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}



function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}
  

