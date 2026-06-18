let bintang=''
for(let i = 1; i<=5; i++){
for(let j = 1; j<=i; j++)
bintang +=  '* '
bintang += '\n'}
console.log(bintang)

let bintang2=''
for(let i = 4; i>=1; i--){
for(let j = 1; j<=i; j++)
bintang2 +=  '* '
bintang2 += '\n'}
console.log(bintang2)
console.log(bintang + bintang2)