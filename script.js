//1
const idadeUsuario = +prompt ("Qual é a sua idade?") ;
if (idadeUsuario >= 18)  {

    console.log('Acesso liberado! Divirta-se!');
}




if (idadeUsuario < 18) {
    console.log("Acesso negado. Você é menor de idade.");
    
}
//2
const senhaCorreta = 'front123' ;
let  senhaDigitada = prompt ("Digite a senha de acesso:") 

if (senhaDigitada===senhaCorreta) {
    console.log ("Login efetuado com sucesso!")
}

if (senhaDigitada!==senhaCorreta){
    console.log ( "Senha incorreta. Tente novamente.")
}
//3
 let valorCompra = +prompt("Digite o valor da compra:");
 if ( valorCompra > 100  ) {
    valorCompra = valorCompra - 10    
};
console.log("O total a pagar é: " + valorCompra);


//4
let valorGasto = +prompt ("Digite o valor gasto:");
let quantidade = +prompt ("Digite a quantidade de produtos comprados:");
let pontos = 10 ;

if (quantidade >= 5) {
    pontos = pontos + 50 
};
if ( valorGasto >= 200) {
    pontos = pontos + 100
};

console.log("O total de pontos no programa de fidelidade é: " + pontos);

//5
let salarioBase = +prompt ("Digite o salário base:");
let totalVendas = +prompt ('Digite aqui seu total de vendas:');
let notaAvaliacao = +prompt ('Digite aqui uma avaliação:');

let salarioFinal = salarioBase ;

if (totalVendas >= 5000 && notaAvaliacao >= 8 ){
let bonus = salarioBase * 0.15;
salarioFinal = salarioBase + bonus ; 
}
console.log('Seu salario final é:' + salarioFinal);

//6 ;
let valorPedido = +prompt ('Digite aqui o valor do seu pedido:')
let distanciaKM = +prompt ('Digite aqui a distancia(em KM);');
let taxa = 10 ;
if ( valorPedido < 30 || distanciaKM > 10){
    taxa = taxa + 5 ; 
}
console.log ( 'O valor do seu pedido é:', taxa + valorPedido)











