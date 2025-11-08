// window.console.log("Olá, Mundo!")

function Dev(nome, idade, principalLinguagem){
    this.nome = nome;
    this.idade = idade;
    this.principalLinguagem = principalLinguagem;
    this.tipoDev = "Qualquer";

    this.saudacao = function(){
        console.log(`Olá, sou Desenvolvedor ${this.tipoDev} me chamo ${this.nome}! Tenho ${this.idade} anos e trabalho com ${this.principalLinguagem}`);
    }
}

function FrontEnd(nome, idade, principalLinguagem, framework){
    // const newDev = new Dev(nome, idade, principalLinguagem);
    Object.setPrototypeOf(this, new Dev(nome, idade, principalLinguagem));
    this.tipoDev = "Front-End";
    this.framework = framework;
}

function BackEnd(nome, idade, principalLinguagem, bancoDeDados){
    Object.setPrototypeOf(this, new Dev(nome, idade, principalLinguagem));
    this.tipoDev = "Back-End";
    this.bancoDeDados = bancoDeDados;
}

function fullStack(nome, idade, principalLinguagem, framework, bancoDeDados){
    Object.setPrototypeOf(this, new Dev(nome, idade, principalLinguagem));
    this.framework = framework;
    this.bancoDeDados = bancoDeDados;
    this.tipoDev = "Full-Stack"
}

const dev1 = new Dev("Felismino", 20, "JavaScript");
dev1.saudacao();
console.log("");
console.log(dev1);

const front1 = new FrontEnd("Odes", 25, "JavaScript", "VueJS");
front1.saudacao()
console.log(front1)

console.log(front1.framework)

const backend1 = new BackEnd("Maria", 23, "PHP", "MySQL");
console.log(backend1)
backend1.saudacao();

const full1 = new fullStack("Domingos", 35, "Java", "React", "SQLLite");
console.log(full1);

full1.saudacao();