let num = 15;
let divisoes = 0;

for(let i = 1; i <= num; i++) {
    if(num % i == 0){
        divisoes++
    }
}

if(divisoes == 2){
    console.log(`O Numero ${num} é primo!`);
}  else{
    console.log(`O Numero ${num} não e primo!`);
} 