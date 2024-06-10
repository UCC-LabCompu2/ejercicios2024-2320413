/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
let convertirUnidades = (nombre, valor) => {
    let varMetro, varPulgada, varPie, varYarda;

    if(valor.includes(",")){
        valor = valor.replace(",",".");
    }
    if(isNaN(valor)){
        alert("El valor ingresado no es un número");

        varMetro = "";
        varPulgada = "";
        varPie = "";
        varYarda = "";

    }   else if(nombre === "metro"){
        varMetro = valor;
        varPulgada = valor * 39.7;
        varPie = valor * 3.24;
        varYarda = valor * 1.093;

    }   else if(nombre === "pulgada"){
        varPulgada = valor;
        varMetro = valor / 39.7; 
        varPie = valor * 3.24;
        varYarda = valor * 1.093;

    }   else if(nombre === "pie"){
        varPie = valor;
        varMetro = valor * 0.038;
        varPulgada = valor * 39.7;
        varYarda = valor * 1.093;

    }   else if(nombre === "yarda"){
        varYarda = valor;
        varPulgada = valor * 39.7;
        varPie = valor * 3.24;
        varMetro = valor * 0.91;
    }
    document.getElementById("metro").value = varMetro.toFixed(2);
    document.getElementById("pulgada").value = varPulgada.toFixed(2);
    document.getElementById("pie").value = varPie.toFixed(2);
    document.getElementById("yarda").value = varYarda.toFixed(2);
}

function convertirGR(id){
    if(id==="grados"){
        let grad = document.getElementById("grados").value;
        let rad = grad*Math.PI/180;
        document.getElementById("rad").value = rad;
    } else if (id === "rad"){
        let rad = document.getElementById("rad").value;
        let grad = rad*180/Math.PI;
        document.getElementById("grados").value = grad;
    }
}

let mostrarOcultar = (valorMo) => { 
    if (valorMo === "val_mostrar"){
        document.getElementById("divMo").style.display = 'block';
    } else if(valorMo === "val_ocultar"){
        document.getElementById("divMo").style.display = 'none';
    }
}

let suma = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;
} 

let resta = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("res_num1")[0].value); 
    num2 = Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML = num1 - num2;
} 

let multiplicacion = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("mul_num1")[0].value); 
    num2 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML = num1 * num2;
} 

let division = () => {
    let num1, num2;
    num1 = Number(document.getElementsByName("div_num1")[0].value); 
    num2 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML = num1 / num2;
} 

let pasar_pagina = () => {
    let cant, unit, url
    cant = document.getElementById("distancia").value
    unit = document.getElementsByName("unidades")[0].value
    url = `segundaWeb.html#${cant}#${unit}`
    window.open(url)
}

let cargarValores = () => {
    let url, cant, unit
    url = window.location.href.split("#")
    cant = url[1]
    unit = url[2]
    document.getElementById("dist").value = `${cant} ${unit}`
}

let guardarLocalStorage = () =>{
    const distancia = document.getElementById("distancia").value;
    const unidad = document.getElementsByName("unidades")[0].value;

    localStorage.setItem("distanciaLs", distancia);
    localStorage.setItem("unidadesLs", unidad);
    window.open("2_web.html");
}

let cargarLocalStorage = () =>{
    const distancia = localStorage.getItem("distanciaLs");
    const unidad = localStorage.getItem("unidadesLs");
    document.getElementById("dist").value = distancia + " " + unidad;
}

let dibujarCirculoCuadrado = () =>{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");


    const yMax = canvas.height;
    ctx.fillStyle = "pink";
    const lado = 100;
    const margen = 5;
    ctx.fillRect(0 + margen, yMax-lado-margen, lado, lado);

    const xMax = canvas.width;
    ctx.fillStyle = "red";
    ctx.arc(xMax/2, yMax/2, 50, 0, 2*Math.PI);
    ctx.fill();

}

let cargarListeners = () => {
    document.getElementById("lienzo").addEventListener("mousemove", dibujar);
}

let dibujar = (event) => {
    const canvas = document.getElementById("lienzo");
    const ctx = canvas.getContext("2d");

    let posX = event.clientX; 
    let posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function () {bandera = true}
    canvas.onmouseup = function () {bandera = false}

    ctx.fillStyle = "#ff0034";
    if(bandera){
        ctx.fillRect(posX, posY, 5, 5);
    }
}

let limpiarCanvas = () => {
    const canvas = document.getElementById("lienzo");
    canvas.width = canvas.width;
}

let dibujarCuadriculado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    const anchoMax = canvas.width;
    const alturaMax = canvas.height;
    const paso = 20;

    for(let i = paso; i < alturaMax;){ 
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeLine = "#000000";
        ctx.stroke();
        ctx.closePath();
        i += paso;

    }
    for(let i = paso; i < anchoMax;){ 
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeLine = "#000000";
        ctx.stroke();
        ctx.closePath();
        i += paso;
    }

    ctx.beginPath();
    ctx.moveTo(0, alturaMax/2);
    ctx.lineTo(anchoMax, alturaMax/2);
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2, alturaMax);
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
    ctx.closePath();
    
    let numX = -20;
    ctx.font = "Arial";
    ctx.fillStyle = "red";
    for(let i = 0; i < anchoMax;){
        ctx.fillText(String(numX), i, alturaMax/2);
        i += paso;
        numX++;
    }

    let numY = -15;
    ctx.font = "Arial";
    ctx.fillStyle = "red";
    for(let i = 0; i < alturaMax;){
        ctx.fillText(String(numY), anchoMax/2, i);
        i += paso;
        numY++;
    }
}

