const {input} = require("./nodeimperativo");
const {pedirDificultad} = require("./mod"); /*importo las funciones que utilizare en este archivo para poder usarlas y asi no repetir codigo*/

/*funcion constructora*/

function Tarea(titulo, descripcion, dificultad) { // creo la funcion constructora para crear objetos de tipo tarea //
    this.titulo = titulo;                         // y asi poder crear varias tareas con sus respectivos atributos //
    this.descripcion = descripcion;
    this.estado = "pendiente";
    this.dificultad = dificultad || "facil";
}

/*metodos en el prototipo*/

Tarea.prototype.cambiarEstado = function (nuevoEstado) {
    this.estado = nuevoEstado;
};

Tarea.prototype.cambiarDificultad = function (nuevaDificultad) {
    this.dificultad = nuevaDificultad;
}

Tarea.prototype.mostrar = function () {
    return `${this.titulo} | ${this.descripcion} | estado: ${this.estado} | dificultad: ${this.dificultad}`;
}


async function agregarTarea(tareas) {
    const titulo = await input("ingrese el titulo de la tarea:"); // await para esperar a que el usuario ingrese el contenido //
    const descripcion = await input("ingrese la descripcion deseada:");
    const dificultad = await pedirDificultad();

    const nueva = new Tarea(titulo, descripcion, dificultad); // creo un nuevo objeto de tipo tarea con los atributos ingresados por el usuario //
    tareas.push(nueva); // agrego la nueva tarea al array de tareas //
    console.log(`la tarea "${titulo}" fue agregada con exito !!`);
}

async function borrarTarea(tareas) {
    const numeroTarea = parseInt(await input("ingrese el numero de tarea que desea borrar: ")); //convierto el input del usuario a un numero entero para poder usarlo como indice del array de tareas //
    const tarea =tareas[numeroTarea - 1];                                                       // resto 1 al numero ingresado por el usuario para poder acceder al indice correcto del array de tareas //
    if (tarea) {
        tareas.splice(numeroTarea - 1, 1); // utilizo splice para eliminar la tarea del array de tareas //
        console.log(`la tarea ${tarea.titulo} ha sido borrada con exito.`);
    }   else {
        console.log(`no se encontro ninguna tarea con el numero ${numeroTarea}`);
    }
}
async function verTarea(tareas) {
    if (tareas.length === 0) {
        console.log("no hay tareas registradas");
        return;
    }
    tareas.forEach((tarea, i) =>{ // utilizo forEach para recorrer el array de tareas y mostrar cada tarea con su respectivo numero de indice //
        console.log(`${i + 1}. ${tarea.mostrar()}`);
    })
}

module.exports = {
    Tarea,
    agregarTarea,
    borrarTarea,
    verTarea
};