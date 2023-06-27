//Criar uma classe pessoa.
   //A pessoa deverá falar seu nome e sua idade

   class Pessoa {
  
    nome;
    idade;

    falarNome() {
        return this.nome;
    }

      
    falarIdade() {
        return this.idade;
    }
  
  }
  
  // Usar o molde - Instanciar a classe
  const aluno = new Pessoa();
  aluno.nome = "Igor";
  aluno.idade = 19;

  console.log ("Nome: " + aluno.falarNome());
  console.log ("Idade: " + aluno.falarIdade());