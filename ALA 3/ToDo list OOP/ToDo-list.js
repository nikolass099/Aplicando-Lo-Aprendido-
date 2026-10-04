const {input, close} = require("./nodeimperativo");                 // importo las distintas funciones de los archivos nodeimperativo.js, 
const {cambiarEstado, cambiarDificultadTarea} = require("./mod");   // mod.js y tareas.js para poder usarlas en este archivo //
const {agregarTarea, borrarTarea, verTarea} = require("./tareas");

async function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
async function menuPrincipal() {    // creo la funcion menuPrincipal para poder mostrar el menu de opciones al usuario y asi poder interactuar con el programa //
    const tareas = [];              // creo un array vacio para almacenar las tareas que se iran agregando //
    let salir = false;
    while (!salir) {
        const opcion = await normalizarTexto(await input ("1). Agregar terea 2). ver tareas 3). cambiar estado de una tarea 4). cambiar dificultad de una tarea 5). borrar tarea 0). salir. Eliga una opcipon para continuar:"));

        switch (opcion) {
            case "1":
                console.clear(); // limpio la consola para que el usuario pueda ver mejor el menu de opciones //
                await agregarTarea(tareas);
                break;

            case "2":
                console.clear();
                await verTarea(tareas);
                break;

            case "3":
                console.clear();
                await cambiarEstado(tareas);
                break;

            case "4":
                console.clear();
                await cambiarDificultadTarea(tareas);
                break;

            case "5":
                console.clear();
                await borrarTarea(tareas);
                break;

            case "0":
                console.clear();
                salir = true;
                break;
            default:
                console.log("opcion invalida");
                break;
        }
    }
    close();
    }
    menuPrincipal();