let Huruf= 0;
 let angka = ""
 for (let i = 1; i <= 5; i++) {
   Huruf += i;
   angka += i + (i < 5 ? " " : ""); }
console.log(angka + "=" + Huruf);