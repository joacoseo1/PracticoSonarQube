// Variables globales con let/const
let counter = 0;
const items = ["uno", "dos", "tres"];

// Función optimizada (sin código duplicado)
function processItems() {
    for (const item of items) {
        console.info(`Processing item: ${item}`);
        counter++;
        console.info(`Incrementado contador a: ${counter}`);
    }
    return counter;
}

// Evaluación de expresión más segura (evitar eval)
function evaluateUserInput(input) {
    try {
        // Uso de Function en lugar de eval (aún inseguro si el input no se valida)
        const fn = new Function(`return ${input}`);
        return fn();
    } catch (error) {
        console.error("Error evaluando la expresión:", error);
        return null;
    }
}

// Manejo de datos con precaución (sin localStorage inseguro)
function saveUserData() {
    const userData = document.getElementById("user-data").value;
    // Mejor usar sessionStorage o enviar al servidor
    sessionStorage.setItem("userData", userData);
}

// Comparación estricta para evitar bugs
function checkValue(value) {
    return value === 0;
}

// Llamada a funciones al cargar la página
window.onload = function () {
    processItems();

    // Definición única de variable
    const temp = 20;

    // Log informativo (en producción → logger externo)
    console.info("La página se cargó completamente con temp =", temp);
};
