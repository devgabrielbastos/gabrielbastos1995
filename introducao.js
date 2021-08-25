function begin() {
    alert ('???: Ei... Você não parece um de fora. Qual é o seu nome?')

    document.body.style.backgroundImage="url('./interior.jpg')"
    setTimeout(() => {
        while (true) {
            var personagem = prompt("Escolha seu personagem:\n\n1- Richard\n2- Jane\n3- Michael");
            if (personagem == "1") {
                alert("Richard: Quê? Onde eu estou? Quem é você?");
                return Richard1()
            }
            else if (personagem == "2") {
                alert("Que-... O que é isso? Que lugar é esse?");
                return Jane1()
            }
            else if (personagem == "3") {
                alert("Michael: Como é? Que lugar é esse?");
                return Michael1()
            }
            else {
                alert("resposta inválida!!")
            }
        }
        
    }, 1000);
   
}

function Richard1() {
    alert("???: Calma, você está seguro aqui. Eu me chamo Anne Costanari, essa é a minha casa. Eu estou aqui há bastante tempo, então tomei ela como minha casa. Você não pode sair daqui, tá bom? provavelmente está dormindo.")

    alert("Richard: Eu acho... pera aí, você tem razão, eu estou dormindo. Mas por quê eu não posso sair?")

    alert("Anne: Lá fora é bastante perigoso. Sabe, essa casa ela é mal assombrada e isso é levado ao pé da letra. Eu não sei o porquê mas os fantasmas não entram aqui.")

    alert("Richard: Então, se eu sair eu provavelmente acordo, certo? É isso que vou fazer!")

    alert("Anne: Nããã-")
    
    while (true) {
        var richardEscolha1 = prompt("Deseja sair da casa?\n1- Sim\n2- Não")
        
        if (richardEscolha1 == "1") {
            return gameOver()
        }
        else if (richardEscolha1 == "2") {
            alert("Richard: Pensando bem... é melhor eu ficar. É só um sonho, certo? E como você veio parar aqui?")
            return Richard2()
        }

    }

}

function Richard2() {

    alert("Anne: Isso não é bem um sonho. Eu estou aqui há bastante tempo, o suficiente para eu acreditar que, no mundo lá fora, eu estou em coma.")

    alert("Richard: Calma, eu estou confuso. O que é isso se não um sonho?")

    alert("Anne: É um espaço entre o sonho e a realidade, não sei bem explicar. Você não é o primeiro a aparecer aqui, inclusive o Malaquias está na cozinha.")

    alert("Richard: Então tem outra pessoa aqui contigo? E por quê ele não vem pra cá ao invés de ficar sozinho?")

    alert("Anne: Não há perigo em ficar sozinho dentro dessa casa. Ah, sei que parece engraçado, mas o Malaquias está lavando os ovos que tinha na geladeira. Estranho, não?")

    while (true) {
        var richardEscolha2 = prompt("O que deseja responder?\n1- Lavando... os ovos???\n2- Ah não, vocês são malucos, isso é realmente só um sonho. Eu vou embora.")
        
        if (richardEscolha2 == "1") {
            alert("Richard: Lavando... os ovos??? Que doideira, achei que já tivesse visto de tudo nessa vida.")
            return Richard3()
        }
        else if (richardEscolha2 == "2") {
            return GameOver()
        }

    }
    
}

function Richard3() {
    alert("Anne: Acho que daqui a pouco você vai acordar. Ninguém fica muito tempo aqui se não eu e o Malaquias.")

    alert("Richard: Ele também está em coma?")

    alert("Anne: Não, mas ele sempre volta pra cá.")

    alert("Richard: Você já tentou sair daqui?")

    alert("Anne: Não, mas eu vi muit-...........")

    alert("Richard: O quê? Não estou mais te ouvindo.")

    alert("Anne: Voc-......acordan-....")

    alert("As paredes da casa começam a mover, a Anne começa a desaparecer e você consegue ouvir barulhos vindo do lado de fora.")

    while (true) {
        var richardEscolha3 = prompt("O que deseja fazer?\n1- Fugir da casa\n2- Aguardar")
        
        if (richardEscolha3 == "2") {
            return Endgame()
        }
        else if (richardEscolha3 == "1") {
            return GameOver()
        }

    }

}





function Jane1() {
    alert("???: Calma, você está seguro aqui. Eu me chamo Anne Costanari, essa é a minha casa. Eu estou aqui há bastante tempo, então tomei ela como minha casa. Você não pode sair daqui, tá bom? provavelmente está dormindo.")

    alert("Jane: Mas pera lá, eu estava descansando em meu sofá, como vim parar aqui? Por quê não posso sair?")

    alert("Anne: Lá fora é bastante perigoso. Sabe, essa casa ela é mal assombrada e isso é levado ao pé da letra. Eu não sei o porquê mas os fantasmas não entram aqui.")

    alert("Jane: Ah tá, claro! Hahahaha isso não existe! Bom, vou embora.")

    alert("Anne: Nããã-")
    
    while (true) {
        var janeEscolha1 = prompt("Deseja sair da casa?\n1- Sim\n2- Não")
        
        if (janeEscolha1 == "1") {
            return gameOver()
        }
        else if (janeEscolha1 == "2") {
            alert("Jane: *vê algo se movendo do lado de fora* AAAAAAH O QUE É AQUILO? ISSO É UM PESADELO?!")
            return Jane2()
        }

    }

}

function Jane2() {

    alert("Anne: Isso não é bem um sonho. Eu estou aqui há bastante tempo, o suficiente para eu acreditar que, no mundo lá fora, eu estou em coma.")

    alert("Jane: Como assim? Se isso não é um sonho, o que é então?")

    alert("Anne: É um espaço entre o sonho e a realidade, não sei bem explicar. Você não é o primeiro a aparecer aqui, inclusive o Malaquias está na cozinha.")

    alert("Jane: Malaquias? Que nome engraçado. Por quê ele não vem pra cá?")

    alert("Anne: Ah, sei que parece engraçado, mas o Malaquias prefere ficar na cozinha. Ele está lavando os ovos que tinha na geladeira. Estranho, não?")

    while (true) {
        var janeEscolha2 = prompt("O que deseja responder?\n1- COMO ASSIM LAVANDO OVOS? QUEM FAZ ISSO??\n2- Lavar ovos? Tá bom, chega, isso é um sonho e eu vou embora daqui.")
        
        if (janeEscolha2 == "1") {
            alert("Jane: COMO ASSIM LAVANDO OVOS? QUEM FAZ ISSO??")
            return Jane3()
        }
        else if (janeEscolha2 == "2") {
            return GameOver()
        }

    }
    
}

function Jane3() {
    alert("Anne: Acho que daqui a pouco você vai acordar. Ninguém fica muito tempo aqui se não eu e o Malaquias.")

    alert("Jane: Ele também... está em coma?")

    alert("Anne: Não, mas ele sempre volta pra cá.")

    alert("Jane: Ah então é uma visita frequente. Entendi. E você, já tentou sair daqui?")

    alert("Anne: Não, mas eu vi muit-...........")

    alert("Jane: O quê? O que está acontecendo??")

    alert("Anne: Voc-......acordan-....")

    alert("As paredes da casa começam a mover, a Anne começa a desaparecer e você consegue ouvir barulhos vindo do lado de fora.")

    while (true) {
        var janeEscolha2 = prompt("O que deseja fazer?\n1- Fugir da casa\n2- Aguardar")
        
        if (janeEscolha2 == "2") {
            return Endgame()
        }
        else if (janeEscolha2 == "1") {
            return GameOver()
        }

    }

}





function Michael1() {
    alert("???: Calma, você está seguro aqui. Eu me chamo Anne Costanari, essa é a minha casa. Eu estou aqui há bastante tempo, então tomei ela como minha casa. Você não pode sair daqui, tá bom? provavelmente está dormindo.")

    alert("Michael: Ué, cadê todo mundo? Cadê o Cleitin? Ô minha senhora, me desculpe mas eu preciso ir embora, preciso voltar pro meu rolê.")

    alert("Anne: Não vá! Lá fora é bastante perigoso. Sabe, essa casa ela é mal assombrada, mas leve isso ao pé da letra. Eu não sei o porquê mas os fantasmas não entram aqui.")

    alert("Michael: Ah pronto, acho que você também estava na festa né. Fantasmas, minha senhora? Olha, vamo embora, vamo voltar pra casa do Cleitin!")
    
    while (true) {
        var michaelEscolha1 = prompt("Deseja sair da casa?\n1- Sim\n2- Não")
        
        if (michaelEscolha1 == "1") {
            return gameOver()
        }
        else if (michaelEscolha1 == "2") {
            alert("Michael: *vê uma sobra do lado de fora com olhos brancos olhando para ele* Ér, então, acho melhor a gente sair pela porta dos fundos heim.")
            return Michael2()
        }

    }

}

function Michael2() {

    alert("Anne: Não podemos sair. Isso é um sonho, bom, não exatamente. Eu estou aqui há bastante tempo, o suficiente para eu acreditar que, no mundo lá fora, eu estou em coma. E você, pelo cheiro, estava bebendo...")

    alert("Michael: Ih, qual foi, eu trabalhei o dia todo, bebi só um pouco, para... mas então, o que é isso se não um sonho?")

    alert("Anne: É um espaço entre o sonho e a realidade, não sei bem explicar. Você não é o primeiro a aparecer aqui, inclusive o Malaquias está na cozinha.")

    alert("Michael: Caraca, MA-LA-QUI-AS??? Sério que você mora com alguém que tem esse nome? ")

    alert("Anne: É, é um nome engraçado, o mais engraçado ainda é que ele tem o hábito de todos os dias lavar os ovos que estão na geladeira. Estranho, não?")

    while (true) {
        var michaelEscolha2 = prompt("O que deseja responder?\n1- MALAQUIAS LAVANDO OS OVOS. O MEME VEM PRONTO!\n2- Ah não, minha senhora kkk dá não, vou embora pela janela mesmo, fui!")
        
        if (michaelEscolha2 == "1") {
            alert("Michael: MALAQUIAS LAVANDO OS OVOS. O MEME VEM PRONTO! Minha nossa, não lembro de ter bebido tanto a ponto de alucinar isso.")
            return Michael3()
        }
        else if (richardEscolha2 == "2") {
            return GameOver()
        }

    }
    
}

function Michael3() {
    alert("Anne: Não se preocupa, daqui a pouco você vai acordar. Ninguém fica muito tempo aqui se não eu e o Malaquias.")

    alert("Michael: Ele também está em coma?")

    alert("Anne: Não, mas ele sempre volta pra cá.")

    alert("Michael: Então ele sempre cola aqui nesse rolê bizarro? Credo. Já tentou dar o fora daqui?")

    alert("Anne: Não, mas eu vi muit-...........")

    alert("Michael: É o quê? Ih... tá tudo... rodando...")

    alert("Anne: Voc-......acordan-....")

    alert("As paredes da casa começam a mover, a Anne começa a desaparecer e você consegue ouvir barulhos vindo do lado de fora.")

    while (true) {
        var michaelEscolha3 = prompt("O que deseja fazer?\n1- Sair de casa e enfrentar aquela sombra no soco!\n2- Aguardar")
        
        if (michaelEscolha3 == "2") {
            return Endgame()
        }
        else if (michaelEscolha3 == "1") {
            return GameOver()
        }

    }

}

function GameOver() {
    alert("GAME OVER: Você não pode sair da casa.")
}

function Endgame() {

    alert("...")

    alert("Você despertou do sonho!") 

    alert("...")

    alert("ou será que ainda está preso em um?")
    
    alert("Game over!\n\nVocê completou o jogo!")
}