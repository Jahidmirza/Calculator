function Claer() {
   document.querySelector(".input").value = "";
}

function del() { 
   const outputDel = document.querySelector(".input");
   outputDel.value = outputDel.value.slice(0, -1);
}

function display(newValue) {
   document.querySelector(".input").value += newValue;
}

function answer() {
   const a = document.querySelector(".input").value;
   const b = eval(a);
   document.querySelector(".input").value = b ;
}
