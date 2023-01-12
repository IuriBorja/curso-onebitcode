
ola();

function ola() {
    console.log("Olá, mundo!");
}

ola();




/* ------------------------ */



/* Parametros de uma função */



function dobro(a, b) {
    return a * b;
}

console.log(dobro(5, 5));



function dobro2(x) {
    console.log(`O dobro de ${x} é ${x * 2}`);
}

dobro2(10);



/* -------------- */


/* PARAMETROS PADROES */


function dizerOla(nome = "user") {
    console.log(`Olá, ${nome}!`);
}

dizerOla("Iuri");
dizerOla();



function soma(a, b, c, d, e = 50) {
    console.log(`A soma é ${a + b + c + d + e}`);
}

soma(30, 20, 5, 3, 18); // 76
soma(30, 20, 5, 3); // 108




/* TODO PARAMETRO PADRÃO DEVE SEMPRE SER O ULTIMO POIS O JAVASCRIPT NÃO LE OS PADROES QUE ESTÃO NO MEIO */
/* EXEMPLO */


/* JEITO ERRADO */

//function user1 (nome, email = "exemplo", senha, tipo)...


/* JEITO CORRETO */


//function user1 (nome, senha, tipo, email = "exemplo")...


/* TODO PARAMETRO DEVE SEGUIR A ORDEM */

function user (nome, email, senha, tipo = "admin") { // ORDEM nome, email, senha, tipo
    const usuario = {
        nome,
        email,
        senha,
        tipo
    };

    console.log(usuario);

}

user("Iuri", "blabla@email.com", "12345", "user"); // SEGUE ORDEM , nome, email, senha, tipo



/* QUANDO SE TEM UMA FUNÇÃO COM MUITOS PARAMETROS PODE SE USAR UM OBJ*/



function muitosParametros(nome, tel, endereco, niver, email, senha) {
    //...
}


/* COM OBJ */

function objetoParametro(usuario1) {
    //...
    usuario1.nome
    usuario1.email
}

const dadosDoUsuario = {
    nome: "Iuri",
    tel: "2222222",
    endereco: "rua ali",
    niver: "20 20 20",
    email: "aishdiashd@emal.com",
    senha: "123345"
};

console.log(objetoParametro(dadosDoUsuario));
