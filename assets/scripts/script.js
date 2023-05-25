/*
const galeria = [
    {
        src: "assets/img/ (1).jpg"
    },
    {
        src: "assets/img/ (2).jpg"
    },
    {
        src: "assets/img/ (3).jpg"
    },
    {
        src: "assets/img/ (4).jpg"
    },
    {
        src: "assets/img/ (5).jpg"
    },
    {
        src: "assets/img/ (6).jpg"
    },
    {
        src: "assets/img/ (7).jpg"
    },
    {
        src: "assets/img/ (8).jpg"
    },
    {
        src: "assets/img/ (9).jpg"
    },
    {
        src: "assets/img/ (10).jpg"
    },
    {
        src: "assets/img/ (11).jpg"
    },
    {
        src: "assets/img/ (12).jpg"
    },
    {
        src: "assets/img/ (13).jpg"
    },
    {
        src: "assets/img/ (14).jpg"
    },
    {
        src: "assets/img/(15).jpg"
    },
    {
        src: "assets/img/(16).jpg"
    }
];
*/

//tornando os botões do navbar funcionais;
const home = document.getElementById("home");
const artigos = document.getElementById("artigos");
const gallery = document.getElementById("galeria");
const sobre = document.getElementById("sobre");
const loja = document.getElementById("loja");

function mudarHome() {
    home.style.display = "flex";
    artigos.style.display = "none";
    gallery.style.display = "none";
    loja.style.display = "none";
    sobre.style.display = "none";
};

function mudarArtigos () {
    home.style.display = "none";
    artigos.style.display = "flex";
    gallery.style.display = "none";
    loja.style.display = "none";
    sobre.style.display = "none";
};

function mudarGaleria() {
    home.style.display = "none";
    artigos.style.display = "none";
    gallery.style.display = "flex";
    loja.style.display = "none";
    sobre.style.display = "none";
};

function mudarLoja() {
    home.style.display = "none";
    artigos.style.display = "none";
    gallery.style.display = "none";
    loja.style.display = "flex";
    sobre.style.display = "none";
};

function mudarSobre() {
    home.style.display = "none";
    artigos.style.display = "none";
    gallery.style.display = "none";
    loja.style.display = "none";
    sobre.style.display = "flex";
};

//carrossel;
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if (idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;

}

setInterval(carrossel, 6000);
