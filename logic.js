//! 1.seleksi element
// unput text
const input = document.getElementById("input");
// button input
const tombol = document.querySelector("#btn");
//>>>>>>>>>>>>>
//input pencarian
const inputsearching = document.getElementById("inputsearch");
//button searching
const tombolsearching = document.getElementById("btnsearch");

//penampung
const pnampung = document.getElementsByClassName("penampung")[0];
const database = ["muhammad", "fajrin", "saputra"];

function buatelemen(e) {
  let n1 = document.createElement("div");
  let n2 = document.createElement("span");
  let btncl = document.createElement("button");
  btncl.innerText = "clear";
  n2.innerHTML = e.toLowerCase();
  n1.appendChild(btncl);
  n1.appendChild(n2);
  pnampung.appendChild(n1);
  btncl.addEventListener("click", tombolclear);

}

function tampilsemua() {
  database.forEach((e) => {
    buatelemen(e);
  });
}
let tombolclear = function (x) {
  this.parentElement.remove();
  console.log(this.parentElement.innerText);
};

const proses = function () {
  if (input.value == "") {
    alert("anda belum memasukan teks apapun;");
  } else {
    pnampung.innerHTML = "";
    database.push(input.value.toLowerCase());
    tampilsemua();
  }
};

tampilsemua();
tombol.addEventListener("click", proses);

function searc() {
  pnampung.innerHTML = "";
  database.forEach((e) => {
    if (e.includes(inputsearching.value.toLowerCase())) {
      buatelemen(e);
      console.log(e);
    }
  });
}


inputsearching.addEventListener("keydown", searc);
inputsearching.addEventListener("keyup", searc);
