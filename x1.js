//! 1.seleksi element
const tombol = document.querySelector("#btn"); // ini button
// input
const input = document.getElementById("input");
//penampung

const pnampung = document.getElementsByClassName("penampung")[0];
const database = [];

const proses = function () {
  pnampung.innerHTML = "";
  database.push(input.value);
  for (i = 0; i < database.length; i++) {
    let n1 = document.createElement("div");
    let n2 = document.createElement("span");
    let btncl = document.createElement("button");

    // btncl.setAttribute("class","clear")
    btncl.innerText = "clear";
    n2.innerHTML = database[i];
    n1.appendChild(n2);
    n1.appendChild(btncl);
    pnampung.appendChild(n1);

    btncl.addEventListener("click", tombolclear);
  }

  // let n1= document.createElement('div');
  // let n2= document.createElement('span');
  // let btncl = document.createElement("button")
  // btncl.innerText= "clear"
  // n2.innerText = input.value;
  // n1.appendChild(n2);
  // n1.append(btncl)
  // pnampung.appendChild(n1);
  // console.log(btncl)
};
tombol.addEventListener("click", proses);

let tombolclear = function (x) {
  this.parentElement.remove();
  console.log(this.parentElement.innerText);
};

// const duox = document.getElementById("duo")
// const tiogx = document.getElementById("tigo")
// const xxxx = document.getElementById("bt1")

// xxxx.addEventListener("click",function(){
//    console.log(this.innerText)
//    this.parentElement.remove()
// })
