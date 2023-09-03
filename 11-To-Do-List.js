const todolist = [{
  name:'shreya',
  date: '2-2-2'
},
{
  name:'roy',
  date:'3-3-3'
}];
renderTodoList();
function renderTodoList(){
  let todoListHTML = '';
  for(let i= 0; i< todolist.length; i++)
  {
   const todoObject = todolist[i];
    /*const name = todoObject.name;
    const date = todoObject.date;*/
    const {name,date} = todoObject;
    const html = `
    <div>${name}</div>   
    <div>${date}</div>
    <button onclick="
    todolist.splice(${i},1);
    renderTodoList();
    " class="delete-button">Delete</button>`;
    todoListHTML = todoListHTML + html;
  }
  
  //console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

function addTodo()
{
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-date-input');
  const date = dateInputElement.value;
  todolist.push
  ({
  /* name : name,
   date : date,*/
   name,date

  });
 // console.log(todolist);

  inputElement.value = '';
  
  renderTodoList();
}