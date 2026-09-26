import promptSync from "prompt-sync";

export const prompt = promptSync();

export interface Tarea {
    titulo: string;
    descripcion: string;
    completado: boolean;
    dificultad: "facil" | "medio" | "dificil";
}

export function pedirDificultad(): Tarea["dificultad"] {
    while (true) {
        const entrada = prompt("Elija una dificultad (facil, medio, dificil): ")
            .trim()
            .toLowerCase();

        if (entrada === "facil" || entrada === "medio" || entrada === "dificil") {
            return entrada;
        }

        console.log("Opcion invalida. Escriba facil, medio o dificil.");
    }
}

export function agregarTarea(tareas: Tarea[]): void {
    const titulo = prompt("Nombre de la tarea: ").trim();
    if (!titulo) {
        console.log("El nombre de la tarea no puede estar vacio.");
        return;
    }

    const descripcion = prompt("Escriba su descripcion: ").trim();
    const dificultad = pedirDificultad();

    tareas.push({ titulo, descripcion, completado: false, dificultad });
    console.log("Tarea guardada con exito.");
}
