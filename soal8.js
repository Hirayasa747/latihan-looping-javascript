let total = 0;
let angka = ""
for(let i = 2; i <= 10; i += 2) {
total += i;
angka += i + (i < 10 ? "+" : "") }
console.log(angka + "=" + total)