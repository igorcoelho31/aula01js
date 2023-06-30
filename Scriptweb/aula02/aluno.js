export class Aluno{
    /*
    nome; 
    sobreNome; */

    //Atributo Privado não pode ser usado fora da classe. Ele é utilizado para proteger dados sensíveis como CPF, o atributo privado é representado com um "_" antes da variavel.
    //Para ter acesso a um Atributo privado é necessário encapsular.
   
    _cpf
    constructor(n1, n2){  //O construtor pode ser usado para construir os atributos / dentro dos parenteses vc passa os parametros que deseja ser usado.
        this.nome = n1;  //Quando o construtor é usado, pode retirar a declaração de variaveis acima.
        this.sobreNome = n2;
    }

    //Para encapsular usamos o método set.
    //O método set sempre será necessário passar parametros.
    set inserirCpf(cpf){
        this._cpf = cpf;

    }

    //Para visualizar um atributo Privado utilizamos o método get
    //O get terá sempre o mesmo nome do set
    //Dentro de um método não é recomendado utilizar o console.log para exibir o resultado e sim o return para conseguir exibir em qualquer lugar
    get inserirCpf(){
        return this._cpf;
    }

    falarNome(){
        try{
            return this.nome; //O this é usado para chamar o nome / O return é usado para retornar o valor do "nome".
        }catch(e){
        console.log(e);
    }
    }


    falarsobreNome(){
        return this.sobreNome;
     }
}