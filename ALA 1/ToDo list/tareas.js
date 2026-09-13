const {input} = require("./nodeimperativo");
const {pedirEstado, pedirDificultad} = require("./mod");

function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}

async function agregarTarea(tareas) {
    const titulo = await normalizarTexto(await input("ingrese el titulo que desea:"));
    if (!titulo) {
        console.log("el titulo es obligatorio, no se creo la tarea");
        return;
    }
    console.log(`el titulo ingresado es: ${titulo}`);

    const descripcion = await normalizarTexto(await input("ingrese la descripcion que desea [enter sin descripcion]:"));
    console.log(`la descripcion ingresada es: ${descripcion}`);

    const estado = await pedirEstado();
    console.log(`el estado ingresado es: ${estado}`);

    const dificultad = await pedirDificultad();
    console.log(`la dificultad ingresada es: ${dificultad}`);

    tareas.push({
        titulo,
        descripcion: descripcion || "Sin descripcion",
        estado,
        dificultad,
        fechaCreacion: new Date()
    });
    console.log("tarea creada correctamente");

}

async function borrarTarea(tareas) {
    const numeroTarea = parseInt(await input("ingrese el numero de tarea que desea borrar:"));
    const tarea = tareas[numeroTarea - 1];
    if (tarea) {
        tareas.splice(numeroTarea - 1, 1);
        console.log(`la tarea ${tarea.titulo} ha sido borrada`);
    } else {
        console.log(`no se encontro ninguna tarea con el numero ${numeroTarea}`);
    }
}


async function verTareas(tareas) {
    if (tareas.length === 0) {
        console.log("no hay tareas registradas");
    } else {
        console.log("tareas: ", tareas);
    }
}

module.exports = {
    agregarTarea,
    borrarTarea,
    verTareas
};