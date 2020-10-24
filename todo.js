const toDoForm = document.querySelector(".js-toDoForm"),
//document에서 .js-todoForm을 선택
  toDoInput = toDoForm.querySelector("input"),
  //toDoForm(즉 .js-toDoform에서 input을 선택)
  toDoList = document.querySelector(".js-toDoList");
  //document에서 js-toDolist를 선택

const TODOS_LS = 'toDos';
const toDos = [];



function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
      text: text,
      id: newId
    };
    toDos.push(toDoObj);
}

function handleSubmit(event){
    event.preventDefault();
    //이벤트를 취소
    const currentValue = toDoInput.value;
    //toDoInput의 값을 currentValue에 저장
    paintToDo(currentValue);
    //paintToDo의 text에 currentValue에 저장된 값을 저장
    toDoInput.value = "";
    //enter를 누르면 submit의 값이 사라진다
}

    function loadToDos(){
        const loadedToDos = localStorage.getItem(TODOS_LS);
        //localStorage에서 TODOS_LS값을 가져온다
        if (loadedToDos !==null){
const parsedToDos = JSON.parse(loadedToDos);
console.log(parsedToDos);
        }
    }
      function init(){
         loadToDos();
         toDoForm.addEventListener("submit", handleSubmit);
      }

      init();