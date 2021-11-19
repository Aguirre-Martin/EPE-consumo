//Elementos html
let radio = document.getElementsByName("usuario");
let kwh_mes = document.getElementById("kwh_mes");
let selector = document.getElementById("selector");
let kwh_req = document.getElementById("kwh_mes");
let valido;

//Variables para calculos
let iva_residencial = 1.21;
let iva_industrial = 1.27;
const precio_inicial = 102;




function iva_calcular (){
    for(var i=0; i<radio.length; i++) {
        if (radio[0].checked == true) {
            return(iva_residencial)
        }
        else {
            return(iva_industrial)
        }
    }
}


function kwh (){
    
    let indiceSeleccionado = selector.selectedIndex;

    switch(indiceSeleccionado){
        case 1: 
            kwh_distrito = 5.8
            break;
        case 2: 
            kwh_distrito = 5.4
            break;
        case 3: 
            kwh_distrito = 5.35
            break;
        case 4: 
            kwh_distrito = 5.6
            break; 
    }
    return(kwh_distrito)

} 


function total(){
    
    let iva = iva_calcular()

    let distrito = kwh()

    let cant_horas = kwh_mes.value
    
    precio_total = (precio_inicial + cant_horas*distrito) * iva
    
    return Math.round(precio_total)

}

function validacion_tipoUsuario (){
    valido = 0
    if (radio[0].checked == false && radio[1].checked == false){
        valido = 1
        return valido
    }
    else {
        return 0
    }
}

function validacion_distrito (){
    valido = 0
    if (selector.value == 0) {
        valido = 2
        return valido;
    }
    return 0;
}

function validar_campo_kwh() {
    valido = 0
    let kwh_mes_value = document.getElementById("kwh_mes").value;
    //la condición
    if (kwh_mes_value.length == 0) {
        valido = 3;
        return valido;
    }
    return 0;
}




function validar() {
    validacion_tipoUsuario()
    if (valido == 1){
        return alert("Debe elegir el tipo de usuario")
    }
    validacion_distrito()
    if (valido == 2){
        return alert("Debe seleccionar un distrito")
    }
    validar_campo_kwh()
    if (valido == 3){
        return alert("Debe ingresar los kwh por mes")
    }
    return document.getElementById("resultado").innerHTML = "$ " + total()
}
