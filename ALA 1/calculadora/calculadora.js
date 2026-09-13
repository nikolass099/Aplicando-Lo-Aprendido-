/*importamos desde la libreria
nodeimperativo el input y close
*/
const { input, close } = require("./nodeimperativo");

/*funcion principal de la calculadora*/

async function claculadora() {

    let num1 = Number(await input("Ingrese el primer número: "));
    let num2 = Number(await input("Ingrese el segundo número: "));
    console.log("hola los numeros ingresados son: ", num1, "y", num2);

    let resultado;
    let result = Number(await input("Ingrese la opción deseada: 1. Suma, 2. Resta, 3. División, 4. Multiplicación: "));
    
    switch (result) {
        case 1:
            console.clear()
            resultado = num1 + num2
            console.log (`${num1} + ${num2} = ${resultado}`);
            break;

        case 2:
            console.clear();
            resultado = num1 - num2;
            console.log(`${num1} - ${num2} = ${resultado}`);
            break;

        case 3:
            console.clear();
            resultado = num1 / num2;
            console.log(`${num1} / ${num2} = ${resultado}`);
            break;

        case 4:
            console.clear();
            resultado = num1 * num2;
            console.log(`${num1} * ${num2} = ${resultado}`);
            break;

        default:
            console.log("error");
            break;
    }

    close();

}

claculadora()