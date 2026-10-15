
const {input} = require("./nodeimperativo");
const {pedirEstado, pedirDificultad} = require("./mod");

function normalizarTexto(texto) {      // Función para normalizar el texto ingresado por el usuario,
    return texto.trim().toLowerCase(); // Eliminando espacios en blanco al inicio y al final, y convirtiendo todo a minúsculas
}

async function agregarTarea(tareas) {
    const titulo = await normalizarTexto(await input("\ningrese el titulo que desea:\n")); 
    if (!titulo) {
        console.log("\n el titulo es obligatorio, no se creo la tarea\n");
        return;
    }
    console.log(`\n el titulo ingresado es: ${titulo}`);

    const descripcion = await normalizarTexto(await input("\ningrese la descripcion que desea [enter sin descripcion]:\n"));
    console.log(`\nla descripcion ingresada es: ${descripcion}`);

    const estado = await pedirEstado();

    const dificultad = await pedirDificultad();

    tareas.push({
        titulo,
        descripcion: descripcion || "Sin descripcion",
        estado,
        dificultad,
        fechaCreacion: new Date()
    });
    console.log("\ntarea creada correctamente\n");

}

async function borrarTarea(tareas) {
    const numeroTarea = parseInt(await input("\ningrese el numero de tarea que desea borrar:\n"));
    const tarea = tareas[numeroTarea - 1];
    if (tarea) {
        tareas.splice(numeroTarea - 1, 1);
        console.log(`\nla tarea ${tarea.titulo} ha sido borrada\n`);
    } else {
        console.log(`\nno se encontro ninguna tarea con el numero ${numeroTarea}\n`);
    }
}


async function verTareas(tareas) {
    if (tareas.length === 0) {
        console.log("\nno hay tareas registradas\n");
    } else {
        console.log("\ntareas: ", tareas, "\n");
    }
}

module.exports = {
    agregarTarea,
    borrarTarea,
    verTareas
};