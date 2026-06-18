let total = 0;
let angka = ""
for(let i = 1; i <= 5; i += 2) {
total += i;
angka += i + (i < 5 ? "+" : "")}
console.log(angka + "=" + total)