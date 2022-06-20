function readImage1() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
        document.getElementById("imagem1").src = e.target.result;
        };       
        file.readAsDataURL(this.files[0]);
    }}
document.getElementById("img1-input").addEventListener("change", readImage1, false);
//primeira imagem terminada

function readImage2() {
if (this.files && this.files[0]) {
    var file = new FileReader();
    file.onload = function(e) {
    document.getElementById("imagem2").src = e.target.result;
    };       
    file.readAsDataURL(this.files[0]);
}}
document.getElementById("img2-input").addEventListener("change", readImage2, false);
//segunda imagem terminada

function readImage3() {
if (this.files && this.files[0]) {
    var file = new FileReader();
    file.onload = function(e) {
    document.getElementById("imagem3").src = e.target.result;
    };       
    file.readAsDataURL(this.files[0]);
}}
document.getElementById("img3-input").addEventListener("change", readImage3, false);
//terceira imagem terminada

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
//terminei visibilidade dos input das fotos

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
//terminado texto1

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
//terminado texto2

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
//terminado texto3