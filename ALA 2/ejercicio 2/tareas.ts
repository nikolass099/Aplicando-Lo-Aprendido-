import promptSync from "prompt-sync";

export const prompt = promptSync();

export interface Tarea {
    titulo: string;
    descripcion: string;
    completado: boolean;
    dificultad: "facil" | "medio" | "dificil";
}

export function agregarTarea(tareas: Tarea[]): void {
    const titulo = prompt("Nombre de la tarea: ").trim();
    if (!titulo) {
        console.log("El nombre de la tarea no puede estar vacio.");
        return;
    }

    const descripcion = prompt("Escriba su descripcion: ").trim();
    const dificultadInput = prompt("Elija una dificultad (facil, medio, dificil): ")
        .trim()
        .toLowerCase();

    const dificultad: Tarea[] =
        dificultadInput === "facil" ||
        dificultadInput === "medio" ||
        dificultadInput === "dificil"
            ? dificultadInput
            : "medio";

    tareas.push({ titulo, descripcion, completado: false, dificultad });
    console.log("Tarea guardada con exito.");
}
