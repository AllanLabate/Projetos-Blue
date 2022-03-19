//Comando para funcionamento do prompt
const prompt = require(`prompt-sync`)();

//loop quebravel comente apos a resposta nao ao final
for(let l = 0; ; l++){

//Design
console.clear()

function jogo() {
//Variaveis
let numRod = 0;
let iaVitorias = 0;
let userVitorias = 0;
let iaEsc
let userEsc
let restart

//Array com as escolhas
const opcoes = ["0-pedra", "1-papel", "2-tesoura"]; //opcoes[0] = PEDRA | opcoes[1] = PAPEL | opcoes[2] = TESOURA

//Variavel contando a escolha aleatoria da maquina
iaEsc = opcoes[Math.floor(Math.random() * opcoes.length)];

//---------------------------------------------------------------------------------------------------

//abertura
console.log(`           Ola, seja Bem Vindo ao nosso Jokenpo Game!!`);
console.log(``);
console.log(`£------------------------------¥¥------------------------------£`);

//Numero de rodadas
numRod = prompt(`   Primeiro nos diga, quantas rodadas voce gostaria de jogar? `);
console.log(``);
console.log(`£------------------------------¥¥------------------------------£`);

//Explicando
console.log(`Agora para começarmos o jogo, preciso te explicar uma coisinha!! \n Para facilitar sua jogatina. Nossa equipe numerou as escolhas. \n                 Desta forma basta voce inserir:`);

//Repetindo numero de partidas
for (let i = 0; i < numRod; i++) {

    console.log(`                  1-Pedra , 2-Papel, 3-Tesoura`);
    console.log(``);
    console.log(`£------------------------------¥¥------------------------------£`);
    userEsc = prompt(`                       Qual sua escolha? : ` );

    while (userEsc != 0 && userEsc != 1 && userEsc != 2) {

    console.log(`Comando invalido. Digite apenas o numero da opçao desejada!!`);
    userEsc = prompt("0- Pedra, 1-Papel ou 2-Tesoura? : ")

    }   

    //Transformando a escolha do usuario, em um item da lista
    if (userEsc == 0){
    userEsc = opcoes[0]
    console.log(`Voce escolheu: ${opcoes[0]}`)
    console.log(`Seu adversario escolheu: ${iaEsc}`)
    } else if (userEsc == 1){
    userEsc = opcoes[1]
    console.log(`Voce escolheu: ${opcoes[1]}`)
    console.log(`Seu adversario escolheu: ${iaEsc}`)
    } else {
    userEsc = opcoes[2]
    console.log(`Voce escolheu: ${opcoes[2]}`)
    console.log(`Seu adversario escolheu: ${iaEsc}`)
    }

    //Contador de vitorias + exibiçao do vencedor de rodada
    if ((userEsc == opcoes[0] && iaEsc == opcoes[2]) || (userEsc == opcoes[1] && iaEsc == opcoes[0]) || (userEsc == opcoes[2] && iaEsc == opcoes[1])){
    userVitorias++;
    console.log(`Voce VENCEU esta rodada!!!`)
    } else {
    iaVitorias++
    console.log(`Voce PERDEU esta rodada!!!`)
    }
    console.log(``);
    console.log(`£------------------------------¥¥------------------------------£`);
    }

//Exibindo campeao juntamente ao numero de vitorias
if(userVitorias > iaVitorias){
    console.log(`                 VITORIA!!!          PARABENS!!!`)
    console.log(`Voce foi o grande campeao de nossa partida de Jokenpo!!`)
    console.log(`Voce obteve ${userVitorias} vitorias.`)
    console.log(`Enquanto isso nossa maquina obteve somente ${iaVitorias} vitorias`)
    console.log(``);
    console.log(`£------------------------------¥¥------------------------------£`);
} else {
    console.log(`                 DERROTA!!!          INFELIZMENTE!!!`)
    console.log(`Infelizmente voce acabou perdendo a nossa partida de Jokenpo!!`)
    console.log(`Voce obteve ${userVitorias} Vitorias.`)
    console.log(`Enquanto isso nossa maquina obteve ${iaVitorias} vitorias.`)
    console.log(``);
    console.log(`£------------------------------¥¥------------------------------£`);
}
}

//CHAMANDO A FUNÇAO DO JOGO
jogo();


//PARA RESTART DO GAME
//variavel de restart
console.log(`Infelizmente nosso jogo chegou ao fim!!`);
let rstart = prompt(`Gostaria de jogar novamente?, SIM ou NAO: `)
console.log(``);

//Validando a resposta do restart
while (rstart.toLowerCase == `sim` && rstart.toLowerCase == `nao`){
    console.log(`£--------------------------¥¥--------------------------£`)
    console.log(`Porfavor responda somente com SIM ou NAO!!`);
    rstart = prompt("Gostaria de jogar novamente?  ");
    console.log(``);
}

//Finalizando ou reiniciando o jogo
if (rstart == `sim`){
    console.log(`£--------------------------¥¥--------------------------£`)
    console.log(`Entao vamos la!!!`)
    console.log(``);
    console.log(`£--------------------------¥¥--------------------------£`)
    console.log(``);
    jogo();
} else {
    console.log(`£--------------------------¥¥--------------------------£`)
    console.log(`Pena que voce nao quer jogar mais!!`)
    console.log(`FIM DO JOGO!!!`)
    break;
}
}