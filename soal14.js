let bintang1=''
for(let i = 0; i<=4; i++){
for(let j = 1; j<=i; j++)
bintang1 +=  '* '
bintang1 += '\n'}

let bintang2=''
for(let i = 0; i<=1; i++){
bintang2 +=  '* '
}

let bintang3 =''
for(let i = 5; i>=1; i--){
for(let j = 1; j<=i; j++)
bintang3 +=  '* '
bintang3 += '\n'
}
console.log( bintang1 + bintang2 + bintang3)