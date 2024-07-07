"use strict";
// 'Aula 6 - POO'
// Classe: abstração
// Definindo a abstração de uma pessoa
class Pessoa {
    // Métodos: ação (funções)
    // Método construtor
    constructor(nome, idade, altura, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }
    dormir() {
        console.log("Dormindo... 😴💤");
    }
    // accessor: getter
    get cpf() {
        return this._cpf;
    }
    // accessor: setter
    set cpf(newCpf) {
        if (newCpf.length !== 14) {
            throw new Error('CPF length is incorrect!');
        }
        this._cpf = newCpf;
    }
}
class Professor extends Pessoa {
    constructor(nome, idade, altura, cpf, codigo) {
        super(nome, idade, altura, cpf);
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.cpf = cpf;
        this.codigo = codigo;
    }
    ensinar() {
        console.log('Ensinando... 👨‍🏫👩‍🏫');
    }
}
class Aluno {
}
// Criando uma pessoa (individuo/objeto) à partir da definição da clasese Pessoa
const pessoa1 = new Pessoa("Bruno", 27, 1.77, "123.456.789-00");
const pessoa2 = new Pessoa("Helena", 8, 1.21, "123.456.789-01");
console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa2);
console.log(pessoa2.nome);
console.log(pessoa2.idade);
pessoa1.dormir();
pessoa2.dormir();
// encapsulado
console.log(pessoa1.cpf); /*
  private: Property 'cpf' is private and only accessible within class 'Pessoa'.ts(2341) || A propriedade 'cpf' é privada e acessível apenas dentro da classe 'Pessoa'.ts(2341)
  readonly: lê mas não altera
  accessor: Vai retornar através do método getter o valor do atributo que está como private
  */
//pessoa1.cpf = '10' // Cannot assign to 'cpf' because it is a read-only property.ts(2540) | Não é possível atribuir a 'cpf' porque é uma propriedade somente leitura.ts(2540)
// porém logo após o setter, você consegue realizar a alteração
console.log(pessoa1.cpf);
// Objeto da Classe Professor
const professor = new Professor("Prof", 30, 1.68, '123.456.789-10', 'asdiuhsad123');
console.log(professor);
console.log(professor.altura);
console.log(professor.codigo);
console.log(professor.cpf);
console.log(professor.idade);
console.log(professor.nome);
professor.dormir();
professor.ensinar();
// Polimorfismo
console.log(pessoa1 instanceof Pessoa);
console.log(pessoa1 instanceof Professor);
console.log(professor instanceof Pessoa);
console.log(professor instanceof Professor);
