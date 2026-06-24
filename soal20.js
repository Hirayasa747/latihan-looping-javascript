let n = 8;

for (let i = 1; i <= n; i++) {
  let hasilBaris = "";
  for (let j = 1; j <= n; j++) {
    hasilBaris += (i * j) + "\t";
  }
  console.log(hasilBaris);
}
