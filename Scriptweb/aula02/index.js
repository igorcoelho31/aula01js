import { Aluno } from "./aluno.js";

const aluno1 = new Aluno("Igor", "Coelho")

console.log ("Nome:" + aluno1.falarNome() + "\n" + "Sobrenome:" + aluno1.falarsobreNome());

//Acessando o Atributo privado com o set 
//O método set não precisa abrir e fechar parenteses para passar os atributos.
aluno1.inserirCpf = 123294928141;
//Chamando o método get para exibir o cpf.
console.log("Cpf:" + aluno1.inserirCpf);