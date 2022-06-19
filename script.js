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
        document.getElementById("form1").style.display="none";
        visibilidade=false;
    }else{
        document.getElementById("form1").style.display="flex";
        visibilidade=true;
    }   
}
//terminei visibilidade dos input das fotos