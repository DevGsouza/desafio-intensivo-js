
//Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello World!");

//Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let numberOne = 20;
let numberTwo = 10;

let sum = numberOne + numberTwo;

alert(sum)

//Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let isNumber = 20;

if(typeof isNumber == 'number') {
  alert(`É um número!`)
} else {
  alert(`Não é um número!`);
}


//Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let isString = 'Gabriel';

if(typeof isString == 'string') {
  alert(`É uma String!`)
} else {
  alert(`Não é uma String!`);
}

//Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let isBoolean = true;

if(typeof isBoolean == 'boolean') {
  alert(`É um booleano!`)
} else {
  alert(`Não é um booleano!`);
}

//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let numberOneSubtraction = 20;
let numberTwoSubtraction = 10;

let subtraction = numberOneSubtraction- numberTwoSubtraction;

alert(subtraction);

//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let numberOneMultiplication = 20;
let numberTwoMultiplication = 10;

let multiplication = numberOneMultiplication * numberTwoMultiplication;

alert(multiplication);

//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let numberOneDivision = 20;
let numberTwoDivision = 10;

let division = numberOneDivision / numberTwoDivision;

alert(division);

//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let numberPar = 24585;

if(numberPar%2 === 0){
  alert(`O número é par!`)
} else {
  alert("O número não é par!")
}

//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let numberImpar = 24585;

if(numberImpar%2 === 0){
  alert(`O número não é ímpar!`)
} else {
  alert(`O número é ímpar!`)
}