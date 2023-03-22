/*
Podiamos declarar usando var, mais esse tipo de declaração se tornou
deprecada, pois ela tem alguns bugs, em alguns metodos utilizados se 
num codigo extenso, ela pode dificultar a encontrar por exemplo um 
erro no código, pois ela não da info de erro ou algo parecido.
*/

//Declaração de numero
let a = 10, b = 5, c;
c = a+b;
console.log(c);     //comando que faz a saida de informações pelo terminal

//Declaração de string
let nome = "Jeronimo", sobreNome = "Noleto";
/* Percebece que usamos a mesma declaração let, o que muda que para ser uma
string colocamos ela entre "aspas".
*/
nome += sobreNome;      //Concatenação
console.log(nome);      //Saida

// Podemos declara uma variavel para ser imutavel usando const
const numb3 = 10;
/*numb3 = 10 + 2;
Se esse codigo for executado ele vai dar erro pois como declaramos ela como
uma constante, ela não pode ser alterada*/

/* Agora para descobrirmos se uma numero é impar ou par podemos utilizar o
operador de resto, se der 0 significa que é par, se der 1 significa que é 
impar */
//laço para descobrir se a condição é verdadeira
let number1 = 21, resto;
resto = number1 % 2;
