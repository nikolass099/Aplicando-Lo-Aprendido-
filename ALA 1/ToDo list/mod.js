const {input} = require("./nodeimperativo");

function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}

async function pedirEstado() {
    const respuesta = await normalizarTexto(await input("ingrese el estado que desea (1. pendiente, 2. en progreso, 3. completada, 0. cancelada)[enter para omiti]:"));
    const estadosValidos = {
        "1": "pendiente",
        "2": "en progreso",
        "3": "completada",
        "0": "cancelada"
    };
    const estadoFinal = estadosValidos[respuesta] || "pendiente";
    if (respuesta) {
        console.log(`el estado ingresado es: ${estadoFinal}`);
    } else {
        console.log("no se ingreso ningun estado, se asignara el estado por defecto: pendiente");
    }
    return estadoFinal;
}


async function pedirDificultad() {
        const respuesta = await normalizarTexto(await input("ingrese la dificultad de la tarea: 1. facil, 2. media, 3. dificil. [enter para omitir]"));
        const estadosValidos = {
            "1": "facil",
            "2": "media",
            "3": "dificil"
        };
        const estadoFinal = estadosValidos[respuesta] || "facil";
        if (respuesta) {
            console.log(`la dificultad ingresada es: ${estadoFinal}`);
        } else {
            console.log("no se ingreso ninguna dificultad, se asignara la dificultad por defecto: facil");
        }
        return estadoFinal;
    }


async function cambiarEstado(tareas) {
    const numeroTarea = parseInt(await input("ingrese el numero de tarea que desea modificar:"));
    const tarea = tareas[numeroTarea - 1];
    if (tarea) {
        const nuevoEstado = await pedirEstado();
        tarea.estado = nuevoEstado;
            console.log(`el estado de la tarea ${tarea.titulo} ha sido cambiado a ${nuevoEstado}`);
                } else {
                    console.log(`no se encontro ninguna tarea con el numero ${numeroTarea}`);
                }
    
}


async function cambiarDificultadTarea(tareas) {
    const numeroTarea = parseInt(await input("ingrese el numero de tarea que desea modificar:"));
    const tarea = tareas[numeroTarea - 1];
    if (tarea) {
        const nuevaDificultad = await pedirDificultad();
        tarea.dificultad = nuevaDificultad;
        console.log(`la dificultad de la tarea ${tarea.titulo} ha sido cambiada a ${nuevaDificultad}`);
    } else {
        console.log(`no se encontro ninguna tarea con el numero ${numeroTarea}`);
    }
}


module.exports = {
    pedirEstado,
    pedirDificultad,
    cambiarEstado,
    cambiarDificultadTarea
};