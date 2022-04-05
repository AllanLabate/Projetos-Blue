//Comandos iniciais
const prompt = require('prompt-sync')();

//                                     -------------------------------------       

//Funçoes de controle

//Funçao de tempo
function geradorDeTempo(temp,temp2){
    temp2[1] = 8;

    if(temp==1){
        const tempos=[10,20,30,40];
        let tempoAleatorio = tempos[Math.floor(Math.random() * tempos.length)];
        temp2[0] += tempoAleatorio;
        if(temp2[0]<60){
            temp2[2] = temp2[0];
        }else if(temp2[0]>=60){
            temp2[1] = temp2[1] + Math.trunc(temp2[0]/60);
            temp2[2] = temp2[0] % 60;
        }
    } else if (temp==2){
      const tempos2=[10,20];
        tempoAleatorio = tempos2[Math.floor(Math.random() * tempos2.length)];
        temp2[0] += tempoAleatorio;
        if(temp2[0]<60){
            temp2[2] = temp2[0];
        }else if(temp2[0]>=60){
            temp2[1] = temp2[1] + Math.trunc(temp2[0]/60);
            temp2[2] = temp2[0] % 60;
       }
    } else if (temp==3){
      const tempos3=[20,30,40];
        tempoAleatorio = tempos3[Math.floor(Math.random() * tempos3.length)];
        temp2[0] += tempoAleatorio;
        if(temp2[0]<60){
            temp2[2] = temp2[0];
        }else if(temp2[0]>=60){
            temp2[1] = temp2[1] + Math.trunc(temp2[0]/60);
            temp2[2] = temp2[0] % 60;
        }
    }
    return temp2;   
}

//Alimentaçao
function alimentacao(fome, fomeRed){

    let fomeAleatoria

    if (fome == 1){
        const listfome = [5, 10, 15]
        fomeAleatoria = listfome[Math.floor(Math.random() * listfome.length)];
        fomeRed = sFome - fomeAleatoria;

  } else  if (fome == 2){
        const listfome2 = [5, 10, 15, 20, 25, 30]
       fomeAleatoria = listfome2[Math.floor(Math.random() * listfome2.length)];
        fomeRed = sFome - fomeAleatoria;
  }
  return fomeRed;
}

//energia
function disposicao(disp, dispRed){

    let dispAleatoria

    if (disp == 1){
        const listdisp = [10, 15, 20, 25]
        dispAleatoria = listdisp[Math.floor(Math.random() * listdisp.length)];
        dispRed = energia - dispAleatoria;

  } else  if (disp == 2){
        const listdisp2 = [5, 10, 15]
       dispAleatoria = listdisp2[Math.floor(Math.random() * listdisp2.length)];
        dispRed = energia - dispAleatoria;
  }
  return dispRed;
}
//                                     -------------------------------------       

//Variaveis e arrays de controle
let rodadas = 0;
let dinheiro = 100; //Varivel de dinheiro, valor e retiradas fixas
let sFome = 50; //variavel de controle da fome, valor inicial em 50%, aumento fixo e perca aleatoria
let energia = 100 //Variavel de controle da energia/disposiçao, perca aleatoria, aumento fixo
let tempo=[0,0,0]//array de controle do tempo, indice 0 = tempo total em minutos/ indice 1 = tempo cnvertido em horas/ indice 2 = tempo restante em minutos
//
//Outras variaveis
let resposta;
let vic;
let los;

//                                     -------------------------------------                                    
//Funçoes de caminhos

function win(vit){
    //                                     -------------------------------------
    if (vit == 1){
    console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
    console.log(`                                                         VICTORY`);   
    console.log();
    console.log();
    console.log(`                                                  _      _                   `);    
    console.log(`                                                 (_)    | |                  `);
    console.log(`                                           __   ___  ___| |_ ___  _ __ _   _ `);                                  
    console.log(`                                           \ \ / / |/ __| __/ _ \| '__| | | |`);                                  
    console.log(`                                            \ V /| | (__| || (_) | |  | |_| |`);                                  
    console.log(`                                             \_/ |_|\___|\__\___/|_|   \__, |`);                                  
    console.log(`                                                                        __/ |`);  
    console.log(`                                                                       |___/ `);  
    console.log();                             
    console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
    vic++;

    } else if (vit ==2){
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        console.log(`                                                         VICTORY`);   
        console.log();
        console.log();
        console.log(`             .=.,`);        console.log(`                                                  _      _                   `);  
        console.log(`            ;c =\ `);       console.log(`                                                 (_)    | |                  `);
        console.log(`          __|  _/`);        console.log(`                                           __   ___  ___| |_ ___  _ __ _   _ `);                          
        console.log(`        .'-'-._/-'-._`);    console.log(`                                           \ \ / / |/ __| __/ _ \| '__| | | |`);                              
        console.log(`       /..   ____    \ `);  console.log(`                                            \ V /| | (__| || (_) | |  | |_| |`);                                
        console.log(`      /' _  [<_->] )  \ `); console.log(`                                             \_/ |_|\___|\__\___/|_|   \__, |`);                                 
        console.log(`     (  / \--\_>/-/'._ )`); console.log(`                                                                        __/ |`); 
        console.log(`      \-;_/\__;__/ _/ _/`); console.log(`                                                                       |___/ `); 
        console.log(`       '._}|==o==\{_\/`);                             
        console.log(`        /  /-._.--\  \_`);                             
        console.log(`       // /   /|   \ \ \ `);                             
        console.log(`      / | |   | \;  |  \ \ `);                             
        console.log(`     / /  | :/   \: \   \_\ `);                             
        console.log(`    /  |  /.'|   /: |    \ \ `);                             
        console.log(`    |  |  |--| . |--|     \_\ `);                             
        console.log(`    / _/   \ | : | /___--._) \ `);                             
        console.log(`   |_(---'-| >-'-| |       '-'`);                             
        console.log(`          /_/     \_\ `);                             
        console.log(``);                             
        console.log(``);                             
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        vic++;
    }
    
}

function friendA4 (){
    //Modficando status
    
    //                                     -------------------------------------
   
    console.log();
    console.log(`                                        ❝ No caminho voce se encontrou com um amigo.`);
    console.log(`                                 Ele lhe pede ajuda pois deixou o celular cair no esgoto! ❞`);
    console.log();
    console.log(`                                            】---------------¥---------------【`);
    console.log();
    console.log(`                                              ➞  Oque gostaria de fazer?`);
    console.log(`             ⤷ 1 - Vou explicar para ele que meu dia esta bem corrido, e que nao poderei ajudalo naquele momento`);
    console.log(`                                   ⤷ 2 - Vou ignoralo completamente e seguir minha vida`);
    console.log(`                                           ⤷ 3 - Vou ficar e ajudar meu amigo`);
    resposta = +prompt();
    console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

    if (resposta == 1){
        //Modificando status
        geradorDeTempo(3,tempo);
        energia = energia + 10;

        //Verificaçoes
        resulstat();        

        //                                     -------------------------------------
        status();
        console.log();
        console.log(`                                ❝ Voce ganhou 10 de energia pois seu amigo te motivou! ❞`);
        console.log();
        console.log(`                            ❝ Seu amigo compreendeu sua disponibilidade e te apoiou em seu objetivo.`);
        console.log(`                               Voce precisa imprimir seus curriculos para procurar um trabalho! ❞ `);
        console.log();
        console.log(`                                            】---------------¥---------------【`)
        console.log();
        console.log(`                                               ➞  Oque gostaria de fazer?`);
        console.log(`                                               ⤷ 1 - Ir em uma papelaria!!`);
        console.log(`                                           ⤷ 2 - Imprimir na casa de um amigo!`); 
        resposta = +prompt();
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        a4b1();

    } else if (resposta == 2){
        //Modificando status
        geradorDeTempo(3,tempo);
        energia = disposicao(1,energia);

        //Verificaçoes
        resulstat();


        //                                     -------------------------------------
        status();
        console.log();
        console.log(`                               ❝ Seu nivel de energia diminuio pois seu amigo ficou triste! ❞`);
        console.log();
        console.log(`                            ❝ Seu amigo se maguou muito, e disse para que voce nunca mais fale com ele.`);
        console.log(`                               Voce precisa imprimir seus curriculos para procurar um trabalho! ❞ `);
        console.log();
        console.log(`                                            】---------------¥---------------【`)
        console.log();
        console.log(`                                               ➞  Oque gostaria de fazer?`);
        console.log(`                                               ⤷ 1 - Ir em uma papelaria!!`);
        console.log(`                                           ⤷ 2 - Imprimir na casa de um amigo!`); 
        resposta = +prompt();
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        a4b1();
        
    } else if (resposta == 3){
        //Modificando status
        geradorDeTempo(2,tempo);
        energia = disposicao(1,energia);
        sFome = alimentacao(1,sFome);

        //Verificaçoes
        resulstat();

        //                                     -------------------------------------
        status();
        console.log();
        console.log(`                          ❝ Seu nivel de energia diminuio por conta do esforço ajudando seu amigo! `);
        console.log(`                     Seu nivel de alimentaçao diminuio por conta do esforço para ajudar seu amigo! ❞`);
        console.log();
        console.log(`                  ❝ Voce e seu amigo conseguiram resgatar o telefone, porem voce perdeu bastante tempo!`);
        console.log(`                             Voce precisa imprimir seus curriculos para procurar um trabalho! ❞ `);
        console.log();
        console.log(`                                            】---------------¥---------------【`)
        console.log();
        console.log(`                                               ➞  Oque gostaria de fazer?`);
        console.log(`                                               ⤷ 1 - Ir em uma papelaria!!`);
        console.log(`                                           ⤷ 2 - Imprimir na casa de um amigo!`); 
        resposta = +prompt();
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        a4b1();
    }

    function a4b1(){
    //                                     -------------------------------------
    if (resposta == 1){
        //Modficando status
        geradorDeTempo(1,tempo);
        sFome = alimentacao(1,sFome);
        energia = disposicao(2,energia);
        dinheiro = dinheiro - 5;

        //Verificaçoes
        resulstat();        

        //                                     -------------------------------------
        status();
        console.log();
        console.log(`                                  ❝ Voce foi ate em uma papelaria, e pediu alguma copias. `);
        console.log(`                                                    O valor ficou 5$ ❞`);
        console.log();
        console.log(`                                            】---------------¥---------------【`)
        console.log();
        console.log(`                                                  Oque gostaria de fazer?`);
        console.log(`                                          ⤷ 1 - Pegar e dar em cima da atendente`);
        console.log(`                                          ⤷ 2 - pegar as copias e sair correndo`);
        console.log(`                                                 ⤷ 3 - Pagar e ir embora`);
        resposta = +prompt();
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

            if (resposta == 1){
                //Modificando status
                geradorDeTempo(2,tempo);
                sFome = alimentacao(1,sFome);
                energia = disposicao(2,energia);
                dinheiro = dinheiro - 30;

                //Verificaçoes
                resulstat();            

                //                                     -------------------------------------
                status();
                console.log();
                console.log(`                       ❝ A atendente gostou de voce, porem voce quiz impressionar pagando um sorvete `);
                console.log(`                                             Voce gastou 25$ do seu dinheiro$ `);
                console.log(`                               Voce tambem gastou 5$ do seu dinheiro para pagar as copias! ❞`);
                console.log();
                console.log(`                                            】---------------¥---------------【`)
                console.log();
                a4b1();

            } else if (resposta == 2){

                //Modificando status

                //                                     -------------------------------------
                status();
                console.log();
                console.log(`                                                   ❝ Voce saio correndo! `);
                console.log(`                                            Porem havia um policial na esquina `);
                console.log(`                                                      Voce foi preso! ❞`)
                console.log();
                console.log(`                                            】---------------¥---------------【`)
                console.log();
                gameover(1);

            } else if (resposta == 3){

                //Modificando status

                //                                     -------------------------------------
                status();
                console.log();
                console.log(`                                            Voce gastou 5$ para pagar as copias! ❞`)
                console.log();
                console.log(`                                            】---------------¥---------------【`)
                console.log();
                a4b1();

            }

    } else if (resposta == 2){
        //Modificando status
        geradorDeTempo(1,tempo);
        energia = disposicao(1,energia);
        sFome = alimentacao(1,sFome);

        //Verificaçoes
        resulstat();        

        //                                     -------------------------------------
        status();
        console.log();
        console.log(`                               ❝ Voce foi ate a casa de um amigo e imprimiu o seu curriculo ❞`);
        console.log();
        console.log(`                                ❝ Logo apos, seu amigo t convidou para jogar video-game. ❞`);
        console.log();
        console.log(`                                            】---------------¥---------------【`)
        console.log();
        console.log(`                                               ➞  Oque gostaria de fazer?`);
        console.log(`                                               ⤷ 1 - Recusar e me despedir!`);
        console.log(`                                               ⤷ 2 - Jogar um pouco com ele!`);
        resposta = +prompt();
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        

        if (resposta == 1){
            //Modificando status

            //                                     -------------------------------------
            status();
            console.log();
            console.log(`                        ❝ Voce conseguiu imprimir seus curriculos sem gastar nada, vamos continuar ❞`);
            console.log();
            console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
            console.log();
            a4b2();

        } else if (resposta == 2){

            //Modificando status

            //                                     -------------------------------------
            status();
            console.log();
            console.log(`               ❝ Voces jogaram, porem voce se esqueceu dos a fazeres e acabou perdendo o dia todo jogando ❞`);
            console.log();
            console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
            console.log();
            game();

            }
        }  
    }


    function a4b2(){
            console.log(`                                            】---------------¥---------------【`)
            console.log();
            console.log(`                                              ➞  Onde gostaria de entregar?`);
            console.log(`                                                    ⤷ 1 - Calçadao!`);
            console.log(`                                                    ⤷ 2 - Shopping!`);
            console.log(`                                                ⤷ 3 - Parque de diversao!`);
            resposta = +prompt();
            console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

        if (resposta == 1){
            //modificando status

            //                                     -------------------------------------
                status();
                console.log();
                console.log(`                                                ❝ Voce possui 3 curriculos. `);
                console.log(`                                     Gostaria de entregar em quais lojas do calçadao?❞`);
                console.log();
                console.log(`                                            】---------------¥---------------【`)
                console.log();
                console.log(`                                                      ➞  Escolha?`);
                console.log(`                                      ⤷ 1 - Mercado central, escritorio, sorveteria!`);
                console.log(`                                 ⤷ 2 - Barraquinha de cachorro quente, bijuteria, Salgaderia!`);
                console.log(`                                       ⤷ 3 - Loja de roupas, Calçados, Lanchonete!`);
                resposta = +prompt();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

            if (resposta == 1 || resposta == 2){
                //modificando status
                geradorDeTempo(1,tempo);
                sFome = alimentacao(1,sFome);
                energia = disposicao(1,energia);

                //Verificaçoes
                resulstat();            

                //                                     -------------------------------------
                status();
                console.log();
                console.log(`                                              ❝ Voce nao conseguiu o emprego! `);
                console.log(`                                   Infelizmente esses locais nao haviam vagas disponiveis ❞`);
                console.log();
                console.log(`                                 ❝ Voce gastou sua tentativa de ser empregado neste rodada! `);
                console.log(`                                               Tente novamente na proxima ❞`);
                console.log();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                console.log();
                game();

            } else if (resposta == 3){

                a4b3();

            }
        } else if (resposta == 2){

            //Modificando status

            //                                     -------------------------------------
                status();
                console.log();
                console.log(`                                                ❝ Voce possui 3 curriculos. `);
                console.log(`                                     Gostaria de entregar em quais lojas do calçadao?❞`);
                console.log();
                console.log(`                                            】---------------¥---------------【`)
                console.log();
                console.log(`                                                      ➞  Escolha?`);
                console.log(`                                        ⤷ 1 - Loja de roupas, Calçados, Lanchonete!`);
                console.log(`                                            ⤷ 2 - Imprimir na casa de um amigo!`);
                console.log(`                                             ⤷ 3 - Otica, Perfumaria, Cinema!`);
                resposta = +prompt();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

            if (resposta ==1 || resposta == 3){
                //Modificando status

                //                                     -------------------------------------
                status();
                console.log();
                console.log(`                                              ❝ Voce nao conseguiu o emprego! `);
                console.log(`                                   Infelizmente esses locais nao haviam vagas disponiveis ❞`);
                console.log();
                console.log(`                                 ❝ Voce gastou sua tentativa de ser empregado neste rodada! `);
                console.log(`                                               Tente novamente na proxima ❞`);
                console.log();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                console.log();
                game();

            } else if (resposta == 2){
                a4b3();
            }
            

        } else if (resposta == 3){

            //Modificando status

            //                                     -------------------------------------
                status();
                console.log();
                console.log(`                                                ❝ Voce possui 3 curriculos. `);
                console.log(`                                     Gostaria de entregar em quais lojas do calçadao?❞`);
                console.log();
                console.log(`                                            】---------------¥---------------【`)
                console.log();
                console.log(`                                                      ➞  Escolha?`);
                console.log(`                                    ⤷ 1 - Carrinho de bate-bate, Super elevador, Cart!`);
                console.log(`                                      ⤷ 2 - Montanha russa, Casa do medo, Mini-circo!`);
                console.log(`                                  ⤷ 3 - Barraquinha de hot-dog, de Algodao-doce, sorvete!`);


            if (resposta == 1 || resposta == 2){

                //Modificando status

                //                                     -------------------------------------
                status();
                console.log();
                console.log(`                                              ❝ Voce nao conseguiu o emprego! `);
                console.log(`                                   Infelizmente esses locais nao haviam vagas disponiveis ❞`);
                console.log();
                console.log(`                                 ❝ Voce gastou sua tentativa de ser empregado neste rodada! `);
                console.log(`                                               Tente novamente na proxima ❞`);
                console.log();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                console.log();
                game();

            } else if (resposta == 3){

                a4b3();

            }
        }
    }

    function a4b3(){

        //Modificando status
        geradorDeTempo(2,tempo);
        energia = disposicao(1,energia);

        //Verificaçoes
        resulstat();        

        //                                     -------------------------------------
        status();
        console.log();
        console.log(`                                 ❝ Uma das lojas achou muito interessante seu curriculo!! `);
        console.log(`                                   Voce foi contratado, Parabens voce conseguio um emprego! ❞`);
        console.log();
        console.log(`                 ❝ Agora chegou a hora de ir para casa e arrumar as coisas para trabalhar no dia seguinte `);
        console.log(`                                            Voce gostaria de ir embora do que? ❞`);
        console.log();
        console.log(`                                            】---------------¥---------------【`)
        console.log();
        console.log(`                                                  ➞  Escolha a locomoçao:`);
        console.log(`                                                    ⤷ 1 - Vou andando!`);
        console.log(`                                                  ⤷ 2 - Vou pedir um taxi!`);
        console.log(`                                                    ⤷ 3 - Vou de onibus!`);
        resposta = +prompt();
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);


        if (resposta == 1){

            if (tempo[2] <= 22){
                //                                     -------------------------------------
                status();
                console.log();
                console.log(`                           ❝ Infelizmente voce demorou muito e acabou passando do horario! `);
                console.log(`                       Nao vai conseguir ir rapido o suficiente para chegar em casa no horario! `)
                console.log(`                                     Essa rodada foi perdida, tente novamente na proxima ❞`);
                console.log();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                console.log();
                game();
            } else if (energia <= 15){
                //                                     -------------------------------------
                status();
                console.log();
                console.log(`                                               ❝ Voce esta muito cansado! `);
                console.log(`                       Nao vai conseguir ir rapido o suficiente para chegar em casa no horario! `)
                console.log(`                                     Essa rodada foi perdida, tente novamente na proxima ❞`);
                console.log();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                console.log();
                game();
            } else {
                win(1);
            }



        } else if (resposta == 2){

            if (tempo[2] <= 22){
                //                                     -------------------------------------
                status();
                console.log();
                console.log(`                           ❝ Infelizmente voce demorou muito e acabou passando do horario! `);
                console.log(`                       Nao vai conseguir ir rapido o suficiente para chegar em casa no horario! `)
                console.log(`                                     Essa rodada foi perdida, tente novamente na proxima ❞`);
                console.log();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                console.log();
                game();
            } else if (energia <= 15){
                //                                     -------------------------------------
                status();
                console.log();
                console.log(`                                               ❝ Voce esta muito cansado! `);
                console.log(`                       Nao vai conseguir ir rapido o suficiente para chegar em casa no horario! `)
                console.log(`                                     Essa rodada foi perdida, tente novamente na proxima ❞`);
                console.log();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                console.log();
                game();
            } else if (dinheiro <= 19){
                //                                     -------------------------------------
                status();
                console.log();
                console.log(`                                  ❝ Voce nao tem dinheiro o suficiente para pegar um taxi! `);
                console.log(`                                       Escolha outra maneira de chegar em casa! ❞`);
                console.log();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                a4b3();
            } else {
                win(1);
            }

        } else if (resposta == 3){

            if (tempo[2] <= 22){
                //                                     -------------------------------------
                status();
                console.log();
                console.log(`                           ❝ Infelizmente voce demorou muito e acabou passando do horario! `);
                console.log(`                       Nao vai conseguir ir rapido o suficiente para chegar em casa no horario! `)
                console.log(`                                     Essa rodada foi perdida, tente novamente na proxima ❞`);
                console.log();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                console.log();
                game();
            } else if (energia <= 15){
                //                                     -------------------------------------
                status();
                console.log();
                console.log(`                                               ❝ Voce esta muito cansado! `);
                console.log(`                       Nao vai conseguir ir rapido o suficiente para chegar em casa no horario! `)
                console.log(`                                     Essa rodada foi perdida, tente novamente na proxima ❞`);
                console.log();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                console.log();
                game();
            } else if (dinheiro <= 4){
                //                                     -------------------------------------
                status();
                console.log();
                console.log(`                             ❝ Voce nao tem dinheiro o suficiente para pegar a tarifa do onibus! `);
                console.log(`                                       Escolha outra maneira de chegar em casa! ❞`);
                console.log();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                a4b3();
            } else {
                win(1);
            }

        }
    }
}

function mindWash () {
    //Modificando status

    //                                     -------------------------------------           
    status();
    console.log();
    console.log(`                                                    ↧「Doutor Maluco」↧`)
    console.log(`                    ❝ "Como quiser, mas para que eu deixe voce ir embora, vai ter que confiar em mim `);
    console.log(`                 Pois vou apagar sua memoria, so por garantia, nao se preocupe, isso nao lhe fara nenhum mal" ❞`);
    console.log();
    console.log(`                                            】---------------¥---------------【`)
    console.log();
    console.log(`                                                    ➞  Oque fazer?`);
    console.log(`                                                     ⤷ 1 - Confiar`);
    console.log(`                                                   ⤷ 2 - Nao confiar`);
    resposta = +prompt();
    console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

        if (resposta == 1){
            //Modificando status
            geradorDeTempo(1,tempo);

            //Verificaçoes
            resulstat();

            //                                     -------------------------------------           
            status();
            console.log();
            console.log(`                                                    ↧「Doutor Maluco」↧`)
            console.log(`                                                    ❝ "Bom, la vai " ❞`);
            console.log();                          
            console.log(`                              ❝ O Doutor apagou sua memoria, e voce voltou ao caminho do parque ❞`);
            console.log();
            console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
            console.log();
            friendA4();

        } else if (resposta == 2){
            //Modificando status
            geradorDeTempo(3,tempo);

            //Verificaçoes
            resulstat();            

            //                                     -------------------------------------           
            status();
            console.log();
            console.log(`                                                    ↧「Doutor Maluco」↧`)
            console.log(`                                    ❝ "Voce tem que confiar, isso e muito importante `);
            console.log(`                                      Se nao, eu nao poderei deixar voce ir embora" ❞`);
            console.log();
            console.log(`                                            】---------------¥---------------【`)
            console.log();
            console.log(`                                                  ➞  Oque voce decide?`);
            console.log(`                                                 ⤷ 1 - Ta, eu vou Confiar`);
            console.log(`                                                   ⤷ 2 - Nao confiar`);
            resposta = +prompt();
            console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

            if (resposta == 1){

                //Modificando status

                //                                     -------------------------------------           
                status();
                console.log();
                console.log(`                                                    ↧「Doutor Maluco」↧`)
                console.log(`                                                    ❝ "Bom, la vai " ❞`);
                console.log();                          
                console.log(`                              ❝ O Doutor apagou sua memoria, e voce voltou ao caminho do parque ❞`);
                console.log();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                console.log();
                friendA4();

            } else if (resposta == 2){
                //Modificando status

                //                                     -------------------------------------           
                status();
                console.log();
                console.log(`                                                    ↧「Doutor Maluco」↧`)
                console.log(`        ❝ "Entao me desculpe, como eu disse nao lhe farei mal, porem vou ter que t manter prisioneiro em minha mansao `);
                console.log(`                                      Voce nao conseguira chegar em casa no horario" ❞`);
                console.log();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                game();
            }
    }

}

function a1 (){
    //Modificando os estatus
    geradorDeTempo(1,tempo);
    sFome = 100;

    //Verificaçoes
    resulstat();

    //                  ----------------
    status();
    console.log();
    console.log(`                                            ❝ Voce decidiu tomar cafe da manha!`) 
    console.log(`                                       Porem acabou se atrasando para pegar o onibus ❞ `)
    console.log();
    console.log(`                                            】---------------¥---------------【`)
    console.log();
    console.log(`                                 ➞  Oque gostaria de fazer para resolver este problema?`);
    console.log(`                                            ⤷ 1- Vou esperar o proximo onibus.`);
    console.log(`                                                 ⤷ 2- Vou de bicicleta.`);
    console.log(`                                           ⤷ 3- Vou desistir e ficar em casa.`);
    resposta = +prompt();
    valresp();
    console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

//                           ----------------------------------------------
    if (resposta == 1){

        //modificando os status
        geradorDeTempo(2,tempo);
        energia = disposicao(2,energia)
        dinheiro = dinheiro - 5
        
        //Verificaçoes
        resulstat();

        //                  ----------------
        status();
        console.log();
        console.log(`                        ❝ Voce teve que correr ate o ponto de onibus, isso fez voce se cansar um pouco!!`) 
        console.log(`                                         Voce gastou 5$ para pagar a tarifa do onibus.`);
        console.log(`                                            Voce conseguiu pegar o segundo onibus`);
        console.log(`                                               agora vamos ao seu destino ❞ `)
        friendA4();
        
    } else if (resposta == 2){
    
        //modificando os status
        geradorDeTempo(2, tempo);
        sFome = alimentacao(1, sFome);
        energia = disposicao(2, energia);
        
        //Verificaçoes
        resulstat();

        //                  ----------------
        status();
        console.log();
        console.log(`                                                 ❝ Voce foi de bicicleta!!`); 
        console.log(`                                         Para ir de bicicleta voce gastou energia!`);
        console.log(`                                    Sua alimentaçao diminui por conta do esforço fisico`);
        console.log(`                                Indo de bicicleta voce gastou mais tempo do que de onibus ❞ `);
        friendA4();
    
    } else if (resposta == 3){
            game();
    }
}

function a2(){

    //Modificando status
    sFome = 40;
    geradorDeTempo(2,tempo);
    energia = energia - 5;
    dinheiro = dinheiro - 5;

    //Verificaçoes
    resulstat();

    //                           -------------------
    status();
    console.log();
    console.log(`                                     ❝ Voce gastou 5$ para pagar a tarifa do onibus.`);
    console.log(`                                      Sua alimentaçao esta em um nivel muito baixo! ❞`)
    console.log();
    console.log(`                   ❝ Voce pegou seu onibus, porem percebeu que esta com o nivel de alimentaçao muito baixo!`);
    console.log(`                                    Voce tera de comer algo para continuar seu dia ❞ `);
    console.log();
    console.log(`                                            】---------------¥---------------【`)
    console.log();
    console.log(`                                              ➞  Oque gostaria de fazer?`);
    console.log(`                                          ⤷ 1 - Vou esperar a hora do almoço!`);
    console.log(`                                         ⤷ 2 - Vou comprar e comer um FastFood!`);
    console.log(`                                         ⤷ 3 - Vou comprar e comer uma bolacha!`);
    resposta = +prompt();
    valresp();
    console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

    //                           -------------------
    if (resposta === 1){//A2.1       
        //modificando status
        sFome = alimentacao(1,sFome);
        energia = disposicao(1,energia);
        geradorDeTempo(2,tempo);

        //Verificaçoes
        resulstat();

        //                           -------------------
        status();
        console.log();
        console.log(`                                          ❝ Voce decidiu esperar a hora do almoço`);
        console.log(`                                    Porem seu nivel de alimentaçao abaixo ainda mais! ❞`)
        console.log();
        console.log(`                            ❝ Para que voce possa continuar seu dia, sera necessario comer algo!`);
        console.log(`                                      Voce tera de comer algo para continuar seu dia ❞ `);
        console.log();
        console.log(`                                            】---------------¥---------------【`)
        console.log();
        console.log(`                                              ➞  Oque gostaria de comer?`);
        console.log(`                                          ⤷ 1 - Vou comprar e comer um HotDog!`);
        console.log(`                                         ⤷ 2 - Vou comprar e comer um FastFood!`);
        console.log(`                                         ⤷ 3 - Vou comprar e comer uma bolacha!`);
        resposta = +prompt();
        valresp();
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

        //                           -----------------------------------
        if (resposta == 1){//A2.1.1
            //Modificando status
            sFome = 80;
            geradorDeTempo(1,tempo);
            energia = 80;
            dinheiro = dinheiro - 17

            //Verificaçoes
            resulstat();

            //                           -------------------
            status();
            console.log();
            console.log(`                                           ❝ Seu nivel de alimentaçao aumentou!`);
            console.log(`                                  Agora que esta alimentado, sua energia tambem aumentou! `);
            console.log(`                                              Voce gastou 17$ do seu dinheiro! `);
            console.log(`                           Seu nivel de alimentaçao ja esta alto o suficiente para continuar seu dia! ❞`);
            friendA4();

        } else if (resposta == 2){//A2.1.2
            //Modificando status
            sFome = 100;
            geradorDeTempo(1,tempo);
            energia = 90;
            dinheiro =  dinheiro - 40;

            //Verificaçoes
            resulstat();     
            
            //                           -------------------
            status();
            console.log();
            console.log(`                                       ❝ Seu nivel de alimentaçao esta completo agora!`);
            console.log(`                                  Agora que esta alimentado, sua energia tambem aumentou! `);
            console.log(`                                              Voce gastou 40$ do seu dinheiro! `);
            console.log(`                           Seu nivel de alimentaçao ja esta alto o suficiente para continuar seu dia! ❞`);
            friendA4();

        } else if (resposta == 3){//A2.1.3
            //Modificando status
            sFome = 50;
            geradorDeTempo(1,tempo);
            dinheiro = dinheiro - 5;

            //Verificaçoes
            resulstat();

            //                           -------------------
            status();
            console.log();
            console.log(`                                            ❝ Seu nivel de alimentaçao aumentou!`);
            console.log(`                                               Voce gastou 5$ do seu dinheiro! `);
            console.log(`                          Seu nivel de alimentaçao ja esta alto o suficiente para continuar seu dia! `);
            console.log(`                                         Porem fique de olho em sua alimentaçao ❞`)
            friendA4();
        }    
        //                           -----------------------------------


    } else if (resposta == 2) {//A2.2
        //Modificando status
        sFome = 100;
        energia = 95;
        geradorDeTempo(1,tempo);
        dinheiro = dinheiro - 40;

        //Verificaçoes
        resulstat();

        //                           -------------------
        status();
        console.log();
        console.log(`                                      ❝ Seu nivel de alimentaçao esta completo agora!`);
        console.log(`                                  Agora que esta alimentado, sua energia tambem aumentou! `);
        console.log(`                                              Voce gastou 40$ do seu dinheiro! ❞`);
        console.log();
        console.log(`                         ❝ Seu nivel de alimentaçao ja esta alto o suficiente para continuar seu dia! ❞`);
        console.log();
        console.log(`                                            】---------------¥---------------【`)
        console.log();
        console.log(`                                              ➞  Oque gostaria de fazer?`);
        console.log(`                                          ⤷ 1 - Vou seguir meus objetivos do dia!`);
        console.log(`                                              ⤷ 2 - Vou passear no parque!`);
        resposta = +prompt();
        valresp();
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

      //                           -------------------
         if (resposta == 1){//A2.2.1
             friendA4();
         } else if (resposta == 2){//A2.2.2
             //Mudando status
             sFome = alimentacao(1,sFome);
             energia = energia - 5;
             geradorDeTempo(3,tempo);

             //Verificaçoes
            resulstat();

            //                           -------------------
            status();
            console.log();
            console.log(`                             ❝ Seu nivel de energia diminuio por conta do trajeto ate o parque! ❞`);
            console.log();
            console.log(`                                         ❝ Dentro do parque existem dois caminhos! `);
            console.log(`                               Um dos caminhos voce ja conhece, costuma passar frequentemente!`);
            console.log(`                             O outro caminho voce nunca havia percebido e nunca passou por la! ❞`)
            console.log();
            console.log(`                                            】---------------¥---------------【`)
            console.log();
            console.log(`                                         ➞  Qual dos caminhos gostaria de seguir?`);
            console.log(`                                                   ⤷ 1 - Conhecido!`);
            console.log(`                                                  ⤷ 2 - Desconhecido!`);
            resposta = +prompt();
            valresp();
            console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

    //------------------------------------------------------------------------------------------------------

                 if (resposta == 1){
                   friendA4();
                } else if (resposta == 2){
                   //Modificando status

                            //                           -------------------
                            status();
                            console.log();
                            console.log(`                              ❝ Enquanto caminhava, ouviu um barulho estranho em um arbusto ❞`)
                            console.log();
                            console.log(`                                            】---------------¥---------------【`)
                            console.log();
                            console.log(`                                                    ➞  Oque fazer?`);
                            console.log(`                                       ⤷ 1 - Sou curioso, vou ver que som e este!`);
                            console.log(`                                       ⤷ 2 - Vou ignorar e seguir minha caminhada!`);
                            resposta = +prompt();
                            valresp();
                            console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

                         if (resposta == 1){
                            //Modificando status
                            geradorDeTempo(2,tempo);
                            energia = disposicao(2,energia);
                            sFome = alimentacao(1,sFome);

                            //Verificaçoes
                            resulstat();

                            //                           -------------------

                            status();
                            console.log();
                            console.log(`                                  ❝ Seu nivel de energia diminuio por conta da caminhada! `)
                            console.log(`                                        Seu nivel de alimentaçao tambem diminuio! ❞`);
                            console.log();
                            console.log(`                                    ❝ Dentro do arbusto que emitia aquele som estranho! `);
                            console.log(`                                         Voce avistou um tipo de luz brilhante!`);
                            console.log(`                                Isso aumentou sua curiosidade e voce decidiu ver de perto!`)
                            console.log(`                             Quando se aproximou, percebeu que era um tipo de pedra energetica ❞`)
                            console.log();
                            console.log(`                                            】---------------¥---------------【`)
                            console.log();
                            console.log(`                                                 ➞  Oque deseja fazer?`);
                            console.log(`                                       ⤷ 1 - Ir embora fingindo nao ter visto nada!`);
                            console.log(`                                        ⤷ 2 - Pegar a pedra para mim e ir embora!`);
                            console.log(`                                         ⤷ 3 - Pegar a pedra para ver de perto!`);
                            resposta = +prompt();
                            valresp();
                            console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

                                    if (resposta == 1){
                                       //Modificando status

                                       //                           -------------------
                                       status();
                                       console.log();
                                       console.log(`                                 ❝ Voce virou as costas e seguiu seu caminho normalmente ❞`);
                                       friendA4();

                                    } else if (resposta == 2){
                                            //Modificando status

                                            //                           -------------------
                                            status();
                                            console.log();
                                            console.log(`                                               ❝ Voce pegou a pedra nas maos! ❞`)
                                            console.log();
                                            console.log(`                                   ❝ Enquanto voce estava observando a pedra energetica! `);
                                            console.log(`                                           Uma pessoa estranha gritou de longe!`);
                                            console.log();
                                            console.log(`                                                   ↧「Pessoa estranha」↧`);
                                            console.log(`                                        "- Parado ai mesmo, coloque isso no chao!`)
                                            console.log(`                                   -Eu tenho uma arma quantica e nao tenho medo de usar" ❞`)
                                            console.log();
                                            console.log(`                                            】---------------¥---------------【`)
                                            console.log();
                                            console.log(`                                                 ➞  Oque deseja fazer?`);
                                            console.log(`                                                ⤷ 1 - colocar no chao!`);
                                            console.log(`                                    ⤷ 2 - Dizer "Nao vou colocar, eu achei e agora e meu!!`);
                                            console.log(`                                                  ⤷ 3 - Sair correndo!`);
                                            resposta = +prompt();
                                            valresp();
                                            console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                                            a2b1();

                                    } else if (resposta == 3){
                                       //Modificando status
                                        sFome = 0;
                                        energia = 0;

                                        //Verificaçoes
                                        resulstat();

                                       //                           -------------------
                                       status();
                                       console.log();
                                       console.log(`                                ❝ Uma pessoa estranha viu voce roubando a pedra energetica! `);
                                       console.log(`                       Sem voce perceber, essa pessoa utilizou uma arma quantica para atirar em voce!`);
                                       console.log(`                                                Essa pessoa te desentegrou! ❞`);
                                       console.log();
                                       console.log(`                                            】---------------¥---------------【`);
                                       console.log();
                                       gameover(1);
                                       

                                    } 
                         } else if (resposta == 2){
                            friendA4();
                        }
                    }
                }

    } else if (resposta == 3){//A2.3
        //Modificando status
        sFome = sFome + 10;
        dinheiro = dinheiro - 5;

        //Verificaçoes
        resulstat();

        //                           -------------------
        status();
        console.log();
        console.log(`                                          ❝ Seu nivel de fome aumentou um pouco! `);
        console.log(`                                             Voce gastou 5$ de seu dinheiro! ❞`);
        console.log();
        console.log(`                                ❝ Seu nivel de fome aumentou o suficiente para continuar!`)
        console.log(`                                         Porem fique de olho em sua alimentaçao! ❞`)
        friendA4();
    }

    
// ----------------------------------------------------------------------------------------

function a2b1 (){

    if (resposta == 1){
        //Modificando status

        //                           -------------------
        status();
        console.log();
        console.log(`                                                    ↧「Pessoa estranha」↧`)
        console.log(`                                           ❝ "- Agora venha ate mim de costas!"`)
        console.log(`                                         - Drogaa! Voce nao deveria estar aqui! ❞`)                                        
        console.log(`                             - Essa pedra e uma peça muito importante de um dos meus robos!`)
        console.log(`                                          - Mas infelizmente ele saio de controle!`)
        console.log(`                             - A humanidade nao pode saber sobre a existencia de meus robos!`)
        console.log(`                                                - Pelo menos nao ainda!" ❞`)
        console.log();
        console.log(`                           ❝ A pessoa estranha atirou em voce com uma arma de lavagem cerebral!`)
        console.log(`                            Sua memoria foi apagada e voce retornou para o caminho do parque! ❞`)
        console.log();
        friendA4();

    } else if (resposta == 2){
         //Modificando status

        //                           -------------------
        console.log(`                                          ❝ Voce virou as costas e saio correndo!`)
        console.log(`                          Porem sem voce perceber, a pessoa estranha atirou em voce com a arma quantica! ❞`)
        console.log();
        console.log(`                                                  ❝Voce foi desintegrado!❞`);
        console.log();
        gameover(1);

    } else if (resposta == 3){

        //Modificando status

        //                           -------------------
        status();
        console.log();
        console.log(`                                                    ↧「Pessoa estranha」↧`)
        console.log(`                                     ❝ "- Voce nao sabe com quem esta falando menino!"`)
        console.log(`                                            - coloque isso no chao agora mesmo! ❞`) 
        console.log();
        console.log(`                                            】---------------¥---------------【`)
        console.log();
        console.log(`                                                 ➞  Oque deseja fazer?`);
        console.log(`                                 ⤷ 1 - Seguir firme em  minha escolha e dizer "- Nao colocarei!!"`);
        console.log(`                           ⤷ 2 - Dizer "Voce nao sabe com quem esta falando, eu nao tenho medo de voce!!"`);
        console.log(`     ⤷ 3 - Dizer "Ok, vou colocar no chao. Porem voce vai ter que me prometer!, nao me fara nenhum mal e me dira oque estou segurando!"`);
        resposta = +prompt();
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

            if (resposta == 1){
                //Modificando status
                sFome = 0;
                energia = 0;

                //Verificaçoes
                resulstat();

                //                           -------------------
                status();
                console.log();
                console.log(`                                         ❝ Logo apos dizer que nao colocaria no chao!`);
                console.log(`                                    Um objeto estranho voador, tirou a pedra de suas maos!`);
                console.log(`                                    A pessoa estranha atirou em voce com a arma quantica! ❞`);
                console.log();
                console.log(`                                                  ❝Voce foi desintegrado!❞`);
                gameover(1);

            } else if (resposta == 2){

                //Modificando status
                sFome = 0;
                energia = 0;

                //Verificaçoes
                 resulstat();

                //                           -------------------
                status();
                console.log(`                                               ❝ Logo apos terminar de falar!`);
                console.log(`                                    Um objeto estranho voador, tirou a pedra de suas maos!`);
                console.log(`                                    A pessoa estranha atirou em voce com a arma quantica! ❞`);
                console.log();
                console.log(`                                                  ❝Voce foi desintegrado!❞`);
                gameover(1);

            } else if (resposta == 3){

                //Modificando status
                geradorDeTempo(3,tempo);

                //Verificaçoes
                 resulstat();

                //                           -------------------
                status();
                console.log();
                console.log(`                                                    ↧「Pessoa estranha」↧`)
                console.log(`                                               ❝ "- Ta ok, como voce quiser!"`)
                console.log(`                                            - Mas primeiro coloque isso no chao! ❞`)  
                console.log();
                console.log(`                                            】---------------¥---------------【`)
                console.log();
                console.log(`                                                 ➞  Oque deseja fazer?`);
                console.log(`                                                ⤷ 1 - Colocar no chao!!"`);
                console.log(`                   ⤷ 2 - Dizer "Nao primeiro voce me diz quem e voce, e oque e isto que estou segurando??"`);
                resposta = +prompt();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                
                if (resposta == 1){
                    //Modificando status
                    sFome = 0;
                    energia = 0;

                    //Verificaçoes
                    resulstat();

                    //                           -------------------
                    status();
                    console.log();
                    console.log(`                                                    ↧「Pessoa estranha」↧`)
                    console.log(`                                                 ❝ "- Me desculpe por isso!" ❞`)
                    console.log();
                    console.log(`                                           ❝ A pessoa estranha desentegrou voce! ❞`)  
                    console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                    console.log();
                    gameover(1);

                } else if (resposta == 2){
                    //Modificando staus

                    //                           -------------------
                    status();
                    console.log();
                    console.log(`                                                    ↧「Pessoa estranha」↧`)
                    console.log(`                                              ❝ "- Ta, Meu nome e Nizo Altravs`)
                    console.log(`                      - Mas pode me chamar de "Doutor Maluco", as pessoas costumam me chamar assim! ❞`)                                        
                    console.log(`                            - Isso que voce esta segurando em sua mao, e um cristal de energia!`)
                    console.log(`                                  - Eu uso ele como fonte de energia de um dos meus robos!`)
                    console.log(`                                      - Agora voce poderia colocar isso no chao porfavor!`)
                    console.log();
                    console.log(`                                            】---------------¥---------------【`)
                    console.log();
                    console.log(`                                                 ➞  Oque deseja fazer?`);
                    console.log(`                                                ⤷ 1 - Colocar no chao!!"`);
                    console.log(`                           ⤷ 2 - Dizer "Nao nao, agora voce me promete que nao me fara nenhum mal!!"`);
                    resposta = +prompt();
                    console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                    a2b2();
                }
            }
        }
    }

    function a2b2 (){
        if (resposta == 1){
            //Modificando status
            sFome = 0;
            energia = 0;

            //Verificaçoes
            resulstat();

            //                           -------------------
            status();
            console.log(`                                                 ❝ Logo apos colocar no chao!`);
            console.log(`                                    A pessoa estranha atirou em voce com a arma quantica! ❞`);
            console.log();
            console.log(`                                                  ❝Voce foi desintegrado!❞`);
            console.log();
            gameover(1);
    
        } else if (resposta == 2){
    
            //Modificando staus
            geradorDeTempo(3,tempo);

            //Verificaçoes
            resulstat();


            //                           -------------------
            status();
            console.log();
            console.log(`                                                    ↧「Doutor Maluco」↧`)
            console.log(`                      ❝ "- A mas que droga, eu fiz um juramento de nunca quebrar uma promeça, mas ok.`)
            console.log(`                                          - Eu prometo nao lhe fazer nenhum mal! `)                                        
            console.log(`                                          - Agora coloque isso no chao porfavor!!!" ❞`)
            console.log();
            console.log(`                                            】---------------¥---------------【`)
            console.log();
            console.log(`                                                 ➞  Oque deseja fazer?`);
            console.log(`                       ⤷ 1 - Nao confiar na palavra do doutor. Dizer "agora coloque a arma no chao!!"`);
            console.log(`                                                ⤷ 2 - Colocar no chao!"`);
            resposta = +prompt();
            console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

            if (resposta == 1){

                //Modificando staus

                //                           -------------------
                status();
                console.log();
                console.log(`                                                    ↧「Doutor Maluco」↧`)
                console.log(`                                                     ❝ "- Ah chega!!.`);
                console.log(`                                              - Cansei de suas exigencias! ❞`); 
                console.log();
                console.log(`                                 ❝ O Doutor utilizou uma arma de lavagem cerebral em voce!`);
                console.log(`                                       Sem lhe machucar, o Doutor limpou sua mente!`);
                console.log(`                                 Voce voltou ao caminho do parque sem se lebrar de nada! ❞`);
                console.log();
                friendA4();

            } else if (resposta == 2){

                //Modificando staus

                //                           -------------------
                status();
                console.log();
                console.log(`                                                    ↧「Doutor Maluco」↧`)
                console.log(`                                 ❝ "- Voce nao sabe o quanto isto e importante para mim!!. ❞`)
                console.log();
                console.log(`                                            】---------------¥---------------【`)
                console.log();
                console.log(`                                                    ➞  Oque dizer?`);
                console.log(`         ⤷ 1 - "Ta, agora sei que nao me fara nenhum mal. Eu vou embora, nao quero estar envolvido em suas loucuras!!"`);
                console.log(`                                         ⤷ 2 - "Mas a final, oque isto faz aqui?"`);
                console.log(`                                    ⤷ 3 - "Voce poderia me explicar mais sobre isso?"`);
                resposta = +prompt();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

                if (resposta == 1){

                mindWash();

                } else if (resposta == 2){

                //Modificando staus

                //                           -------------------
                status();
                console.log();
                console.log(`                                                    ↧「Doutor Maluco」↧`)
                console.log(`                                            ❝ "- Um de meus robos enlouqueceu!`)
                console.log(`                                     - Saio voando por ai com peças da minha oficina!`)                                        
                console.log(`                          - Bom se quiser saber mais sobre isso, venha comigo ate meu laboratorio!`)
                console.log(`                                             - Nao gosto de ficar ao ar livre!" ❞`)
                console.log();
                console.log(`                                            】---------------¥---------------【`)
                console.log();
                console.log(`                                                    ➞  Oque fazer?`);
                console.log(`                                        ⤷ 1 - "Nao, na verdade acho que vou embora"`);
                console.log(`                                                  ⤷ 2 - Ir com o doutor`);
                resposta = +prompt();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

                    if (resposta == 1){

                        mindWash();

                    } else if (resposta == 2){

                        a2b3();
                    }
                } else if (resposta == 3){
                //Modificando status

                //                           -------------------
                status();
                console.log();
                console.log(`                                                    ↧「Doutor Maluco」↧`)
                console.log(`                         ❝ "- Fico feliz por alguem da sua idade se interessar por coisas do tipo!`);
                console.log(`                        - Mas primeiro, vamos para meu laboratorio, nao gosto de ficar ao ar livre! ❞`);
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`); 
                console.log();
                a2b3();

                }
            }
        }
    }    

        function a2b3 (){

            //Modificando status
            geradorDeTempo(1,tempo);
            sFome = alimentacao(2,sFome);
            energia = disposicao(1,energia);

            //Verificaçoes
            resulstat();

             //                           -------------------
            status();
            console.log();
            console.log(`                              ❝ Sua energia diminuio por conta do trajeto ate o laboratorio!`)
            console.log(`                                            Sua alimentaçao tambem diminuio! ❞`)
            console.log();
            console.log(`                                        ❝ Voces chegaram no laboratorio do Doutor ❞`)
            console.log();
            console.log(`                                                    ↧「Doutor Maluco」↧`)
            console.log(`                                 ❝ "- Bom, nao e grande coisa, mas este e meu laboratorio!`)
            console.log(`                                             - Porfavor nao mecha em nada!`)                                        
            console.log(`     - Voce encontrou uma pilula brilhante, e acabou tomando por curiosidade, antes do doutor dizer para nao mecher em nada!" ❞`)
            console.log();
            console.log(`                                            】---------------¥---------------【`)
            console.log();
            console.log(`                                                    ➞  Oque dizer?`);
            console.log(`                                        ⤷ 1 - "Ei Doutor, posso tomar essa pilula?"`);
            console.log(`                             ⤷ 2 - Doutor e que ja tomei. Na verdade para que serve essa pilula?`);
            resposta = +prompt();
            console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

            if (resposta == 1){

                //Modificando status
                geradorDeTempo(1,tempo);
                sFome = alimentacao(2,sFome);
                energia = disposicao(1,energia);

                //Verificaçoes
                resulstat();

                //                           -------------------
                status();
                console.log();
                console.log(`                              ❝ Sua energia diminuio por conta do trajeto ate o laboratorio!`)
                console.log(`                                            Sua alimentaçao tambem diminuio! ❞`)
                console.log();
                console.log(`                                                    ↧「Doutor Maluco」↧`)
                console.log(`                                                   ❝ "- Claro, pode sim!`)
                console.log(`                                         - Esta e uma de minhas maiores invençoes`)
                console.log(`                                                - Vai quero velo tomando!" ❞`)  
                console.log();
                console.log(`                                            】---------------¥---------------【`)  
                console.log();
                console.log(`                                                    ➞  Oque fazer?`);
                console.log(`                                                      ⤷ 1 - Tomar`);
                console.log(`                              ⤷ 2 - Contar ao doutor que ja tomei, e perguntar para que serve?`);
                resposta = +prompt();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
            

                    if (resposta == 1){

                        //Modificando status
                        geradorDeTempo(3,tempo);
                        sFome = 0;
                        energia = 0;

                        //Verificaçoes
                        resulstat();

                        //                           -------------------
                        status();
                        console.log();
                        console.log(`                                                    ↧「Doutor Maluco」↧`);
                        console.log(`                          ❝ "- Uau, voce e a primeira pessou a tomar a pilula, alem de mim claro!`)
                        console.log(`                           - Na verdade uma outra pessoa tambem tomou, mas acabou tomando duas!`)
                        console.log(`                                                - Ah, alias nao tome duas.`)
                        console.log(`                        - Pois quando se toma duas, essa pilula se torna um veneno extra forte!" ❞`)  
                        console.log();
                        console.log(`                                             ❝ A pilula se tornou um veneno! ❞`)
                        console.log();
                        console.log(`                                            】---------------¥---------------【`) 
                        console.log();
                        gameover(1);

                    } else if (resposta == 2){
                        a2b3c1();
                }
            } else if (resposta == 2){
                a2b3c1();
        }

        function a2b3c1 (){

            //Modificando status
            geradorDeTempo(3,tempo);
            sFome = 100;
            energia = 100;

            //Verificaçoes
            resulstat();

            //                           -------------------
            status();
            console.log();
            console.log(`                                                    ↧「Doutor Maluco」↧`)
            console.log(`                                        ❝ "- Ah, esta e minha pilula da alegria!!`)
            console.log(`                    - Basicamente ela te deixa totalmente alimentado e cheio de energia durante 1 mes!`)
            console.log(`                               - Se quiser pode tomar, porem nao tome 2, ou fara muito mal! ❞`)
            console.log();
            console.log(`                                  ❝ A partir de agora voce nao sente fome ou cansaço ❞`);
            console.log();
            console.log(`                                                    ↧「Doutor Maluco」↧`)
            console.log(`                                       ❝ "- Venha, vou lhe mostrar meu laboratorio!`)
            console.log(`                               "- Estes sao os robos, peças de robos, naves espaciais etc ❞`)
            console.log();
            console.log(`                                            】---------------¥---------------【`) 
            console.log();
            console.log(`                                                    ➞  Oque dizer?`);
            console.log(`                                                  ⤷ 1 - Nao dizer nada.`);
            console.log(`                                              ⤷ 2 - Oque sao esses liquidos?`);
            resposta = +prompt();
            console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

                if (resposta == 1){

                    //Modificando status

                    //                           -------------------
                    status();
                    console.log();
                    console.log(`                                                    ↧「Doutor Maluco」↧`)
                    console.log(`                                     ❝ "- Bom, ja te mostrei tudo que era interessante.!`)
                    console.log(`                                     - agora preciso te mandar de volta para sua vida`)
                    console.log(`                                                        - Adeus!" ❞`)
                    console.log();
                    console.log(`                             ❝O Doutor voltou no tempo e te deixou devolta no caminho do parque❞`)
                    friendA4();  

                } else if (resposta == 2){

                    //Modificando status

                    //                           -------------------
                    status();
                    console.log();
                    console.log(`                                                    ↧「Doutor Maluco」↧`)
                    console.log(`                           ❝ "- Ah os liquidos de poderes, cada um deles comtem um super poder!`)
                    console.log(`                                      - Nao toque neles, eu ainda nao testei nenhum" ❞`)
                    console.log();
                    console.log(`                                            】---------------¥---------------【`) 
                    console.log();
                    console.log(`                                                    ➞  Oque dizer?`);
                    console.log(`                                              ⤷ 1 - Hm, entendi, bem legal`)
                    console.log(`                                   ⤷ 2 - Perguntar sobre o animalzinho que esta ao lado`);
                    resposta = +prompt();
                    console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

                    if (resposta == 1){
                        
                        //Modificando status

                        //                           -------------------
                        status();
                        console.log();
                        console.log(`                                                    ↧「Doutor Maluco」↧`)
                        console.log(`                           ❝ "- Bom ja chega, agora chegou a hora de voce voltar a sua vida normal! ❞`)
                        console.log();
                        console.log(`                            ❝ O Doutor voltou no tempo e te deixou devolta no caminho do parque ❞`)
                        friendA4();  
                        

                    } else if (resposta == 2){
                          
                        //Modificando status
                        geradorDeTempo(2,tempo);

                        //Verificaçoes
                        resulstat();

                        //                           -------------------
                        status();
                        console.log();
                        console.log(`                                                    ↧「Doutor Maluco」↧`)
                        console.log(`                                  ❝ "- Ah este e o nuclereos, meu jacare de estimaçao! ❞`)
                        console.log(`                                              -Barulho do jacare: "ohfs"- "❞`)
                        console.log();
                        console.log(`            ❝ - Voce se assustou, bateu as costas na mesa das poçoes, e todas elas juntas cairam em cima de voce`)
                        console.log(`                                  - Voce começou a sentir efeitos estranhos pelo corpo! ❞`)
                        console.log();
                        console.log(`                                            】---------------¥---------------【`) 
                        console.log();
                        console.log(`                                                    ➞  Oque dizer?`);
                        console.log(`                                          ⤷ 1 - Sera que eu vou morrer doutor?`);
                        console.log(`                                       ⤷ 2 - Doutor oque esta acontecendo comigo?`);
                        resposta = +prompt();
                        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

                        if (resposta = 1){

                            //Modificando status

                            //                           -------------------
                            status();
                            console.log();
                            console.log(`                                                    ↧「Doutor Maluco」↧`)
                            console.log(`                                        ❝ "- Nao, voce nao vai morrer, eu acho kkk `)
                            console.log(`                                        - Voce deve estar tendo o efeito das poçoes"`);
                            console.log(`                                  - Vou gravar isso, voce e a primeira pessoa a testalas" ❞`)
                            console.log();
                            console.log(`                                            】---------------¥---------------【`) 
                            console.log();
                            console.log(`                                                    ➞  Oque dizer?`);
                            console.log(`                              ⤷ 1 - Isso nao tem graça doutor!, eu nao estou me sentindo bem`);
                            console.log(`                              ⤷ 2 - Espera, acho que estou me sentindo bem!, bem ate demais`);
                            resposta = +prompt()
                            console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

                                if (resposta == 1){
                                    //Modificando status
                                    sFome = 0;
                                    energia = 0;

                                    //Verificaçoes
                                    resulstat();

                                    //                           -------------------
                                    status();
                                    console.log();
                                    console.log(`                                                    ↧「Doutor Maluco」↧`)
                                    console.log(`                                    ❝ "- Acho que voce esta tendo um ataque cardiaco!" ❞`)
                                    console.log();
                                    gameover(1);

                                } else if (resposta == 2){
                                   
                                    a2b4();

                                }

                        } else if (resposta = 2){

                            //Modificando status
                            
                            //                           -------------------
                            status();
                            console.log();
                            console.log(`                                                    ↧「Doutor Maluco」↧`)
                            console.log(`                                    ❝ "- Voce deve estar tendo o efeito das poçoes!`)
                            console.log(`                                    - Vou gravar isso, voce e a primeira pessoa a testalas!" ❞`)
                            console.log();
                            console.log(`                                            】---------------¥---------------【`) 
                            console.log();
                            console.log(`                                                    ➞  Oque dizer?`);
                            console.log(`                              ⤷ 1 - Espera, acho que estou me sentindo bem!, bem ate demais`);
                            console.log(`                                                 ⤷ 2 - Nao estou bem!`);
                            resposta = +prompt();
                            console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

                            if (resposta == 1){

                                a2b4();

                            } else if (resposta == 2){
                                //Modificando status
                                sFome = 0;
                                energia = 0;

                                //Verificaçoes
                                resulstat();

                                //                           -------------------
                                status();
                                console.log();
                                console.log(`                                                    ↧「Doutor Maluco」↧`)
                                console.log(`                                    ❝ "- Acho que voce esta tendo um ataque cardiaco!" ❞`)
                                console.log();
                                gameover(1);
                            }
                    }
                }
            }
        }
    }
            function a2b4(){

                //Modificando status
                geradorDeTempo(2,tempo);

                //Verificaçoes
                resulstat();

                //                           -------------------
                status();
                console.log();
                console.log(`                                                    ↧「Doutor Maluco」↧`)
                console.log(`                                 ❝ "- Serio!, eu nao esperava por isso.!`)
                console.log(`                                             - Tente fazer algo diferente!" ❞`)
                console.log();
                console.log(`                                            】---------------¥---------------【`)
                console.log();
                console.log(`                                              ➞  Oque gostaria de fazer?`);
                console.log(`                                                       ⤷ 1 - Voar!`);
                console.log(`                                                   ⤷ 2 - Super Força!`);
                console.log(`                                                  ⤷ 3 - Visao a laser!`);
                resposta = +prompt();
                console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

                 //                                                  {}----{}------------{}-----------{}----{}
                 
                 console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
                 console.log();
                 console.log(`                                                    ↧「Doutor Maluco」↧`)
                 console.log(`                                                    ❝ "- Funcionouuuu!!`)
                 console.log(`                                      - Como eu disse, voce ganhou super poderes!!" ❞`)
                 console.log();
                 console.log(`                                                        ↧「Voce」↧`)
                 console.log(`                                                 ❝ "- super poderes?" ❞`)
                 console.log();
                 console.log(`                                                    ↧「Doutor Maluco」↧`)
                 console.log(`                                ❝ "- Sim, a partir de agora voce tem que ser um super heroi!!" ❞`)
                 console.log();
                 console.log(`                                          ❝ Parabens voce conseguiu ganhar o jogo`)
                 console.log(`                                            Seu novo trabalho e como super heroi`)
                 console.log(`                             Voce agora e um super heroi, nao precisa chegar em casa no horario! ❞`)
                 console.log();
                 win(2);
    }
}


//Funçoes de controle
function status(){
    console.log();
    console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
    console.log();
    console.log(`   ${rodadas} Rodadas`)
    console.log(`   ${tempo[1]}:${tempo[2]} Relogio                               `);
    console.log();
    console.log(`                                                                                                      Alimentaçao ${sFome}`);
    console.log(`                                                                                                      Energia ${energia}`);
    console.log(`                                                                                                      Dinheiro ${dinheiro}`);
}

function resulstat (){
    if (sFome <= 15 && sFome >= 1 && dinheiro >= 15){
        status();
        console.log();
        console.log(`                                       ❝ Seu nivel de alimentaçao esta muito baixo!`)
        console.log(`                                     Sera necessario comer algo para poder continuar. ❞`)
        console.log();
        console.log(`                              ❝ Voce olhou em volta e viu algumas lojas para comprar comida. ❞`)
        console.log();
        console.log(`                                            】---------------¥---------------【`)
        console.log();
        console.log(`                                            ➞ Escolha oque gostaria de comer:`);
        console.log(`                                                 ⤷ 1 - Comer um FastFood`);
        console.log(`                                         ⤷ 2 - Comer um PF em um restaurante`);
        console.log(`                                                 ⤷ 3 - comer um pastel`);
        resposta = +prompt();
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

        if (resposta == 1){
            //Modificando status
            sFome = 85;
            dinheiro = dinheiro - 40;
            geradorDeTempo(1,tempo);
            energia = energia + 20;

            //                                     ------------------------------------- 
            status();
            console.log();
            console.log(`                            ❝ Seu nivel de alimentaçao ja esta alto suficiente para continuar!. `)
            console.log(`                                          Voce gastou 40$ para comer seu FastFood `)
            console.log(`                                                  Sua energia aumentou 20! `)
            console.log(`                                            Lembre de ficar de olho no relogio! ❞`)
            console.log();
            console.log(`                                    ❝ Agora que voce esta alimentado, podera continuar! ❞`)
            console.log();
            resposta = prompt(`                                                  Continuar`)
            console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        } else if (resposta == 2){
            //Modificando status
            sFome = 100;
            dinheiro = dinheiro - 20;
            geradorDeTempo(1,tempo);
            energia = energia + 30;

            //                                     ------------------------------------- 
            status();
            console.log();
            console.log(`                            ❝ Seu nivel de alimentaçao ja esta alto suficiente para continuar!. `)
            console.log(`                                          Voce gastou 20$ para comer seu FastFood `)
            console.log(`                                                  Sua energia aumentou 30! `)
            console.log(`                                            Lembre de ficar de olho no relogio! ❞`)
            console.log();
            console.log(`                                    ❝ Agora que voce esta alimentado, podera continuar! ❞`)
            console.log();
            resposta = prompt(`                                                  Continuar`)
            console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        } else if (resposta == 3){
            //Modificando status
            sFome = 70;
            dinheiro = dinheiro - 15;
            geradorDeTempo(1,tempo);
            energia = energia + 10;

            //                                     ------------------------------------- 
            status();
            console.log();
            console.log(`                            ❝ Seu nivel de alimentaçao ja esta alto suficiente para continuar!. `)
            console.log(`                                          Voce gastou 15$ para comer seu FastFood `)
            console.log(`                                                  Sua energia aumentou 10! `)
            console.log(`                                            Lembre de ficar de olho no relogio! ❞`)
            console.log();
            console.log(`                                    ❝ Agora que voce esta alimentado, podera continuar! ❞`)
            console.log();
            resposta = prompt(`                                                  Continuar`)
            console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        }
    } else if (energia <= 15 && energia >= 1){
        status();
        console.log();
        console.log(`Seu nivel de energia esta muito baixo!`);
        console.log(`Sera necessario descansar um pouco para continuar!`);
        console.log();
        console.log(`Voce devera obrigatoriamente sentar em algum lugar e descansar!`);
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        console.log();
        geradorDeTempo(2,tempo);
        energia = 70;
        status();
        console.log(`                                     ❝ Voce descansou o suficiente para continuar! `)
        console.log(`                                       Mas tambem gastou um pouco de seu tempo! ❞`)
        console.log();
        console.log(`                                              ❝ Agora voce podera continuar! ❞`)
        console.log();
        resposta = prompt(`                                                  Continuar`)
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

    } else if (tempo[2] >= 22){
        status();
        console.log();
        console.log(`                                    ❝ Infelizmente voce gastou muito do seu tempo! `)
        console.log(`                                       Nao conseguira chegar em casa no horario! ❞`)
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        console.log();
        game();
    } 

    
}

function valresp(resp){

    if (resp == 1){
        while (resposta != 1 && resposta != 2 && resposta != 3 && resposta != 4){
            console.log();
            console.log(`                                            】---------------¥---------------【`)
            console.log(`                                                         PorFavor`)   
            console.log(`                                   Para escolher uma das respostas, digite 1,2,3 ou 4!`)    
            console.log();
            resposta = +prompt(`                                                  Escolha: `)
            console.log(`                                            】---------------¥---------------【`)
            
        }
    } else if (resp == 2){
        while (resposta != 1 && resposta != 2 && resposta != 3){
            console.log();
            console.log(`                                            】---------------¥---------------【`)
            console.log(`                                                         PorFavor`)   
            console.log(`                                    Para escolher uma das respostas, digite 1,2 ou 3!!`)    
            console.log();
            resposta = +prompt(`                                                  Escolha: `)
            console.log(`                                            】---------------¥---------------【`)
        }
    } else if (resp == 3){
       while (resposta != 1 && resposta != 2 && resposta != 3){
        console.log();
        console.log(`                                            】---------------¥---------------【`)
        console.log(`                                                         PorFavor`)   
        console.log(`                                     Para escolher uma das respostas, digite 1 ou 2!!`)    
        console.log();
        resposta = +prompt(`                                                  Escolha: `)
        console.log(`                                            】---------------¥---------------【`)
       }
   }
}
//                                     -------------------------------------                                    

//Inserindo o enredo
console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
console.log(`                                           Seja muito Bem Vindo ao My Life Play`)   
console.log(`                                              Os seus objetivos no jogo sao:`)   
console.log(`                                                1 - Encontrar um emprego!   `)  
console.log(`                                            2 - chegar em casa antes das 22:00!`)
console.log(`                                                     3 - Nao morrer!`)   
console.log();
resposta = prompt(`                                                    ok?`)                
console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);


//                                     -------------------------------------                                    
//Explicando o funcionamento do jogo
console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
console.log(`                                       - Durante o percurso do jogo, voce devera:`)   
console.log(`                                           - Manter o controle dos seus status`)   
console.log(`                                                      - Nao morrer`)  
console.log(`                                     - Encontrar um emprego antes do fim das 5 rodadas`)  
console.log();
resposta = prompt(`                                                    ok?`)                
console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

//                                     -------------------------------------  
//Localizaçao dos estatus
console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
console.log(`                                            Voce podera visualizar seus status`)   
console.log(`                                                    sempre que quiser!`)   
console.log(`                                       Eles sempre estarao localizados nestes locais!`)  
console.log();
console.log(`   ${rodadas} <- Rodadas`)
console.log(`   ${tempo[1]}:${tempo[2]} <- Relogio                               `);
console.log();
console.log(`                                                                                                Alimentaçao -> ${sFome}`);
console.log(`                                                                                                   Energia -> ${energia}`);
console.log(`                                                                                                  Dinheiro -> ${dinheiro}`); 
console.log();
console.log();
console.log(`                                                 Porem na parte de cima!!`)   
resposta = prompt(`                                                    ok?`)     
console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);                       


//                                     ------------------------------------- 
//Explicando a Historia do jogo
console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
console.log(`                                           Voce acabou de atingir sua maioridade.`)   
console.log(`                                                E quer encontrar um emprego`)   
console.log(`                              Porem sua mae continua em seu pe para chegar em casa no horario`)  
console.log(`                                              Em uma noite antes de ir dormir.`)   
console.log(`                                voce se decidiu que sairia de casa para encontrar um emprego`)   
console.log();
resposta = prompt(`                                                    ok?`)              
console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);                       




function game (){
rodadas++;
gameover();

//Iniciando o jogo
geradorDeTempo(1,tempo);//start no time

status();
console.log();
console.log(`                                              Seu despertador esta tocando!`);
console.log(`                                                  Ja e hora de acordar!`);
console.log(`                                                 Oque gostaria de fazer?`);
console.log();
console.log(`                                            】---------------¥---------------【`)
console.log();
console.log(`                                                        Oque fazer?`);
console.log(`                                     1- Vou desligar o despertador e voltar a dormir!`);
console.log(`                                   2- Vou deixar o despertador tocar ate desligar sozinho!`);
console.log(`                                    3- Vou acordar, desligar o despertador e me preparar!`);
resposta = +prompt();
console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

//Escolhas iniciais
if (resposta == 1) {

    console.log();
    console.log(`                                            】---------------¥---------------【`)
    console.log(`                                             Voce desligou e dormiu o dia todo!`);
    console.log(`                                       Nao conseguiu realizar seus objetivos do dia!`);
    console.log(`                                            】---------------¥---------------【`)
    console.log();
    game();
    
} else if (resposta == 2){

    console.log();
    console.log(`                                            】---------------¥---------------【`)
    console.log(`                                Seu despertador tocou, desligou e voce cointinuou dormindo!`);
    console.log(`                                       Nao conseguiu realizar seus objetivos do dia!`);
    console.log(`                                            】---------------¥---------------【`)
    console.log();
    game();

} else if (resposta == 3){

    //Modificando o status
    geradorDeTempo(1,tempo);//Perca de tempo
    energia = energia - 5;//Perca de energia fixa

    //                         ---------------------
    status();
    console.log();
    console.log(`                                              Agora voce ja esta preparado!!`)
    console.log(`                                        Oque gostaria de fazer para iniciar o dia?`)
    console.log();
    console.log(`                                            】---------------¥---------------【`)
    console.log();
    console.log(`                                                        Oque fazer?`)
    console.log(`                                              1- Vou tomar um café da manha!`)
    console.log(`                                               2- Vou ir pegar meu onibus!`)
    console.log(`                                    3- Vou preparar um sandwich e ir comendo no onibus!`)
    resposta = +prompt();
    console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);

}
 
//Segunda escolha = divisor de caminhos
    if (resposta == 1){
        a1();

    } else if (resposta == 2){

        status();
        console.log();
        console.log(`                                                  Voce pegou seu onibus!`) 
        console.log(`                                          Porem percebeu que esta com muita fome!`)
        console.log();
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        a2();

    } else if (resposta == 3){

        //Modificando o status
        geradorDeTempo(1,tempo);
        tempo[2] = tempo[2] + 20
        sFome = 100;
        dinheiro = dinheiro - 5;

         //                         ---------------------
        status();
        console.log();
        console.log(`                                              Fique sempre atento ao relogio!`)
        console.log(`                                           Vou se alimentou, sua fome esta cheia!`)
        console.log(`                               Voce gastou 5$ do seu dinheiro, para pagar a passagem de onibus!`)
        console.log();
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        friendA4(); //Chamando o caminho desta funçao
    }

}

for (rodadas = 0; rodadas <= 5;){
    if (vic == 1){
        break;
    } else if (los == 1){
        break;
    } else {
    game();
    }

}


function gameover (over){

    if (rodadas == 6){
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        console.log(`                                                         GAME OVER`);   
        console.log(`                                             Voce excedeu o limite de rodadas!`); 
        console.log();  
        console.log();
        console.log(`                                           ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼`); 
        console.log(`                                           ███▀▀▀██┼███▀▀▀███┼███▀█▄█▀███┼██▀▀▀`); 
        console.log(`                                           ██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼█┼┼┼██┼██┼┼┼`); 
        console.log(`                                           ██┼┼┼▄▄▄┼██▄▄▄▄▄██┼██┼┼┼▀┼┼┼██┼██▀▀▀`);
        console.log(`                                           ██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██┼┼┼`);
        console.log(`                                           ███▄▄▄██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██▄▄▄`);
        console.log(`                                           ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼`);
        console.log(`                                           ███▀▀▀███┼▀███┼┼██▀┼██▀▀▀┼██▀▀▀▀██▄┼`);
        console.log(`                                           ██┼┼┼┼┼██┼┼┼██┼┼██┼┼██┼┼┼┼██┼┼┼┼┼██┼`);
        console.log(`                                           ██┼┼┼┼┼██┼┼┼██┼┼██┼┼██▀▀▀┼██▄▄▄▄▄▀▀┼`);
        console.log(`                                           ██┼┼┼┼┼██┼┼┼██┼┼█▀┼┼██┼┼┼┼██┼┼┼┼┼██┼`);
        console.log(`                                           ███▄▄▄███┼┼┼─▀█▀┼┼─┼██▄▄▄┼██┼┼┼┼┼██▄`);
        console.log(`                                           ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼`);
        console.log();                
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        los = 1;
    } else if (sFome <= 0){
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        console.log(`                                                         GAME OVER`);   
        console.log(`                                             Seu nivel de alimentaçao chegou a 0!`); 
        console.log();  
        console.log();
        console.log(`                                           ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼`); 
        console.log(`                                           ███▀▀▀██┼███▀▀▀███┼███▀█▄█▀███┼██▀▀▀`); 
        console.log(`                                           ██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼█┼┼┼██┼██┼┼┼`); 
        console.log(`                                           ██┼┼┼▄▄▄┼██▄▄▄▄▄██┼██┼┼┼▀┼┼┼██┼██▀▀▀`);
        console.log(`                                           ██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██┼┼┼`);
        console.log(`                                           ███▄▄▄██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██▄▄▄`);
        console.log(`                                           ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼`);
        console.log(`                                           ███▀▀▀███┼▀███┼┼██▀┼██▀▀▀┼██▀▀▀▀██▄┼`);
        console.log(`                                           ██┼┼┼┼┼██┼┼┼██┼┼██┼┼██┼┼┼┼██┼┼┼┼┼██┼`);
        console.log(`                                           ██┼┼┼┼┼██┼┼┼██┼┼██┼┼██▀▀▀┼██▄▄▄▄▄▀▀┼`);
        console.log(`                                           ██┼┼┼┼┼██┼┼┼██┼┼█▀┼┼██┼┼┼┼██┼┼┼┼┼██┼`);
        console.log(`                                           ███▄▄▄███┼┼┼─▀█▀┼┼─┼██▄▄▄┼██┼┼┼┼┼██▄`);
        console.log(`                                           ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼`);
        console.log();                
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        los = 1;
    } else if (energia <= 0){
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        console.log(`                                                         GAME OVER`);   
        console.log(`                                             Seu nivel de energia chegou a 0!`); 
        console.log();  
        console.log();
        console.log(`                                           ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼`); 
        console.log(`                                           ███▀▀▀██┼███▀▀▀███┼███▀█▄█▀███┼██▀▀▀`); 
        console.log(`                                           ██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼█┼┼┼██┼██┼┼┼`); 
        console.log(`                                           ██┼┼┼▄▄▄┼██▄▄▄▄▄██┼██┼┼┼▀┼┼┼██┼██▀▀▀`);
        console.log(`                                           ██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██┼┼┼`);
        console.log(`                                           ███▄▄▄██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██▄▄▄`);
        console.log(`                                           ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼`);
        console.log(`                                           ███▀▀▀███┼▀███┼┼██▀┼██▀▀▀┼██▀▀▀▀██▄┼`);
        console.log(`                                           ██┼┼┼┼┼██┼┼┼██┼┼██┼┼██┼┼┼┼██┼┼┼┼┼██┼`);
        console.log(`                                           ██┼┼┼┼┼██┼┼┼██┼┼██┼┼██▀▀▀┼██▄▄▄▄▄▀▀┼`);
        console.log(`                                           ██┼┼┼┼┼██┼┼┼██┼┼█▀┼┼██┼┼┼┼██┼┼┼┼┼██┼`);
        console.log(`                                           ███▄▄▄███┼┼┼─▀█▀┼┼─┼██▄▄▄┼██┼┼┼┼┼██▄`);
        console.log(`                                           ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼`);
        console.log();                
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        los = 1;
    } 

         if (over == 1){
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        console.log(`                                                         GAME OVER!`);   
        console.log(`                                                        Voce morreu!`); 
        console.log();  
        console.log();
        console.log(`                                           ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼`); 
        console.log(`                                           ███▀▀▀██┼███▀▀▀███┼███▀█▄█▀███┼██▀▀▀`); 
        console.log(`                                           ██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼█┼┼┼██┼██┼┼┼`); 
        console.log(`                                           ██┼┼┼▄▄▄┼██▄▄▄▄▄██┼██┼┼┼▀┼┼┼██┼██▀▀▀`);
        console.log(`                                           ██┼┼┼┼██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██┼┼┼`);
        console.log(`                                           ███▄▄▄██┼██┼┼┼┼┼██┼██┼┼┼┼┼┼┼██┼██▄▄▄`);
        console.log(`                                           ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼`);
        console.log(`                                           ███▀▀▀███┼▀███┼┼██▀┼██▀▀▀┼██▀▀▀▀██▄┼`);
        console.log(`                                           ██┼┼┼┼┼██┼┼┼██┼┼██┼┼██┼┼┼┼██┼┼┼┼┼██┼`);
        console.log(`                                           ██┼┼┼┼┼██┼┼┼██┼┼██┼┼██▀▀▀┼██▄▄▄▄▄▀▀┼`);
        console.log(`                                           ██┼┼┼┼┼██┼┼┼██┼┼█▀┼┼██┼┼┼┼██┼┼┼┼┼██┼`);
        console.log(`                                           ███▄▄▄███┼┼┼─▀█▀┼┼─┼██▄▄▄┼██┼┼┼┼┼██▄`);
        console.log(`                                           ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼`);
        console.log();                
        console.log(`£-----------------------------------------------------------¥¥-----------------------------------------------------------£`);
        los = 1;
    }
     
}
        

        