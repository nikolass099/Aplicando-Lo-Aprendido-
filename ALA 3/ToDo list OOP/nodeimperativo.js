const readline = require ("readline");

const rl = readline.createInterface({ // creo la interfaz de readline para poder usar la funcion input //
    input: process.stdin,
    output: process.stdout
});

function input(question) { // creo la funcion input para poder recibir input del usuario y asi poder interactuar con el programa //
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

function close() { // creo la funcion close para poder cerrar la interfaz de readline y asi poder finalizar el programa //
    rl.close();
}

module.exports = { // exporto las funciones para poder usarlas en otros archivos //
    input,
    close
};
