function soma (a, b) {
    return a + b;
}

console.log(soma(5, 3));



const random = Math.floor(Math.random() * 6);

if (random === 1) {
    console.log("Resultado 1");
} else if (random === 2) {
    console.log("Resultado 2");
} else if (random === 3) {
    console.log("Resultado 2");
} else if (random === 4) {
    console.log("Resultado 2");
} else {
    console.log("NUMERO 5!!")
}


for(let i = 1; i <= random; i++) {
    const teste = `O valor de random é ${random}`;
    console.log(teste);
}