let pessoa = {
    nome: "Iuri",
    idade: 32,
    dizerOla() {
        console.log(`Olá mundo! Meu nome é ${this.nome}`); // Em uma função dentro de um objeto, "this" se refere ao próprio objeto, ou seja, o "this" esta referenciando a chave nome do proprio objeto.
    }
};


console.log(pessoa);

pessoa.dizerOla();