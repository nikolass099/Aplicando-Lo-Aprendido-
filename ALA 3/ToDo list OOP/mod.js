const {input} = require("./nodeimperativo"); /* importo la funcion input del archivo nodeimperativo.js para poder usarla en este archivo */

function normalizarTexto(texto) { /* creo la funcion normalizarTexto para poder usarla en otras funciones y asi no repetir codigo */
    return texto.trim().toLowerCase();
}

async function pedirEstado() { /* creo la funcion de forma asyncrona para poder usar await dentro de ella */
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
        const estadoFinal = estadosValidos[respuesta] || "facil"; /* dejo por default la dificultad en facil si no se ingresa ninguna dificultad */
        if (respuesta) {
            console.log(`la dificultad ingresada es: ${estadoFinal}`);
        } else {
            console.log("no se ingreso ninguna dificultad, se asignara la dificultad por defecto: facil");
        }
        return estadoFinal;
    }


async function cambiarEstado(tareas) { /* creo la funcion y le agrego su parametro tareas para que pueda acceder a la lista de tareas */
    const numeroTarea = parseInt(await input("ingrese el numero de tarea que desea modificar:"));
    const tarea = tareas[numeroTarea - 1];
    if (tarea) {
        const nuevoEstado = await pedirEstado();
        tarea.cambiarEstado(nuevoEstado); // metodo del prototipo
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
        tarea.cambiarDificultad(nuevaDificultad); /* llamo al metodo del prototipo para cambiar la dificultad de la tarea */
        console.log(`la dificultad de la tarea ${tarea.titulo} ha sido cambiada a ${nuevaDificultad}`);
    } else {
        console.log(`no se encontro ninguna tarea con el numero ${numeroTarea}`);
    }
}

/* exporto las funciones para poder usarlas en otros archivos */
module.exports = {
    pedirEstado,
    pedirDificultad,
    cambiarEstado,
    cambiarDificultadTarea
};