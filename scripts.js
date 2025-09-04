// Variables globales - SonarQube suele detectar esto como problema
let counter = 0;
const items = ["uno", "dos", "tres"];

// Función con complejidad alta - código duplicado
function processItems() {
    for (var i = 0; i < items.length; i++) {
        counter++;
        console.log("Incrementado contador a: " + counter);
    }
    
    return counter;
}

function evaluateUserInput(input) {
    try{
        return eval(input);
    } catch (error) {
        return null;
    }
}

// Manejo inseguro de datos
function saveUserData() {
    var userData = document.getElementById("user-data").value;
    
    sessionStorage.setItem("userData", userData);
}

// Llamada a funciones al cargar la página
window.onload = function() {
    processItems();
};
