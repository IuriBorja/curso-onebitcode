/* 
// inicialização ; condição ; finalização
for (let j = 0; j < 5; j++){
    console.log(`${j}.`);
}

console.log("###############################");

let nome = "Iuri Borja";

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
 */


/* --------------- */


/* let array = ["frio", "calor",
"gelado", "quente", "irineu", 
"jujuba", "fulano@email.com:22345621"];


for (let i = 0; i < array.length; i++) {
    let info = array[6].split(":");
    console.log(info);
} */

/* console.log(info); */



/* 
let array = ["belno@email.com:22345", "ano@email.com:621",
"fu@email.com:22345", "lan@email.com:25621", "ifulano@email.com:22345621", "fulano@email.com:22345621"];

let objArray = array.map(info => {
  let data = info.split(":");
  return {
    email: data[0],
    senha: data[1]
  }
});

console.log(objArray);
 */


 let array = ["belno@email.com:22345", "ano@email.com:621", "fu@email.com:22345", "lan@email.com:25621", "ifulano@email.com:22345621", "fulano@email.com:22345621"];

let objetos = [];

for (let i = 0; i < array.length; i++) {
    let info = array[i].split(":");
    let objeto = { email: info[0], senha: info[1] };
    objetos.push(objeto);
}

console.log(objetos);




/* 
let array2 = ["belno@email.com:22345", "ano@email.com:621", "fu@email.com:22345", "lan@email.com:25621", "ifulano@email.com:22345621", "fulano@email.com:22345621"];

let info = [];

for (let i = 0; i < array2.length; i++) {
    info += array2[i];
    console.log(info);
}
 */



let array3 = ["belno@email.com:22345", "ano@email.com:621", "fu@email.com:22345", "lan@email.com:25621", "ifulano@email.com:22345621", "fulano@email.com:22345621"];



let users = [];

for (let i = 0; i < array3.length; i++) {
    let info = array3[i].split(":");
    let obj = {
        email: info[0],
        password: info[1]
    };
    users.push(obj);
}

console.log(users);










