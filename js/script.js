/* =====================================================
           BANCO DE FRASES

           Textos originais inspirados nos temas das obras.
           Não são transcrições de diálogos dos mangás.
        ===================================================== */

const quotes = [
  {
    text: "A força que procuramos fora de nós muitas vezes começa com a decisão de permanecer de pé.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    text: "Caminhar sozinho não significa necessariamente estar perdido.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    text: "O caminho de um guerreiro também é feito das derrotas que ele aprende a atravessar.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    text: "Nem toda vitória nasce da força; algumas começam quando alguém se recusa a desistir.",
    work: "Vinland Saga",
    author: "Makoto Yukimura",
  },

  {
    text: "Um mundo sem violência parece impossível até que alguém decida tentar construí-lo.",
    work: "Vinland Saga",
    author: "Makoto Yukimura",
  },

  {
    text: "O passado não desaparece. Aprendemos apenas a caminhar carregando seu peso.",
    work: "Monster",
    author: "Naoki Urasawa",
  },

  {
    text: "Às vezes, o monstro mais difícil de reconhecer é aquele que nasceu dentro de nós.",
    work: "Monster",
    author: "Naoki Urasawa",
  },

  {
    text: "A solidão pode ser uma prisão, mas também pode revelar aquilo que ninguém consegue enxergar por você.",
    work: "Homunculus",
    author: "Hideo Yamamoto",
  },

  {
    text: "Conhecer a própria escuridão é uma forma silenciosa de começar a compreendê-la.",
    work: "Homunculus",
    author: "Hideo Yamamoto",
  },

  {
    text: "O mundo continua enorme mesmo quando tudo ao nosso redor parece ter diminuído.",
    work: "One Piece",
    author: "Eiichiro Oda",
  },

  {
    text: "Sonhos verdadeiros não precisam ser compreendidos por quem observa de fora.",
    work: "One Piece",
    author: "Eiichiro Oda",
  },

  {
    text: "A liberdade começa quando deixamos de aceitar que outra pessoa escolha o tamanho dos nossos sonhos.",
    work: "One Piece",
    author: "Eiichiro Oda",
  },

  {
    text: "Aqueles que continuam avançando acabam descobrindo caminhos que antes pareciam inexistentes.",
    work: "Naruto",
    author: "Masashi Kishimoto",
  },

  {
    text: "Ser reconhecido pelos outros pode ser importante, mas reconhecer a si mesmo vem primeiro.",
    work: "Naruto",
    author: "Masashi Kishimoto",
  },

  {
    text: "Uma cicatriz não precisa ser uma sentença; pode simplesmente ser a marca de algo que foi sobrevivido.",
    work: "Bleach",
    author: "Tite Kubo",
  },

  {
    text: "Há coisas que só conseguimos proteger depois de descobrir por que elas importam.",
    work: "Bleach",
    author: "Tite Kubo",
  },

  {
    text: "O medo pode permanecer mesmo quando a coragem já decidiu seguir adiante.",
    work: "Jujutsu Kaisen",
    author: "Gege Akutami",
  },

  {
    text: "Nem toda batalha precisa ser vencida para que alguém saia diferente dela.",
    work: "Jujutsu Kaisen",
    author: "Gege Akutami",
  },

  {
    text: "O preço de uma escolha não desaparece apenas porque escolhemos esquecê-la.",
    work: "Attack on Titan",
    author: "Hajime Isayama",
  },

  {
    text: "Liberdade sem escolha é apenas outra forma de prisão.",
    work: "Attack on Titan",
    author: "Hajime Isayama",
  },

  {
    text: "O mundo parece menor quando passamos a enxergar apenas aquilo que queremos proteger.",
    work: "Attack on Titan",
    author: "Hajime Isayama",
  },

  {
    text: "Mesmo uma existência aparentemente insignificante pode alterar completamente o destino de alguém.",
    work: "Death Note",
    author: "Tsugumi Ohba",
  },

  {
    text: "Poder não transforma necessariamente uma pessoa; às vezes apenas revela aquilo que já estava escondido.",
    work: "Death Note",
    author: "Tsugumi Ohba",
  },

  {
    text: "A inteligência também pode ser uma arma, principalmente quando usada sem limites.",
    work: "Death Note",
    author: "Tsugumi Ohba",
  },

  {
    text: "A humanidade é capaz de criar beleza mesmo em lugares onde ninguém esperava encontrá-la.",
    work: "Fullmetal Alchemist",
    author: "Hiromu Arakawa",
  },

  {
    text: "Toda escolha possui uma consequência, mesmo quando não conseguimos enxergá-la imediatamente.",
    work: "Fullmetal Alchemist",
    author: "Hiromu Arakawa",
  },

  {
    text: "Crescer também significa descobrir que algumas perdas não podem ser consertadas.",
    work: "Fullmetal Alchemist",
    author: "Hiromu Arakawa",
  },

  {
    text: "O talento pode abrir uma porta, mas somente a persistência mantém alguém caminhando por ela.",
    work: "Bakuman.",
    author: "Tsugumi Ohba & Takeshi Obata",
  },

  {
    text: "Criar alguma coisa é aceitar que aquilo poderá ser julgado por olhos que nunca conheceram seu processo.",
    work: "Bakuman.",
    author: "Tsugumi Ohba & Takeshi Obata",
  },

  {
    text: "A verdadeira criação começa quando uma ideia deixa de ser apenas uma possibilidade.",
    work: "Bakuman.",
    author: "Tsugumi Ohba & Takeshi Obata",
  },

  {
    text: "Um sonho se torna diferente quando alguém finalmente decide transformá-lo em trabalho.",
    work: "Blue Period",
    author: "Tsubasa Yamaguchi",
  },

  {
    text: "A arte pode ser uma maneira de descobrir aquilo que as palavras não conseguem explicar.",
    work: "Blue Period",
    author: "Tsubasa Yamaguchi",
  },

  {
    text: "Não existe uma única maneira correta de enxergar aquilo que chamamos de beleza.",
    work: "Blue Period",
    author: "Tsubasa Yamaguchi",
  },

  {
    text: "O silêncio de uma paisagem pode dizer mais sobre alguém do que uma longa conversa.",
    work: "Mushishi",
    author: "Yuki Urushibara",
  },

  {
    text: "Nem tudo que existe precisa ser compreendido para merecer respeito.",
    work: "Mushishi",
    author: "Yuki Urushibara",
  },

  {
    text: "A natureza não precisa de explicações humanas para continuar seguindo seu próprio curso.",
    work: "Mushishi",
    author: "Yuki Urushibara",
  },

  {
    text: "A distância entre duas pessoas também pode ser medida por aquilo que elas nunca conseguem dizer.",
    work: "Nana",
    author: "Ai Yazawa",
  },

  {
    text: "Algumas pessoas entram em nossas vidas como acontecimentos que jamais aprendemos a esquecer.",
    work: "Nana",
    author: "Ai Yazawa",
  },

  {
    text: "Amar alguém não significa possuir o caminho que essa pessoa escolheu.",
    work: "Nana",
    author: "Ai Yazawa",
  },

  {
    text: "A cidade muda todos os dias, mas certas lembranças permanecem exatamente onde as deixamos.",
    work: "Solanin",
    author: "Inio Asano",
  },

  {
    text: "Existem momentos em que crescer parece apenas aprender a conviver com aquilo que não podemos mudar.",
    work: "Solanin",
    author: "Inio Asano",
  },

  {
    text: "A juventude termina muito antes de percebermos que ela estava passando.",
    work: "Solanin",
    author: "Inio Asano",
  },

  {
    text: "Um futuro diferente começa com alguém suficientemente inconformado com o presente.",
    work: "Pluto",
    author: "Naoki Urasawa & Takashi Nagasaki",
  },

  {
    text: "Aquilo que chamamos de humanidade pode existir mesmo onde não esperamos encontrá-la.",
    work: "Pluto",
    author: "Naoki Urasawa & Takashi Nagasaki",
  },

  {
    text: "O progresso não significa necessariamente que aprendemos a ser melhores.",
    work: "Pluto",
    author: "Naoki Urasawa & Takashi Nagasaki",
  },

  {
    text: "Há mundos inteiros escondidos dentro de uma única pessoa.",
    work: "Land of the Lustrous",
    author: "Haruko Ichikawa",
  },

  {
    text: "Mudar pode significar perder uma parte de quem éramos para descobrir quem podemos ser.",
    work: "Land of the Lustrous",
    author: "Haruko Ichikawa",
  },

  {
    text: "A beleza também pode existir naquilo que está quebrado.",
    work: "Land of the Lustrous",
    author: "Haruko Ichikawa",
  },

  {
    text: "Aqueles que vivem entre ruínas aprendem a encontrar significado onde outros enxergam apenas vazio.",
    work: "BLAME!",
    author: "Tsutomu Nihei",
  },

  {
    text: "Em um mundo gigantesco, continuar avançando já pode ser uma forma de resistência.",
    work: "BLAME!",
    author: "Tsutomu Nihei",
  },

  {
    text: "O silêncio de uma cidade abandonada também pode contar uma história.",
    work: "BLAME!",
    author: "Tsutomu Nihei",
  },

  {
    text: "A amizade verdadeira não elimina o perigo; apenas faz com que alguém não precise enfrentá-lo sozinho.",
    work: "Hunter × Hunter",
    author: "Yoshihiro Togashi",
  },

  {
    text: "Conhecer o próprio limite é apenas o começo de descobrir se ele realmente existe.",
    work: "Hunter × Hunter",
    author: "Yoshihiro Togashi",
  },

  {
    text: "Curiosidade é uma força perigosa quando não aceita permanecer diante de uma porta fechada.",
    work: "Hunter × Hunter",
    author: "Yoshihiro Togashi",
  },

  {
    text: "Aquilo que parece simples para uma pessoa pode representar uma batalha inteira para outra.",
    work: "My Hero Academia",
    author: "Kohei Horikoshi",
  },

  {
    text: "Ser forte também significa reconhecer quando precisamos de alguém ao nosso lado.",
    work: "My Hero Academia",
    author: "Kohei Horikoshi",
  },

  {
    text: "Uma pessoa pode carregar esperança mesmo quando ainda não sabe como transformá-la em ação.",
    work: "My Hero Academia",
    author: "Kohei Horikoshi",
  },

  {
    text: "A solidão se torna diferente quando descobrimos alguém disposto a permanecer.",
    work: "Goodnight Punpun",
    author: "Inio Asano",
  },

  {
    text: "Nem sempre conseguimos voltar ao lugar onde éramos felizes; às vezes precisamos aprender a seguir.",
    work: "Goodnight Punpun",
    author: "Inio Asano",
  },

  {
    text: "Algumas perguntas permanecem conosco porque suas respostas nunca foram simples.",
    work: "Goodnight Punpun",
    author: "Inio Asano",
  },

  {
    text: "A espada pode cortar um inimigo, mas não pode decidir o que existe dentro daquele que a empunha.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },
];

/* =====================================================
           ELEMENTOS
        ===================================================== */

const quoteBox = document.getElementById("quote");

const quoteText = document.getElementById("quote-text");

const quoteWork = document.getElementById("quote-work");

const quoteAuthor = document.getElementById("quote-author");

const counter = document.getElementById("counter");

const newQuoteButton = document.getElementById("new-quote");

const copyButton = document.getElementById("copy-button");

/* =====================================================
           ESTADO
        ===================================================== */

let currentIndex = -1;

let shownCount = 0;

/* =====================================================
           SORTEIO

           Garante que a frase atual nunca seja
           imediatamente repetida.
        ===================================================== */

function getRandomIndex() {
  let index;

  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === currentIndex && quotes.length > 1);

  return index;
}

/* =====================================================
           NOVA FRASE
        ===================================================== */

function showRandomQuote() {
  const newIndex = getRandomIndex();

  const selected = quotes[newIndex];

  /* Remove a animação atual */

  quoteBox.classList.remove("visible");

  /*
                Aguarda a saída da frase anterior
                antes de inserir a nova.
            */

  setTimeout(() => {
    currentIndex = newIndex;

    shownCount++;

    quoteText.textContent = selected.text;

    quoteWork.textContent = selected.work;

    quoteAuthor.textContent = selected.author;

    counter.textContent = `${shownCount} ${
      shownCount === 1 ? "fragmento revelado" : "fragmentos revelados"
    }`;

    quoteBox.classList.add("visible");
  }, 250);
}

/* =====================================================
           COPIAR
        ===================================================== */

async function copyQuote() {
  if (currentIndex === -1) {
    return;
  }

  const selected = quotes[currentIndex];

  const text =
    `"${selected.text}"\n\n` + `${selected.work} — ${selected.author}`;

  try {
    await navigator.clipboard.writeText(text);

    const original = copyButton.textContent;

    copyButton.textContent = "Copiado";

    setTimeout(() => {
      copyButton.textContent = original;
    }, 1200);
  } catch (error) {
    console.error("Não foi possível copiar:", error);
  }
}

/* =====================================================
           EVENTOS
        ===================================================== */

newQuoteButton.addEventListener("click", showRandomQuote);

copyButton.addEventListener("click", copyQuote);

/* =====================================================
           TECLADO

           Espaço = nova frase
           C = copiar
        ===================================================== */

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && event.target.tagName !== "BUTTON") {
    event.preventDefault();

    showRandomQuote();
  }

  if (event.key.toLowerCase() === "c" && currentIndex !== -1) {
    copyQuote();
  }
});
