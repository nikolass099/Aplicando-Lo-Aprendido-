const {input, close} = require("./nodeimperativo");
const {pedirEstado, pedirDificultad, cambiarEstado, cambiarDificultadTarea} = require("./mod");
const {agregarTarea, borrarTarea, verTareas} = require("./tareas");

async function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
async function menuPrincipal() {
    const tareas = [];
    let salir = false;
    while (!salir) {
        const opcion = await normalizarTexto(await input ("1). Agregar terea 2). ver tareas 3). cambiar estado de una tarea 4). cambiar dificultad de una tarea 5). borrar tarea 0). salir. Eliga una opcipon para continuar:"));

        switch (opcion) {
            case "1":
                console.clear();
                await agregarTarea(tareas);
                break;

            case "2":
                console.clear();
                await verTareas(tareas);
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