var operA ;
var operaB;
var simbolo;
var res = 0;
const resultado = document.querySelector(".Resultado");
const mostrar1 = document.getElementById("mostrar1");
const mostrar2 = document.getElementById("mostrar2");
const cero = document.querySelector(".cero");
const uno = document.querySelector(".uno");
const dos = document.querySelector(".dos");
const tres = document.querySelector(".tres");
const cuatro = document.querySelector(".cuatro");
const cinco = document.querySelector(".cinco");
const seis = document.querySelector(".seis");
const siete = document.querySelector(".siete");
const ocho = document.querySelector(".ocho");
const nueve = document.querySelector(".nueve");
const suma = document.querySelector(".suma");
const resta = document.querySelector(".resta");
const multiplicacion = document.querySelector(".multiplicacion");
const division = document.querySelector(".division");
const borrrar = document.querySelector(".C");
const resetear = document.querySelector(".CE");
const igual = document.querySelector(".igual");

cero.addEventListener("click", ()=> mostrar("0"));
uno.addEventListener("click", ()=> mostrar("1"));
dos.addEventListener("click", ()=> mostrar("2"));
tres.addEventListener("click", ()=> mostrar("3"));
cuatro.addEventListener("click", ()=> mostrar("4"));
cinco.addEventListener("click", ()=> mostrar("5"));
seis.addEventListener("click", ()=> mostrar("6"));
siete.addEventListener("click", ()=> mostrar("7"));
ocho.addEventListener("click", ()=> mostrar("8"));
nueve.addEventListener("click", ()=> mostrar("9"));
borrrar.addEventListener("click", limpiar);
resetear.addEventListener("click", reset);
suma.addEventListener("click",()=> operacion("+"));
resta.addEventListener("click",()=> operacion("-"));
multiplicacion.addEventListener("click",()=> operacion("*"));
division.addEventListener("click",()=> operacion("/"));
igual.addEventListener("click", equal);
cero.addEventListener("keydown",() => mostrar("0"));

function mostrar(num){
    mostrar2.textContent = mostrar2.textContent + num;
}

function limpiar(){
    mostrar2.textContent = "";
}

function reset(){
    mostrar2.textContent = "";
    mostrar1.textContent = "";
    operA = 0;
    operaB = 0;
    simbolo = "";
}

function operacion(sim){
    operA = mostrar2.textContent;
    simbolo =sim;
    mostrar1.textContent = operA + simbolo;
    limpiar();
}

function equal(){
    operaB = mostrar2.textContent;
    resolver();
    mostrar1.textContent= operA + simbolo + operaB;
    
}

function resolver (){
    
    switch(simbolo){
        case "+":
            res = parseInt(operA) + parseInt(operaB);
            break;
        case "-":
            res = parseInt(operA) - parseInt(operaB);
            break;
        case "*":
            res = parseInt(operA) * parseInt(operaB);
            break;
        case "/":
            res = parseInt(operA) / parseInt(operaB);
            break;
            
    }
    mostrar2.textContent = res;
}


















