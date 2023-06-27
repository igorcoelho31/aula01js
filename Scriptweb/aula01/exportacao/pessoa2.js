export class PessoaDois{
    //Método construtor - método padrão de toda a classe
    constructor(nome,idade){
    this.nome = nome;
    this.idade = idade;
    }
    
    falarNome() {
        return this.nome;
    }

    falarIdade() {
        return this.idade;
    }
}