//adicionando imagens apertando o botão Criar Imagens
const apikey="563492ad6f917000010000019109678cff424cc785b4cb62e961147e";
let page_num=1;
function criarImagem(page_num) {
    const data= fetch(`https://api.pexels.com/v1/curated?page=${page_num}`,
        {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: apikey,
        },
    }).then(res => res.json()).then(data => {
        document.getElementById("imagem1").src = data.photos[0].src.medium;
        document.getElementById("imagem2").src = data.photos[1].src.medium;
        document.getElementById("imagem3").src = data.photos[2].src.medium;
    });
};
//final

//alterar imagens apertando o botão Alterar
function alterarImagem() {
    page_num++;
    criarImagem(page_num);
};
//final

//adicionar primeira imagem
function readImage1() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
        document.getElementById("imagem1").src = e.target.result;
        };       
        file.readAsDataURL(this.files[0]);
    }}
document.getElementById("img1-input").addEventListener("change", readImage1, false);
//final

//adicionar segunda imagem
function readImage2() {
if (this.files && this.files[0]) {
    var file = new FileReader();
    file.onload = function(e) {
    document.getElementById("imagem2").src = e.target.result;
    };       
    file.readAsDataURL(this.files[0]);
}}
document.getElementById("img2-input").addEventListener("change", readImage2, false);
//final

//adicionar terceira imagem
function readImage3() {
if (this.files && this.files[0]) {
    var file = new FileReader();
    file.onload = function(e) {
    document.getElementById("imagem3").src = e.target.result;
    };       
    file.readAsDataURL(this.files[0]);
}}
document.getElementById("img3-input").addEventListener("change", readImage3, false);
//final

//mudar visibilidade do header com os input das fotos e texto
let visibilidade = true;
function displaymenu() {
    if(visibilidade){
        document.getElementById("header").style.display="none";
        visibilidade=false;
    }else{
        document.getElementById("header").style.display="block";
        visibilidade=true;
    }   
}
//final

//adicionar o primeiro texto
let captar1 = "";
function textoEnviado1() {
    captar1 = document.getElementById("texto1").value;
    if(captar1=="") {
        alert("Escreva o primeiro texto!");
    }else {
        console.log(captar1);
        document.getElementById("p1").innerHTML = captar1;
    }
}
//final

//adicionar o segundo texto
let captar2 = "";
function textoEnviado2() {
    captar2 = document.getElementById("texto2").value;
    if(captar2=="") {
        alert("Escreva o segundo texto!");
    }else {
        console.log(captar2);
        document.getElementById("p2").innerHTML = captar2;
    }
}
//final

//adicionar o terceiro texto
let captar3 = "";
function textoEnviado3() {
    captar3 = document.getElementById("texto3").value;
    if(captar3=="") {
        alert("Escreva o terceiro texto!");
    }else {
        console.log(captar3);
        document.getElementById("p3").innerHTML = captar3;
    }
}
//final