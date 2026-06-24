const prompt = require('prompt-sync')({sigint : true});
let n = parseInt(prompt("Masukkan jumlah perkalian:"));

let hasil = "\t";

for (let i = 1; i <= n; i++) {
  hasil += i + "\t";
}
hasil += "\n";

for (let i = 1; i <= n; i++) {
  hasil += i + "\t"; 

  for (let j = 1; j <= n; j++) {
    hasil += (i * j) + "\t";
  }

  hasil += "\n";
}

console.log(hasil);