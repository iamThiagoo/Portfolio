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
const conhecimentoTitle = document.querySelector("#title-skills"); 
const conhecimentoTexto = document.querySelector("#conhecimento-text");

document.querySelector("#html-card").addEventListener("click", () => {
    conhecimentoTitle.innerHTML = `HTML`;
    conhecimentoTexto.innerHTML = `"HyperText Markup Language" é uma linguagem de marcação para Desenvolvimento Web, praticamente toda a Web é feita dela. <br><br>8 meses de experiência.`;
})

document.querySelector("#css-card").addEventListener("click", () => {
    conhecimentoTitle.innerHTML = `CSS`;
    conhecimentoTexto.innerHTML = `"Cascading Style Sheets" é uma folha de estilo que completa o HTML, sem ele a WEB que conhecemos hoje seria preto e branco. <br><br>8 meses de experiência.`;
})

document.querySelector("#js-card").addEventListener("click", () => {
    conhecimentoTitle.innerHTML = `JavaScript`;
    conhecimentoTexto.innerHTML = `Enquanto o HTML é o corpo e o CSS é o design da nossa página, o JavaScript vem para ser a funcionalidade dela. Com ele nós podemos fazer inúmeras coisas. <br><br>6 meses de experiência.`;
})

document.querySelector("#php-card").addEventListener("click", () => {
    conhecimentoTitle.innerHTML = `PHP`;
    conhecimentoTexto.innerHTML = `"Personal Home Page: HyperText Preprocessor" foi criado para deixar um site HTML dinâmico e seu foco é no lado do servidor. Com ele nós podemos ligar ele ao banco de dados e salvar informações do usuário.<br><br> 3 meses de experiência.`;
})

document.querySelector("#mysql-card").addEventListener("click", () => {
    conhecimentoTitle.innerHTML = `MySql`;
    conhecimentoTexto.innerHTML = `"MySql é o banco de dados mais utilizado do mundo, em um banco de dados ocorre o agrupamento de dados que se relacionam de forma que crie um sentido. <br><br> 2 meses de experiência.`;
})

document.querySelector("#git-card").addEventListener("click", () => {
    conhecimentoTitle.innerHTML = `Versionamento com GIT`;
    conhecimentoTexto.innerHTML = `GIT é um versionador de código, com ele você poderá junto com um sistema de controle de versão (como Github ou Gitlab) compartilhar seu código com amigos ou colegas de trabalho. <br><br> 8 meses de experiência.`;
})