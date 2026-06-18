let n = 5;

for (let i = 1; i <= n; i++) {
let baris = "";

for (let j = 1; j <= n - i; j++) {
 baris += " ";
}

 for (let k = 1; k <= i; k++) {
   baris += "* ";   }

console.log(baris); }