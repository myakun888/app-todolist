let hitung = 0;
let hitung2 = 0;
let doanya = "ya allah jadikan hamba kayaraya punya uang 10 trilliun dollar AS"
async function doa() {
  await setInterval(() => {
    hitung++;

    if (hitung % 10 == 0) {
      hitung++
     
        console.log(`   ${doanya.toUpperCase()}`);
     
    }else if(hitung % 12 == 0){
      console.log('ya allah pinterkanlah hamba dalam pemrograman dan memilki skill profesional seorang software enginer, back end')
    }
    console.log(
      `laa ilaaha illaa anta subhaanaka inni kuntu minazh zhaalimiin ${hitung}`
    );

    // console.log(` laa ilaaha illaa anta subhaanaka inni kuntu minazh zhaalimiin ${hitung}`)
  }, 1000);
}

doa();
