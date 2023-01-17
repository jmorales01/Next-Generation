
/*
//var nombreDeLaVariable = dato;

var tituloEtiqueta = document.getElementById("titulo");

var primerNumero = 1;
var segundoNumero = 2;

var suma = primerNumero + segundoNumero;

tituloEtiqueta.innerText = suma;



// FUNCIONES CON JAVASCRIPT
function nombreDeLaFuncion(){
    var nombre = "Jose Luis"
    var idEtiqueta = document.getElementById("titulo")
    idEtiqueta.innerText = nombre
}

// Instanceamos la funcion
nombreDeLaFuncion()



// FUNCIONES CON PARAMETRO
function MostrarNombre(dato1){
var nombre = dato1
var tituloEtiqueta = document.getElementById("titulo")
tituloEtiqueta.innerText = nombre
}

MostrarNombre("Julio")


// FUNCIONES CON DOS PARAMETROS
function MostrarNombre(dato1, dato2){
var nombre = dato1 +" " + dato2
var tituloEtiqueta = document.getElementById("titulo")
tituloEtiqueta.innerText = nombre
}

MostrarNombre("Percy", "Meneses")
*/

// FUNCIONES CON RETORNO
function MostrarNombre(dato1, dato2){
var nombre = dato1 + " " + dato2

return nombre
}

var tituloEtiqueta = document.getElementById("titulo")
tituloEtiqueta.innerText = MostrarNombre("Percy", "Meneses")



