var operA ;
var operaB;
var simbolo;
var res = 0;
window.onload = function(){
    document.onkeydown = calcular;
}

function calcular(e){
    let tecla = e.which;
    const mostrar1 = document.getElementById("mostrar1");
    const mostrar2 = document.getElementById("mostrar2");

    
    function borrarContenido(){

        mostrar2.textContent = "";
        mostrar1.textContent = "";
        operA = 0;
        operaB = 0;
        simbolo = "";
    }

    function limpiar(){
        mostrar2.textContent = "";
    } 

    if (tecla == 96 )
    {
        mostrar2.textContent += "0";
    }

    
    if (tecla == 97 )
    {
        mostrar2.textContent += "1"; 
    }

    
    if (tecla == 98 )
    {
        mostrar2.textContent += "2";
    }

    
    if (tecla == 99 )
    {
        mostrar2.textContent += "3";
    }

    
    if (tecla == 100 )
    {
        mostrar2.textContent += "4";
    }

    
    if (tecla == 101 )
    {
        mostrar2.textContent += "5";
    }

    
    if (tecla == 102 )
    {
        mostrar2.textContent += "6";
    }

    
    if (tecla == 103 )
    {
        mostrar2.textContent += "7";
    }

    
    if (tecla == 104 )
    {
        mostrar2.textContent += "8";
    }

    
    if (tecla == 105 )
    {
        mostrar2.textContent += "9";
    }

    
    if (tecla == 106 )
    {
        operA = mostrar2.textContent;
        simbolo ="x";
        mostrar1.textContent = operA + simbolo;
        limpiar();
    }


    
    if (tecla == 107 )
    {
        operA = mostrar2.textContent;
        simbolo ="+";
        mostrar1.textContent = operA + simbolo;
        limpiar();
    }


    
    if (tecla == 109 )
    {
        operA = mostrar2.textContent;
        simbolo ="+";
        mostrar1.textContent = operA + simbolo;
        limpiar();
    }

    
    if (tecla == 111 )
    {
        operA = mostrar2.textContent;
        simbolo ="/";
        mostrar1.textContent = operA + " " +  simbolo;
        limpiar();
    }

    
    if (tecla == 81 )
    {
        mostrar2.textContent += "*2";
        operando1 = mostrar2.textContent;
        operacion = "*2";
        limpiar();
    }

    if (tecla == 87 )
    {
        mostrar2.textContent += "√";
        operando1 = mostrar2.textContent;
        operacion = "√";
        limpiar();
    }


    //Enter
    if (tecla == 13 )
    {
        operaB = mostrar2.textContent;
        resolver();
        mostrar1.textContent= operA + simbolo + operaB;
    }

        
    if (tecla == 8 )
    {
        borrarContenido();
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
    
}