function dividir(num) {
    console.log(num);
    if (num % 2 === 0) {
        dividir(num / 2);
    } else {
        return num;
    }
}

dividir(100); // vai dividindo por 2 a partir do 100, ou seja, 100, 50, 25 e por fim chega




/* EXEMPLO COM FATORIAL */



function fatorial(n) {
    if (n === 1) {
      return 1; // base case
    } else {
        console.log(n - 1);
      return n * fatorial(n-1); // chamada recursiva
    }
}

console.log(fatorial(7));