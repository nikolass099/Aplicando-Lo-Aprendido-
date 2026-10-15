const {input} = require("./nodeimperativo");

function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}

async function pedirEstado() {
    const respuesta = await normalizarTexto(await input("\ningrese el estado que desea (1. pendiente, 2. en progreso, 3. completada, 0. cancelada) [enter para omitir]:\n"));
    const estadosValidos = {
        "1": "pendiente",
        "2": "en progreso",
        "3": "completada",
        "0": "cancelada"
    };
    const estadoFinal = estadosValidos[respuesta] || "pendiente";
    if (respuesta) {
        console.log(`\nel estado ingresado es: ${estadoFinal}`);
    } else {
        console.log("\nno se ingreso ningun estado, se asignara el estado por defecto: pendiente");
    }
    return estadoFinal;
}


async function pedirDificultad() {
        const respuesta = await normalizarTexto(await input("\ningrese la dificultad de la tarea: 1. facil, 2. media, 3. dificil. [enter para omitir]:\n"));
        const estadosValidos = {
            "1": "facil",
            "2": "media",
            "3": "dificil"
        };
        const estadoFinal = estadosValidos[respuesta] || "facil";
        if (respuesta) {
            console.log(`\nla dificultad ingresada es: ${estadoFinal}`);
        } else {
            console.log("\nno se ingreso ninguna dificultad, se asignara la dificultad por defecto: facil");
        }
        return estadoFinal;
    }


async function cambiarEstado(tareas) {
    const numeroTarea = parseInt(await input("\ningrese el numero de tarea que desea modificar:\n"));
    const tarea = tareas[numeroTarea - 1];
    if (tarea) {
        const nuevoEstado = await pedirEstado();
        tarea.estado = nuevoEstado;
            console.log(`\nel estado de la tarea ${tarea.titulo} ha sido cambiado a ${nuevoEstado}\n`);
                } else {
                    console.log(`\nno se encontro ninguna tarea con el numero ${numeroTarea}\n`);
                }
    
}


async function cambiarDificultadTarea(tareas) {
    const numeroTarea = parseInt(await input("\ningrese el numero de tarea que desea modificar:\n"));
    const tarea = tareas[numeroTarea - 1];
    if (tarea) {
        const nuevaDificultad = await pedirDificultad();
        tarea.dificultad = nuevaDificultad;
        console.log(`\nla dificultad de la tarea ${tarea.titulo} ha sido cambiada a ${nuevaDificultad}\n`);
    } else {
        console.log(`\nno se encontro ninguna tarea con el numero ${numeroTarea}\n`);
    }
}


module.exports = {
    pedirEstado,
    pedirDificultad,
    cambiarEstado,
    cambiarDificultadTarea
};