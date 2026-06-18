let bintang = '';
 for (let i = 1; i <= 5; i++) {
   let baris = "";

   for (let j = 1; j <= 5 - i; j++) {
     baris += " ";
   }

   for (let k = 1; k <= i; k++) {
     baris += "* ";
   }

   console.log(baris);
 }
 for (let i = 4; i >= 1; i--) {
   let bintang = " ";

   for (let j = 1; j <= 4 - i; j++) {
      bintang += " ";
   }

   for (let k = 1; k <= i; k++) {
     bintang += "* ";
   }

   console.log(bintang);
 }