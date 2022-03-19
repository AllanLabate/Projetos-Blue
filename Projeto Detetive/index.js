//Comando para funcionamento do prompt
const prompt = require('prompt-sync')()

//Mensagem de BEM VINDO
console.log(`Ola, seja muito Bem Vindo ao nosso teste de inocencia!!, porfavor responda as perguntas a baixo utilizando SIM e NAO!`)

//COLETA DE DADOS
const nome = prompt(`Mas antes de começarmos, precisamos que nos diga o seu nome: `)

//INTERMEDIAÇAO
console.log(`Ola ${nome}, agora vamos começar as perguntas!!`)

//PERGUNTAS E VARIAVEIS
let pontos = 0
let resposta

//Funçao para adiçao da pontuaçao
function pontuacao(){
    if (resposta == `sim` || resposta == `SIM` || resposta == `Sim`) {
        pontos += 10
    } else {}
}

 //pergunta #1
resposta = prompt(`Voce tentou fazer algo para reverter ou controlar a situaçao ocorrida?: `)
pontuacao()

//pergunta #2
resposta = prompt(`Voce se sentiu mal apos a situaçao ocorrida?: `)
pontuacao()

//pergunta #3
resposta = prompt(`Se voce pudesse voltar no tempo, voce teria impedido este acontecimento?: `)
pontuacao()

//pergunta #4
resposta = prompt(`Voce se sente culpado pela situaçao?: `)
pontuacao()

//pergunta #5
resposta = prompt(`Voce se sente inocente pela situaçao?: `)
pontuacao()

//Calculo da inocencia 
if (pontos >= 40){
    console.log(`"Voce foi classificado como CULPADO!!"`)
} else if (pontos == 30){
    console.log(`Voce foi classificado como SUSPEITO!!`)
} else {
    console.log(`Voce foi classificado como INOCENTE!!`)
}