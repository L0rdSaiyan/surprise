const makeVisible = () =>{

let content = document.getElementsByClassName("content")[0]
const body = document.body
content.style.display = 'none'
body.style.backgroundImage = "url('champion-unduped.png')"


// Cria o elemento <div> com a classe "content-after"
const divContentAfter = document.createElement("div");
divContentAfter.classList.add("content-after");

// Cria o elemento <p> dentro do <div>
const paragraph = document.createElement("p");
const textoParagrafo = "Hoje estou aqui lhe enviando esta mensagem para lhe desejar mil felicidades. Desejo que esse dia seja de muitas alegrias e que você realize seus sonhos. Que essa data não seja só para trazer alegrias, mas sim para que à passagem de cada novo ano você possa aprender as lições que a vida lhe oferece. Mesmos as passagens tristes, assim como as alegres sejam passos importantes em sua vida. Que seus sonhos se transformem em coisas reais para você que é um dos meus melhores amigos. Feliz Aniversário, Bruno";

paragraph.textContent = textoParagrafo
// Cria o elemento <video> dentro do <div>
const video = document.createElement("video");
video.src = "/obrisguaido.mp4";
video.autoplay = true;

// Adiciona o <p> e o <video> ao <div>
divContentAfter.appendChild(paragraph);
divContentAfter.appendChild(video);

// Adiciona o <div> ao elemento pai desejado (por exemplo, o <body>)
document.body.appendChild(divContentAfter);

}

