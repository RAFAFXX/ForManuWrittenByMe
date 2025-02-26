$(document).ready(function() {
    var envelope = $('#envelope');
    var letterContent = $(".letter-content");
    var heartsContainer = $(".hearts");
    var hearts = $('.heart');

        // Lista original de mensagens
        var mensagensOriginais = [
            "Eu escolheria você em mil vidas, em cem mundos diferentes e até com os olhos vendados. No final das contas, sempre será você.",
    "Eu acho incrível esse teu jeito de ser, como você faz as coisas do nada. Só não corta o cabelo!",
    "Seus olhos são os mais lindos de todo o universo.",
    "Amo a sua voz, o teu sotaque. Acho tão bonito quando você fala. Você deveria falar mais comigo.",
    "Amo sua risada. E isso porque escutei pouco, mas amaria poder escutar mais.",
    
    "Você é tão linda do jeito que você é. Eu não mudaria nada em você.",
    "Você não deveria seguir padrões. Você é mais linda que todas elas. Você é única.",
    "Você é muito divertida, me deixa alegre e faz meus dias mais felizes só de estar neles.",
    "Amo passar o tempo contigo. Tudo fica tão bom quando estou com você.",
    "Amo assistir qualquer coisa contigo. Tudo fica melhor só por ter você ao meu lado.",

    "Você é tão fofa, Manu.",
    "Amo quando você dorme comigo. É bom saber que tem algo e a melhor parte é saber que você está ali.",
    "Acho fofo quando você dorme do nada e acorda se desculpando, falando 'não me odeie'. Mas é impossível te odiar, já que te amo tanto.",
    "É muito fofa quando você acorda do nada e vê que escreveu algo dormindo e fala que está louca. Me sinto privilegiado, porque você sempre me escolhe.",
    "Você tem um ótimo gosto para tudo: músicas, filmes, animes... Acho incrível.",

    "Você é muito inteligente e esforçada.",
    "Você é a melhor coisa que aconteceu na minha vida.",
    "Eu amo conversar com você.",
    "Eu amo brincar com você.",
    "Eu amo rir com você.",

    "Eu amo estar com você.",
    "Eu amo jogar com você.",
    "Eu amo muito você.",
    "Eu amo tudo em você.",
    "Independente do que aconteça, eu ainda te amo. Meu amor por você é incondicional.",

    "Eu não trocaria meu amor por você por nada nesse mundo.",
    "Eu amo nossas conversas profundas e constantes, onde podemos falar tudo um para o outro.",
    "Eu te amo porque você existe, porque você é exatamente como você é.",
    "Não consigo parar de pensar em você. Você está na minha mente o tempo todo.",
    "Eu escuto seus áudios todos os dias. Sua voz é como música para o meu coração, me acalma, me traz paz. É a voz mais linda.",

    "Eu sempre releio suas demonstrações de afeto. Sei que é difícil para você, e isso torna tudo ainda mais lindo.",
    "Você é a pessoa com quem eu nunca quero parar de criar memórias.",
    "Nossa jornada pode não ser perfeita, mas é a nossa.",
    "Eu vou ficar ao seu lado até o fim, não importa o quão complicadas as coisas fiquem entre nós.",
    "Espero que você nunca se esqueça de se valorizar, pois você é mais valiosa do que imagina.",

    "Sei que sobreviver todos os dias pode parecer pesado, mas, por favor, seja gentil e não seja dura consigo mesma.",
    "Aprenda a descansar e não deixe que pequenas coisas a pressionem. Você é capaz de fazer tudo que quiser.",
    "Eu sempre serei seu maior apoiador e estarei aqui para você a qualquer momento.",,  
];
    
        // Cópia da lista para controle de repetição
        let mensagensRestantes = [...mensagensOriginais];
    
        function escolherMensagem() {
            if (mensagensRestantes.length === 0) {
                mensagensRestantes = [...mensagensOriginais]; // Reinicia a lista quando todas forem lidas
            }
    
            const index = Math.floor(Math.random() * mensagensRestantes.length);
            return mensagensRestantes.splice(index, 1)[0];
        }
    
        $("#open").click(function() {
            envelope.addClass("open").removeClass("close");
    
            // Exibe uma mensagem única sem repetição
            letterContent.text(escolherMensagem());
    
            // Reinicia os corações para a animação
            hearts.each(function(index) {
                $(this).css({
                    "opacity": "0",
                    "bottom": "0px",
                    "animation": "none"
                });
            });
    
            setTimeout(() => {
                hearts.each(function(index) {
                    $(this).css({
                        "opacity": "1",
                        "bottom": "30px",
                        "animation": `floatUp ${2 + index}s ease-in-out forwards infinite`
                    });
                });
            }, 800);
        });
    
        $("#close").click(function() {
            envelope.addClass("close").removeClass("open");
    
            // Esconde os corações ao fechar o envelope
            hearts.each(function() {
                $(this).css({
                    "opacity": "0",
                    "bottom": "0px",
                    "animation": "none"
                });
            });
    
            // Limpa o texto da carta ao fechar
            setTimeout(() => {
                letterContent.text("");
            }, 500);
        });
    
        // **Correção do movimento do envelope para mantê-lo no centro**
        setInterval(() => {
            envelope.animate({ marginTop: "-5px" }, 1000).animate({ marginTop: "5px" }, 1000);
        }, 2000);
    });
    
