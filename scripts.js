// Variables globales - SonarQube suele detectar esto como problema
var counter = 0;
var items = ["uno", "dos", "tres"];

// Función con complejidad alta - código duplicado
function processItems() {
    for (var i = 0; i < items.length; i++) {
        console.log("Processing item: " + items[i]);
        
        // Lógica duplicada deliberadamente
        if (items[i] === "uno") {
            counter++;
            console.log("Incrementado contador a: " + counter);
        } else if (items[i] === "dos") {
            counter++;
            console.log("Incrementado contador a: " + counter);
        } else {
            counter++;
            console.log("Incrementado contador a: " + counter);
        }
    }
    
    return counter;
}

// Función sin usar - código muerto
function unusedFunction() {
    return "Esta función nunca se usa";
}

// Vulnerabilidad típica - evaluación de expresión insegura
function evaluateUserInput(input) {
    // Esto es una mala práctica de seguridad que SonarQube detectará
    return eval(input);
}

// Manejo inseguro de datos
function saveUserData() {
    var userData = document.getElementById("user-data").value;
    // Almacenamiento de datos sensibles en localStorage
    localStorage.setItem("userData", userData);
}

// Código con posible bug - comparación incorrecta
function checkValue(value) {
    // Uso de == en lugar de === (problema de calidad)
    if (value == 0) {
        return true;
    }
    return false;
}

// Llamada a funciones al cargar la página
window.onload = function() {
    processItems();
    
    // Definición de variables duplicadas - SonarQube detectará esto
    var temp = 10;
    // ...código...
    var temp = 20; // Redefinición
    
    // Uso de console.log en producción - mala práctica
    console.log("La página se cargó completamente");
};
