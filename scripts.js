// Variables globales con let/const
let counter = 0;
const items = ["uno", "dos", "tres"];

// Función optimizada con for-of
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
        // Reemplazo de eval por Function (aún debe evitarse en entornos críticos)
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
    // Mejor usar sessionStorage o enviarlo al servidor de forma segura
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

    // Log de información (en producción podría enviarse a un sistema de monitoreo en lugar de consola)
    console.info("La página se cargó completamente con temp =", temp);
};
