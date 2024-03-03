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

//penampung, ini adalah div yang digunakan untuk menampung element
const pnampung = document.getElementsByClassName("penampung")[0];

//database berbasis array , disini di isi secara default, jika ingin
const database = ["muhammad", "fajrin", "saputra"];

//! ini function yang berfungsi membuat elematn
function buatelemen(e) {
  let n1 = document.createElement("div"); // membuat elelemen div
  let n2 = document.createElement("span"); // membuat element spant
  let btncl = document.createElement("button"); // membuat element button
  btncl.innerText = "clear"; // memberi text pada tombol botton
  n2.innerHTML = e.toLowerCase(); // parameter, akan di ubah menjadi lowercase
  n1.appendChild(btncl); //menambahkan btncl ke dalam n2 atau element div
  n1.appendChild(n2); // menambahkan element span ke dalam div
  pnampung.appendChild(n1); //menambahkan elemt div(yang sudah ada tombol dan text) kedalam element div (penampung)
  btncl.addEventListener("click", tombolclear); //memberikan dan menjalankan function 'tombolclear' pada btncl

}

//! function tampilsemua, berguna untuk menampilkan semua database
function tampilsemua() {
  //memproses database dengan metod forech
  database.forEach((e) => {
    //lalu isi dari arraynya dibuat element dengan memasukan nya menajdi paramater di fungsi buatelement
    buatelemen(e);
  });
}

//! function tombolclear, berguna untuk menghapus data yang tampil
let tombolclear = function (x) {
  // mengunakan keyword this ,dan metodh parentelemnt
  //artinya mengahpus parent elemnet dari tombol yang sedang di click
  this.parentElement.remove();
  //ini menampilkan pada console , data yang dihapus
  console.log(this.parentElement.innerText);
};

//! function proses , berguna memproses dari hasil yang di inputkan dari kolom input
const proses = function () {

  // ada control flow , dimana jika kolom input ('masukan kegiatan') masih kosong / string kosong,
  if (input.value == "") {
    alert("anda belum memasukan teks apapun;");
  } 
  // selain dari itu proses akan di jalankan
  else {
//pertama semua isi dari penampung akan di kosongkan dengan mengisi inner html dari penampung berupa string kosong ""
    pnampung.innerHTML = "";
  //lalu value atau nilai dari kolom input di push / dimasukan kedalam array database
    database.push(input.value.toLowerCase());
  //setelah di proses lalu dijalankan function tampil semua
    tampilsemua();
  }
};


//! menajalanka function tampil semua
tampilsemua();

// memberikan eventlistener clik pada variabel tombol, dan memberikan function proses
tombol.addEventListener("click", proses);

//!funsi search , berguna untuk menjalankan pencarian dari dalam database dan menampilkan sesuai dengan value yang dimasukan ke dalam kolom pencarian
function searc() {
  //semua isi dari penampung akan di kosongkan dengan mengisi inner html dari penampung berupa string kosong ""
  pnampung.innerHTML = "";
  //mengeluarkan isi arrah database dengan metod foreach lalu isi ny (e), lalu isi ny di keluarkan dan dibuat dengan kondisi
  database.forEach((e) => {
    //jika kondisi / isi dari array sama dengan isi dari kolom pencarian 
    if (e.includes(inputsearching.value.toLowerCase())) {
      //lalu hasil yang cocok dimasukan / diproses ke dalam function buat element, lalu di proses oleh buatlelemmen
      buatelemen(e);
      //menampilkan hasil yang cocok pada console
      console.log(e);
    }
  });
}


//memberikan eventlistener keyup dan keydown pada variabel inputsearcing, dan memberikan funciton searc
inputsearching.addEventListener("keydown", searc);
inputsearching.addEventListener("keyup", searc);
