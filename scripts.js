// Variables globales con let/const
let counter = 0;
const items = ["uno", "dos", "tres"];

// Función optimizada (se eliminó lógica duplicada)
function processItems() {
    for (let i = 0; i < items.length; i++) {
        console.info(`Processing item: ${items[i]}`);
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
    if (value === 0) {
        return true;
    }
    return false;
}

// Llamada a funciones al cargar la página
window.onload = function () {
    processItems();

    // Definición única de variable
    let temp = 20;

    // Log de información (en producción podría enviarse a un sistema de monitoreo en lugar de consola)
    console.info("La página se cargó completamente con temp =", temp);
};
