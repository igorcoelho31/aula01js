export class contabilidade{

_resultado
constructor(nome, salario, meta, trabalho){ 
    this.nome = nome;  
    this.salario = salario;
    this.meta = meta;
    this.trabalho = trabalho;

}

get exibirResultado(){
    return this._resultado;
}

falarNome(){
        return this.nome; 
}

exibirSalario(){
    return this.salario;
}

exibirMeta(){
    return this.meta;
}

exibirTrabalho(){
    return this.trabalho;
}

calcularResultado(){
    if (this.trabalho >= this.meta )
    return this.salario * 1.1;
    else {
        return "Vc não atingiu a sua meta, logo seu salário não foi aumentado!!!";
    }
}

}



