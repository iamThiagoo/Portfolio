console.log(`Olá, seja muito bem vindo ao meu portfólio!`);

document.querySelector("#hello").addEventListener("click", () => {
    alert(`Um poema que sempre me motiva a sempre entregar o melhor de mim todo o dia:

"Nenhum trabalho de qualidade pode ser feito sem concentração e auto-sacrifício, esforço e dúvida."`);
})

// Menu
const menu = document.querySelector("#btn-mobile");
menu.addEventListener("click", toggle);

menu.addEventListener("touchstart", toggle);

function toggle(e){
    if (e.type === "touchstart") e.preventDefault();
    const nav = document.querySelector("#nav");
    nav.classList.toggle("active");
}

// Scroll
const scroll = document.querySelectorAll("[data-scroll]");
const animationClass = "animate";

function animateScroll(){
    const topo = window.pageYOffset + ((window.innerHeight * 3) / 4);
    scroll.forEach(e => {
        if((topo) > e.offsetTop){
            e.classList.add(animationClass);
        }
        else{
            e.classList.remove(animationClass);
        }
    });
}

animateScroll();

if(scroll.length){
    window.addEventListener("scroll", () => {
        animateScroll();
    });
}

/* CARDS */
const knowledgeTitle = document.querySelector(".skills-title"); 
const knowledgeText  = document.querySelector(".knowledge-text");
const experience     = document.querySelector(".experience");

document.querySelector("#html-card").addEventListener("click", () => {
    knowledgeTitle.innerHTML = `HTML`;
    knowledgeText.innerHTML = `"HyperText Markup Language" é uma linguagem de marcação para Desenvolvimento Web, praticamente toda a Web é feita dela.<br><br>`;
    experience.innerText = "10 meses de experiência";
})

document.querySelector("#css-card").addEventListener("click", () => {
    knowledgeTitle.innerHTML = `CSS`;
    knowledgeText.innerHTML = `"Cascading Style Sheets" é uma folha de estilo que completa o HTML, sem ele a WEB que conhecemos hoje seria preto e branco.<br><br>`;
    experience.innerText = "10 meses de experiência";
})

document.querySelector("#js-card").addEventListener("click", () => {
    knowledgeTitle.innerHTML = `JavaScript`;
    knowledgeText.innerHTML = `Enquanto o HTML é o corpo e o CSS é o design da nossa página, o JavaScript vem para ser a funcionalidade dela. Com ele nós podemos fazer inúmeras coisas como: mapas interativos, gráficos, calculadora e por aí vai.<br><br>`;
    experience.innerText = "6 meses de experiência";
})

document.querySelector("#bootstrap-card").addEventListener("click", () => {
    knowledgeTitle.innerHTML = `Bootstrap`;
    knowledgeText.innerHTML = `Bootstrap é um framework front-end que agiliza o processo de criação de sistemas e websites pois contém diversos componentes prontos a sua disposição.<br><br>`;
    experience.innerText = "2 meses de experiência";
})

document.querySelector("#php-card").addEventListener("click", () => {
    knowledgeTitle.innerHTML = `PHP`;
    knowledgeText.innerHTML = `"Personal Home Page: HyperText Preprocessor" foi criado para deixar um site HTML dinâmico e seu foco é no lado do servidor. Com ele nós podemos ligar ele ao banco de dados e salvar informações do usuário.<br><br>`;
    experience.innerText = "5 meses de experiência.";
})

document.querySelector("#mysql-card").addEventListener("click", () => {
    knowledgeTitle.innerHTML = `MySQL`;
    knowledgeText.innerHTML = `"MySQL é o banco de dados mais utilizado do mundo, em um banco de dados ocorre o agrupamento de dados que se relacionam de forma que crie um sentido.<br><br>`;
    experience.innerText = "4 meses de experiência.";
})

document.querySelector("#postgres-card").addEventListener("click", () => {
    knowledgeTitle.innerHTML = `PostgreSQL`;
    knowledgeText.innerHTML = `PostgreSQL é um banco de dados relacional e um dos mais utilizados no mundo, por ser bastante estável e ter código aberto, acaba sendo uma boa escolha para os desenvolvedores.<br><br>`;
    experience.innerText = "2 meses de experiência";
})

document.querySelector("#git-card").addEventListener("click", () => {
    knowledgeTitle.innerHTML = `Versionamento com GIT`;
    knowledgeText.innerHTML = `GIT é um versionador de código, com ele você poderá junto com um sistema de controle de versão (como Github ou Gitlab) compartilhar seu código com amigos ou colegas de trabalho.<br><br>`;
    experience.innerText = "10 meses de experiência";
})

document.querySelector("#docker-card").addEventListener("click", () => {
    knowledgeTitle.innerHTML = `Docker`;
    knowledgeText.innerHTML = `Docker é uma forma de virtualizar aplicações em forma de containers, o que facilita a utilização de aplicações em máquinas que não possuem certas dependências.<br><br>`;
    experience.innerText = "1 mês de experiência";
})