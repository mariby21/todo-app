const inputFiledNextTodo = document.querySelector(".input-from");
const btnAdd = document.querySelector(".add-btn");
const containerDiv = document.querySelector(".container-cur");

// const btnDelete = document.querySelector(".btn-delete");
// let taskValue = document.querySelector(".todo-input1");
// const wrap = document.querySelector(".wrap");

function addItem() {
  todoList();
}
addItem();

function todoList() {
  btnAdd.addEventListener("click", () => {
    if (inputFiledNextTodo.value === "") return alert("No empty field!");

    containerDiv.innerHTML += ` 
        <div class="wrap">
         <div class="todo">
          <input class="todo-input1" type="text" readonly value="${inputFiledNextTodo.value}" />
        </div>
      </div>`;

    inputFiledNextTodo.value = "";
  });
}

function checkItem() {
  const btnCheck = document.querySelector(".btn-check");
  btnCheck.addEventListener("click", () => {
    taskValue.classList.add("check");
    console.log("load");
  });
}

// btnDelete.addEventListener("click", () => {
//   wrap.remove();
// });
