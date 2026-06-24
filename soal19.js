const prompt = require('prompt-sync')({sigint : true});
let jumlahData = parseInt(prompt("Masukkan jumlah nilai:"));
let total = 0;
let hasil = "Masukkan jumlah nilai: " + jumlahData + "\n\n";

for (let i = 1; i <= jumlahData; i++) {
  let nilai = parseInt(prompt("Masukkan nilai ke-" + i + ":"));
  hasil += "Nilai ke-" + i + " = " + nilai + "\n";
  total += nilai;}

let rataRata = total / jumlahData;

hasil += "\nJumlah nilai = " + total;
hasil += "\nRata-rata = " + rataRata;

console.log(hasil);