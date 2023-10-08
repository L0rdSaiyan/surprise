

const makeVisible = () =>{


let content = document.getElementsByClassName("content")[0]
const body = document.body
content.style.display = 'none'
body.style.backgroundImage = "url('background.png')"


// Cria o elemento <div> com a classe "content-after"
const divContentAfter = document.createElement("div");
divContentAfter.classList.add("content-after");

// Cria o elemento <p> dentro do <div>
const paragraph = document.createElement("p");
const textoParagrafo = `
E aí,  Clemilton!

Hoje é o seu dia! Feliz aniversário! 🎉

Quero aproveitar essa oportunidade para te dizer que você é o melhor professor que já tive, e não digo isso só porque é seu aniversário. É a mais pura verdade! 😄

Lembra daquelas aulas que eram tão empolgantes que eu esquecia que estava na escola? Isso era tudo por sua causa. Sua paixão por ensinar é contagiante, e a forma como você torna até os tópicos mais chatos interessantes é incrível.

Além disso, sua paciência e disposição para ajudar, mesmo quando a matéria parecia impossível, fez a gente pegar gosto pela programação, fazem de você um professor excepcional. Você sempre esteve lá para esclarecer minhas dúvidas e me apoiar quando eu mais precisava.

Neste aniversário, espero que você receba todo o carinho e alegria que merece. Que este novo ano de vida lhe traga muitas realizações e momentos incríveis.

Parabéns, Clemilton! Obrigado por ser tão incrível!

Um grande abraço,

[Victor Sales] 🎂🎈
`;


paragraph.textContent = textoParagrafo
// Cria o elemento <video> dentro do <div>
const video = document.createElement("video");
video.src = "videoclemis.mp4";
video.autoplay = true;

// Adiciona o <p> e o <video> ao <div>
divContentAfter.appendChild(paragraph);

// Adiciona o <div> ao elemento pai desejado (por exemplo, o <body>)
document.body.appendChild(divContentAfter);

}

