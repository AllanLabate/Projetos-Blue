//Comando para funcionamento do prompt
const prompt = require(`prompt-sync`)();

//VARIAVEIS
let resposta;
let pontos = 0;

//Limpeza do console
console.clear(``)

//MENSAGEM INICIAL
console.log(`Ola filho(a), fico feliz de voce ter vindo me visitar! \nSeus irmaos ultimamente ja nao aparecem mais por aqui, sinto a falta deles.\nSabe eu dei muito duro para seus irmaos serem bem sucedidos, e nao se perderem na vida, porem ...\nacabei esquecendo de ensina-los a serem boas pessoas!! agora eles tem dinheiro, mas nao se importam com ninguem.\nNem mesmo com seu proprio pai!!\nSabe filho(a), eu ando sem muita coisa pra fazer, entao fico assistindo TV; esses dias vi um desenho de Super Heroi.\nE com tudo que aprendi na minha vida, junto ao que eu vi naquela TV, me fizeram chegar a conclusao do que e ser um verdade Heroi!!\nSabe meu filho(a), voce sempre foi diferente dos seus irmaos, sempre foi uma boa pessoa.`)

console.log();

//FUNÇAO DA PONTUAÇAO
function pontuacao (){

if (resposta.toLowerCase() == `sim`){
        pontos += 10
} else {}
} 

//PERGUNTAS

//1
function p1 (){
console.log(`£------------------------------¥¥------------------------------£`);
console.log(`Voce trabalhava bastante e ajudava bastante em casa, fazia qualquer serviço que aparecesse, para ganhar seu dinheirinho.`)
resposta = prompt(`Voce ainda faz isso? `)
if (resposta.toLowerCase() == `sim`){
    pontuacao()
    console.log();
    console.log(`Que bom meu(inha) filho(a), sempre foi o seu jeitinho neh!`)
    console.log();
    p2()
} else if (resposta.toLowerCase() == `nao`){
    console.log();
    console.log(`E uma pena meu(inha) filho(a), pois aquilo era um exemplo que eu gostaria que seus irmaos tivessem seguido!`)
    console.log();
    p2()
} else {
    back(1);
}
}

//2
function p2 (){
console.log(`£------------------------------¥¥------------------------------£`);
console.log(`Me lembro que voce sempre estava se preocupando com tudo e todos, tentando garantir que todos estivessem bem.`)
resposta = prompt(`Voce ainda e assim filho(a)? `)
if (resposta.toLowerCase() == `sim`){
    pontuacao()
    console.log();
    console.log(`Fico feliz de saber meu(inha) filho(a), isso sempre foi algo admiravel em vc!!!`)
    console.log();
    p3()
} else if (resposta.toLowerCase() == `nao`){
    console.log();
    console.log(`Que pena filho(a), realmente o mundo la fora faz com que voce se torne uma pessoa muito fria!!`)
    console.log();
    p3()
} else {
    back(2);
}
}

//3
function p3 (){
console.log(`£------------------------------¥¥------------------------------£`);
console.log(`Voce tinha tantos sonhos naquela epoca, sempre ficava impolgado(a) quando pensava neles, e voce sempre fazia de tudo para tentar chegar o mais perto de realizar.`)
resposta = prompt(`Voce realizou algum filho(a)? ou pelo menos continua tentando chegar perto de realizar? `)
if (resposta.toLowerCase() == `sim`){
    pontuacao()
    console.log();
    console.log(`Tenho certeza que voce realizara varios sonhos!!`)
    console.log();
    p4()
} else if (resposta.toLowerCase() == `nao`){
    console.log();
    console.log(`Que pena filho(a), voce sonhava tanto com isso!!`)
    console.log();
    p4()
} else {
    back(3);
}
}

//4
function p4 (){
console.log(`£------------------------------¥¥------------------------------£`);
console.log(`Tambem lembro de sua preocupaçao para os problemas de casa, os problemas de seus irmaos. Lembro de voce chegando em mim para perguntar como estavam as contas, se tudo estava ocorrendo bem e se eu precisava de algo. \nE sempre que eu pedia ajuda, voce estava la para ajudar, sem deixar faltar nada!!`)
resposta = prompt(`Me diga meu(inha) filho(a), voce ainda e assim neh? `)
if (resposta.toLowerCase() == `sim`){
    pontuacao()
    console.log();
    console.log(`Eu sabia que voce continuaria assim, voce sempre se preocupou muito!`)
    console.log();
    p5()
} else if (resposta.toLowerCase() == `nao`){
    console.log();
    console.log(`E uma pena filho(a), nunca imaginei que voce mudaria esse seu jeito.`)
    console.log();
    p5()
} else {
back(4);
}
}

//5
function p5 (){
console.log(`£------------------------------¥¥------------------------------£`);
console.log(`Meu(inha) filho(a), agora me diga; mesmo sem saber exatamente oque e um verdadeiro heroi.`)
resposta = prompt(`Voce acha que esta sendo ou pelo menos tentando ser um? `)
if (resposta.toLowerCase() == `sim`){
    pontuacao()
    console.log();
    console.log(`Vamos ver isso!`)
    console.log();
    heroismo()
} else if (resposta.toLowerCase() == `nao`){
    console.log();
    console.log(`Que pena!`)
    console.log();
    heroismo()
} else {
back(5);
}
}

//CHAMANDO A FUNCAO DA PERGUNTAS
p1()

//CALCULO DE HEROISMO +  RESPOSTAS
function heroismo(){
if (pontos == 50){
    console.log(`£------------------------------¥¥------------------------------£`);
    console.log(`Realmente meu(inha) filho(a), mesmo eu tendo errado com seus irmaos, voce sempre foi um garoto diferente, voce exala isso ate hoje, de maneira impecavel.
    \n Pode ter certeza que em meus conceitos, voce e nao somente um Verdadeiro heroi. \nMas sim o melhor Heroi, nem mesmos os desenhos e historias em quadrinhos se comparam ao seu Heroismo!!!`)
} else if (pontos == 40){
    console.log(`£------------------------------¥¥------------------------------£`);
    console.log(`Meu(inha) filho(a), eu tinha certeza que voce era um garoto exemplar. \nVoce pode talvez pensar que nao seja, mas eu posso te confirmar, voce e um verdadeiro Heroi!!`)
} else if (pontos == 30){
    console.log(`£------------------------------¥¥------------------------------£`);
    console.log(`Voce mudou bastante meu(inha) filho(a), porem voce ainda e uma boa pessoa. \nPor mais que voce nao chegue a ser um Verdadeiro Heroi, eu posso ver que voce da o seu melhor para ser alguem de bom coraçao!`)
} else if (pontos == 10 || pontos == 20){
    console.log(`£------------------------------¥¥------------------------------£`);
    console.log(`As mudanças que voce teve em todos esses anos, e algo nitido. \nInfelizmente o mundo e o tempo, tem tendencia a criar pessoas em decadencia, pessoas ruins com magoa e rancor. \nE voce acabou se tornando esse tipo de pessoa filho(a)!`)
} else {
    console.log(`£------------------------------¥¥------------------------------£`);
    console.log(`Voce ja nao e mais o mesmo, creio que nao fui um bom pai!! \nInfelizmente voce se tornou o mesmo tipo de pessoa que seus irmaos. Mas um dia voces verao que ser assim nao e bom, nem para voce e nem para aqueles que estao ao seu redor!`)
}
}




//MENSAGEM ERRADA
function back(numPergunta){
    if (numPergunta == 1){
    console.log();
    console.log(`Meu(inha) filho(a), porfavor nao tente explicar, responda somente com SIM e NAO!`)
    console.log();
    p1();  
} else if(numPergunta == 2){
        console.log();
        console.log(`Meu(inha) filho(a), porfavor nao tente explicar, responda somente com SIM e NAO!`)
        console.log();
        p2();  
} else if (numPergunta == 3){
        console.log();
        console.log(`Meu(inha) filho(a), porfavor nao tente explicar, responda somente com SIM e NAO!`)
        console.log();
        p3();  
} else if(numPergunta == 4) {
        console.log();
        console.log(`Meu(inha) filho(a), porfavor nao tente explicar, responda somente com SIM e NAO!`)
        console.log();
        p4();  
} else if(numPergunta == 5) {
        console.log();
        console.log(`Meu(inha) filho(a), porfavor nao tente explicar, responda somente com SIM e NAO!`)
        console.log();
        p5();
}
}
