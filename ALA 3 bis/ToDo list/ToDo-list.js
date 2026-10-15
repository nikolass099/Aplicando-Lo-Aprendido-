const fs = require("fs").promises;  // para manejar operaciones de archivos de manera asíncrona y basada en promesas
const path = require("path");       // para manejar rutas de archivos de manera segura y compatible con diferentes sistemas operativos
const archivoTareas = path.join(__dirname, "tareas.json"); // es una forma segura de obtener la ruta absoluta del archivo tareas.json

const {input, close} = require("./nodeimperativo");
const {cambiarEstado, cambiarDificultadTarea} = require("./mod");
const {agregarTarea, borrarTarea, verTareas} = require("./tareas");

async function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}

async function guardarTareas(tareas) {
    try {
        const jsonString = JSON.stringify(tareas, null, 2); // Convertir el arreglo de tareas a una cadena JSON con formato legible
        await fs.writeFile(archivoTareas, jsonString, "utf8"); // Guardar la cadena JSON en el archivo tareas.json de manera asíncrona
        console.log("Tareas guardadas correctamente en tareas.json");
    } catch (error) {
        console.error("Error al guardar las tareas:", error);
        throw error;
    }
}


async function leerTareas() {
    try {
        const data = await fs.readFile(archivoTareas, "utf8"); // Leer el contenido del archivo tareas.json de manera asíncrona
        const tareas = JSON.parse(data); // Convertir la cadena JSON leída en un arreglo de objetos JavaScript
        if (!Array.isArray(tareas)) {    // Verificar que el contenido del archivo sea un arreglo
            throw new Error("El contenido de tareas.json debe ser un arreglo.");
        }
        return tareas;
    } catch (error) { // Manejar errores al leer el archivo, como archivo no encontrado o contenido inválido
        if (error.code === "ENOENT") {
            return [];
        }
        throw error;
    }
}

async function menuPrincipal() {
    try {
        const tareas = await leerTareas();
        let salir = false;
        while (!salir) {
            const opcion = await normalizarTexto(await input("\n1). Agregar tarea\n2). Ver tareas\n3). Cambiar estado de una tarea\n4). Cambiar dificultad de una tarea\n5). Borrar tarea\n0). Salir.\nElija una opcion para continuar:\n"));

            switch (opcion) {
                case "1":
                    console.clear();             // Limpiar la consola para una mejor visualización
                    await agregarTarea(tareas);  // Llamar a la función agregarTarea para permitir al usuario agregar una nueva tarea
                    await guardarTareas(tareas); // Guardar las tareas actualizadas en el archivo tareas.json
                    break;

                case "2":
                    console.clear();
                    await verTareas(tareas);
                    break;

                case "3":
                    console.clear();
                    await cambiarEstado(tareas);
                    await guardarTareas(tareas);
                    break;

                case "4":
                    console.clear();
                    await cambiarDificultadTarea(tareas);
                    await guardarTareas(tareas);
                    break;

                case "5":
                    console.clear();
                    await borrarTarea(tareas);
                    await guardarTareas(tareas);
                    break;

                case "0":
                    console.clear();
                    salir = true;
                    break;
                default:
                    console.log("\nopcion invalida\n");
                    break;
            }
        }
    } finally { // Asegurarse de cerrar la interfaz de lectura incluso si ocurre un error
        close();
    }
}

menuPrincipal().catch((error) => { // Manejar cualquier error no capturado durante la ejecución del menú principal
    console.error("No se pudo ejecutar la lista de tareas:", error);
    process.exitCode = 1; // Establecer un código de salida diferente de cero para indicar que ocurrió un error
});