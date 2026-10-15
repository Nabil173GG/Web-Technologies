let todoList = [];

let tombolT = document.getElementById("btnT");
let inputT = document.getElementById("inputT");
let areaList = document.getElementById("areaList");

tombolT.onclick = function () {
  let tugasBaru = inputT.value;

  if (tugasBaru === "") {
    alert("Tugas tidak boleh kosong");
    return;
  }

  todoList.push(tugasBaru);
  inputT.value = "";

  let isiHTML = "<ul class='list-group'>";
  for (let i = 0; i < todoList.length; i++) {
    isiHTML +=
      "<li class='list-group-item list-group-item-primary mb-2 rounded'>" +
      todoList[i] +
      "</li>";
  }

  isiHTML += "</ul>";
  areaList.innerHTML = isiHTML;
};
