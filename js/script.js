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

  // =====================================================
  // BERSERK — Kentaro Miura
  // =====================================================

  {
    text: "Mesmo quando o mundo parece determinado a nos esmagar, ainda existe uma escolha: continuar caminhando.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    text: "Há batalhas que não existem para serem vencidas, mas para provar que ainda estamos vivos.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    text: "A escuridão não desaparece quando fechamos os olhos; aprendemos a atravessá-la com eles abertos.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    text: "Algumas pessoas carregam suas cicatrizes como lembranças; outras, como armas.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    text: "O destino pode empurrar um homem para o abismo, mas não pode decidir se ele continuará lutando.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    text: "Existem feridas que não pedem cura. Pedem apenas que aprendamos a viver depois delas.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    text: "A solidão pesa mais quando lembramos daquilo que já tivemos.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    text: "Talvez sobreviver seja, às vezes, a forma mais silenciosa de desafiar o destino.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    text: "Quanto mais escura a noite, mais brutal se torna a necessidade de encontrar um motivo para continuar.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    text: "Um homem pode perder quase tudo e ainda conservar aquilo que o impede de se tornar vazio.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  // =====================================================
  // VAGABOND — Takehiko Inoue
  // =====================================================

  {
    text: "Aquele que deseja vencer todos os outros ainda não aprendeu o que significa vencer a si mesmo.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    text: "A espada revela o corpo do adversário; a vida revela o homem que a segura.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    text: "Quanto mais alto alguém deseja chegar, mais precisa aprender a caminhar sozinho.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    text: "A verdadeira força começa quando a necessidade de provar força termina.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    text: "O homem que conhece apenas a vitória jamais compreenderá completamente a própria força.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    text: "Existe uma distância enorme entre empunhar uma espada e compreender por que ela foi desembainhada.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    text: "A natureza não disputa com ninguém. Ela simplesmente permanece sendo aquilo que é.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    text: "Ser invencível talvez seja menos importante do que deixar de precisar ser.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    text: "Quanto mais se observa o mundo, menos necessário parece dizer que se é forte.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    text: "O caminho se torna mais claro quando deixamos de caminhar apenas para chegar ao fim.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  // =====================================================
  // DIÁRIO DE UMA APOTECÁRIA
  // Natsu Hyuuga / Nekokurage
  // =====================================================

  {
    text: "Uma pequena alteração em um detalhe pode esconder uma verdade muito maior.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    text: "Curiosidade é perigosa quando ninguém consegue convencer você a deixá-la de lado.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    text: "Nem todo veneno precisa matar; alguns apenas precisam ser compreendidos.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    text: "Observar aquilo que os outros ignoram costuma ser o primeiro passo para descobrir a verdade.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    text: "Conhecimento é uma ferramenta estranha: quanto mais aprendemos, mais percebemos o quanto desconhecemos.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    text: "Em um palácio cheio de aparências, a verdade raramente entra pela porta da frente.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    text: "Uma pessoa inteligente sabe quando perguntar. Uma pessoa cuidadosa sabe quando não perguntar.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    text: "Nem tudo que parece absurdo deixa de ser possível.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    text: "A medicina pode explicar o corpo, mas nem sempre consegue explicar as escolhas de quem vive dentro dele.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    text: "Às vezes, resolver um mistério significa simplesmente prestar atenção ao que ninguém considerou importante.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  // =====================================================
  // SHE IS BEAUTIFUL
  // Jun Esaka / Takahide Totsuno
  // =====================================================

  {
    text: "Uma lembrança pode ser verdadeira mesmo quando aquilo que lembramos já não existe.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    text: "O que somos quando todas as nossas memórias começam a desaparecer?",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    text: "Às vezes, conhecer alguém novamente é descobrir que nunca deixamos de conhecê-la.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    text: "Uma pessoa pode desaparecer da memória sem desaparecer completamente daquilo que somos.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    text: "A identidade talvez seja feita tanto das lembranças quanto das coisas que esquecemos.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    text: "Se todas as memórias fossem retiradas de nós, ainda reconheceríamos quem amamos?",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    text: "O medo de esquecer alguém pode ser tão poderoso quanto a própria lembrança.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    text: "Existem pessoas que permanecem em nós mesmo quando já não conseguimos lembrar seus nomes.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    text: "Uma memória perdida não deixa necessariamente um espaço vazio; às vezes deixa uma ausência que sentimos sem compreender.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    text: "Talvez lembrar seja apenas outra maneira de dizer que alguém ainda possui um lugar dentro de nós.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  // =====================================================
  // SAMURAI X / RUROUNI KENSHIN
  // Nobuhiro Watsuki
  // =====================================================

  {
    text: "Uma espada pode terminar uma vida em um instante, mas não pode devolver aquilo que foi perdido.",
    work: "Samurai X",
    author: "Nobuhiro Watsuki",
  },

  {
    text: "A verdadeira força talvez seja conseguir proteger sem precisar destruir.",
    work: "Samurai X",
    author: "Nobuhiro Watsuki",
  },

  {
    text: "O passado pode acompanhar nossos passos, mas não precisa escolher o destino deles.",
    work: "Samurai X",
    author: "Nobuhiro Watsuki",
  },

  {
    text: "Quem conhece o peso de uma espada também deveria conhecer o peso de uma vida.",
    work: "Samurai X",
    author: "Nobuhiro Watsuki",
  },

  {
    text: "Uma pessoa não pode apagar seus crimes, mas pode decidir o que fará depois deles.",
    work: "Samurai X",
    author: "Nobuhiro Watsuki",
  },

  {
    text: "A paz não significa esquecer a guerra; significa escolher não repetir seus motivos.",
    work: "Samurai X",
    author: "Nobuhiro Watsuki",
  },

  {
    text: "O homem que passou a vida tirando vidas precisa aprender uma nova maneira de proteger as pessoas.",
    work: "Samurai X",
    author: "Nobuhiro Watsuki",
  },

  {
    text: "Não existe redenção em mudar o passado. Ela começa quando mudamos aquilo que fazemos com o presente.",
    work: "Samurai X",
    author: "Nobuhiro Watsuki",
  },

  {
    text: "Uma lâmina pode ser forte, mas a decisão de não usá-la pode exigir ainda mais força.",
    work: "Samurai X",
    author: "Nobuhiro Watsuki",
  },

  {
    text: "Depois de uma vida inteira seguindo o caminho da espada, encontrar outro caminho pode ser a batalha mais difícil.",
    work: "Samurai X",
    author: "Nobuhiro Watsuki",
  },

  // =====================================================
  // MISTURA — TEMAS SEINEN / MANGÁ
  // =====================================================

  {
    text: "Não é necessário compreender completamente o caminho para dar o próximo passo.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    text: "Há perguntas que valem mais do que respostas encontradas depressa demais.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    text: "A memória pode mudar de forma, mas aquilo que sentimos por alguém nem sempre desaparece com ela.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    text: "A sobrevivência não é uma vitória pequena quando o mundo inteiro parece desejar nossa queda.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    text: "Um homem pode passar a vida procurando um inimigo e descobrir tarde demais que estava procurando a si mesmo.",
    work: "Vagabond",
    author: "Takehiko Inoue",
  },

  {
    text: "O veneno mais perigoso pode ser aquele que ninguém percebe porque se parece com algo inofensivo.",
    work: "Diário de uma Apotecária",
    author: "Natsu Hyuuga",
  },

  {
    text: "Quando as lembranças desaparecem, talvez sejam as relações que revelem quem realmente fomos.",
    work: "She Is Beautiful",
    author: "Jun Esaka",
  },

  {
    text: "Carregar uma culpa não significa necessariamente permanecer acorrentado a ela para sempre.",
    work: "Samurai X",
    author: "Nobuhiro Watsuki",
  },

  {
    text: "A diferença entre desistir e descansar às vezes é apenas o tempo necessário para recuperar forças.",
    work: "Berserk",
    author: "Kentaro Miura",
  },

  {
    text: "Aquele que olha apenas para o adversário jamais perceberá tudo aquilo que existe ao redor da batalha.",
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
