const arr = [
    "teste",
    ["Never", "Ever", true, [1, 2, 3, 4]],
    [false, null, undefined],
    [345,18],
    ["coelho"], 
    ["RHCP"],
    ["Lenda"]
];


for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
        const teste = arr[i][j];
        console.log(teste);
    }
}


/* console.log(arr[1][3][2]); // 3
console.log(arr[2][1]); // null
 */


const matriz = [ 
["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
["l2, c1", "l2, c2", "l2, c3", "l2, c4"], 
["l3, c1", "l3, c2", "l3, c3", "l3, c4"], ];



/* ITERAR SOBRE ARRAYS BIDIMENSIONAIS */

/* for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        const elemento = matriz[i][j];
        console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento);
    }
} */


