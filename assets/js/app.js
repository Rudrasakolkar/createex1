const cl=console.log;

const todoForm=document.getElementById("todoForm");

const todoItemControl = document.getElementById('todoItemControl');

const todoContainer = document.getElementById('todoList');

let todoArr=[
    {
        todoItem : "Angular"
    },
    {
        todoItem : "Js"
    },
    {
        todoItem:"Java"
    },
    {
        todoItem : "Ts"
    }
];

function createList(arr){
    let result='';
    arr.forEach(ele=>{
        result +=`
        <li class="list-group-item d-flex justify-content-between">
        <strong>${ele.todoItem}</strong>

        <div>
        <button class="btn btn-sm btn-outline-info">Edit</button>

        <button class="btn btn-sm btn-outline-danger">Remove</button>
        
        
        </div>
        </li>
        `;
    });
    todoContainer.innerHTML = result;
}

createList(todoArr);

function onTodoAdd(eve){
    eve.preventDefault()
    let todoobj = {
        todoItem: todoItemControl.value
    }
    createList(todoArr);
    todoForm.reset()
    todoArr.push(todoobj);
    cl(todoArr);
   
}

todoForm.addEventListener('submit' , onTodoAdd);

createList(todoArr);