const inputFiledNextTodo = document.querySelector(".input-from");
const btnAdd = document.querySelector(".add-btn");
const containerDiv = document.querySelector(".container-cur");
//To append all chields
const wrap = document.querySelector(".wrap");

// All the events happen when addItem is shot
function addItem() {
  todoList();
}

function todoList() {
  btnAdd.addEventListener("click", () => {
    if (inputFiledNextTodo.value === "") return alert("No empty field!");

    //Create el, btn's and atr when event is shot
    // Todo Div
    let todoDiv = document.createElement("div");
    todoDiv.classList = "todo";
    // Input filed
    let inputFieldCurrTasks = document.createElement("input");
    inputFieldCurrTasks.classList = "todo-input1";
    inputFieldCurrTasks.value = inputFiledNextTodo.value;
    // Button Check
    let btnCheck = document.createElement("button");
    btnCheck.classList = "btn btn-check";
    // Check icon(need to remove pointer event)
    let span = document.createElement("span");
    span.classList = "material-symbols-outlined";
    span.textContent = "check";
    btnCheck.append(span);
    // Delete Button
    let btnDelete = document.createElement("button");
    btnDelete.classList = "btn btn-delete";
    //Trash icon
    let spanTrash = document.createElement("span");
    spanTrash.classList = "material-symbols-outlined";
    spanTrash.textContent = "delete";
    btnDelete.append(spanTrash);
    //Apend all new childs to the parent div
    todoDiv.append(inputFieldCurrTasks, btnCheck, btnDelete);
    wrap.append(todoDiv);

    //Buttons event's
    btnCheck.addEventListener("click", () => {
      inputFieldCurrTasks.classList.toggle("check");
    });

    btnDelete.addEventListener("click", () => {
      todoDiv.remove();
    });

    inputFiledNextTodo.value = "";
  });
}

addItem();
