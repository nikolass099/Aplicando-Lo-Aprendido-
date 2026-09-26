import { prompt } from "./tareas.js";
import type { Tarea } from "./tareas.js";

export function verTareas(tareas: Tarea[]): void {
    if (tareas.length === 0) {
        console.log("No hay tareas guardadas.");
        return;
    }

    tareas.forEach((tarea, i) => {
        console.log(`${i + 1}) ${tarea.titulo} - ${tarea.descripcion}`);
        console.log(`  Estado: ${tarea.completado ? "completado" : "pendiente"} | Dificultad: ${tarea.dificultad}`);
    });
}

function seleccionarIndice(tareas: Tarea[], pregunta: string): number | undefined {
    if (tareas.length === 0) {
        console.log("No hay tareas guardadas.");
        return undefined;
    }

    verTareas(tareas);
    const indice = Number(prompt(pregunta)) - 1;
    if (!Number.isInteger(indice) || indice < 0 || indice >= tareas.length) {
        console.log("Tarea no encontrada.");
        return undefined;
    }

    return indice;
}

export function cambiarEstado(tareas: Tarea[]): void {
    const indice = seleccionarIndice(tareas, "Numero de la tarea cuyo estado desea cambiar: ");
    if (indice === undefined) {
        return;
    }

    tareas[indice].completado = !tareas[indice].completado;
    console.log("Estado actualizado.");
}

export function cambiarDificultad(tareas: Tarea[]): void {
    const indice = seleccionarIndice(tareas, "Numero de la tarea cuya dificultad desea cambiar: ");
    if (indice === undefined) {
        return;
    }

    const nueva = prompt("Elija la nueva dificultad (facil, medio, dificil): ")
        .trim()
        .toLowerCase();
    if (nueva !== "facil" && nueva !== "medio" && nueva !== "dificil") {
        console.log("Valor invalido.");
        return;
    }

    tareas[indice].dificultad = nueva;
    console.log("Dificultad actualizada.");
}

export function borrarTarea(tareas: Tarea[]): void {
    const indice = seleccionarIndice(tareas, "Numero de la tarea que desea borrar: ");
    if (indice === undefined) {
        return;
    }

    tareas.splice(indice, 1);
    console.log("Tarea eliminada.");
}
