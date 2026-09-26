import {
    borrarTarea,
    cambiarDificultad,
    cambiarEstado,
    verTareas,
} from "./agregar.js";
import { agregarTarea, prompt } from "./tareas.js";
import type { Tarea } from "./tareas.js";

function ToDo(): void {
    const tareas: Tarea[] = [];
    let salir = false;

    while (!salir) {
        const opcion = prompt(
            "1). Agregar tarea. 2). Ver tareas. 3). Cambiar estado de una tarea. 4). Cambiar dificultad de una tarea. 5). Borrar tarea. 0). Salir."
        ).trim();

        switch (opcion) {
            case "1":
                console.clear();
                agregarTarea(tareas);
                break;
            case "2":
                console.clear();
                verTareas(tareas);
                break;
            case "3":
                console.clear();
                cambiarEstado(tareas);
                break;
            case "4":
                console.clear();
                cambiarDificultad(tareas);
                break;
            case "5":
                console.clear();
                borrarTarea(tareas);
                break;
            case "0":
                salir = true;
                break;
            default:
                console.log("Opcion no valida.");
        }
    }
}

ToDo();