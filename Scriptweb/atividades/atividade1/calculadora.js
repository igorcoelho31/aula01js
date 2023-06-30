export class calculadora{
    constructor(n1, n2){ 
        this.n1 = n1;  
        this.n2 = n2;
    }

    soma(){
        return this.n1 + this.n2;
    }

    subtracao(){
        return this.n1 - this.n2;
    }

    divisao(){
        return this.n1 / this.n2;
    }

    multiplicacao(){
        return this.n1 * this.n2
    }
    
}