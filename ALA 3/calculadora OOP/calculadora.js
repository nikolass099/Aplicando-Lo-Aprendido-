/*importamos desde la libreria
nodeimperativo el input y close
*/
const { input, close } = require("./nodeimperativo");

/*creamos class calculadora*/

class calculadora {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    sumar() {
        return this.num1 + this.num2;
    }

    restar() {
        return this.num1 - this.num2;
    }

    dividir() {
        return this.num1 / this.num2;
    }

    multiplicar() {
        return this.num1 * this.num2;
    }
}

/*funcion principal main*/

async function main() {

    let num1 = Number(await input("Ingrese el primer número: "));
    let num2 = Number(await input("Ingrese el segundo número: "));
    
    const calc = new calculadora(num1, num2);

    let opcion = Number(await input("Ingrese la opción deseada: 1. Suma, 2. Resta, 3. División, 4. Multiplicación: "));
    
    switch (opcion) {
        case 1:
            console.clear()
            console.log (`${num1} + ${num2} = ${calc.sumar()}`);
            break;

        case 2:
            console.clear();
            console.log(`${num1} - ${num2} = ${calc.restar()}`);
            break;

        case 3:
            console.clear();
            console.log(`${num1} / ${num2} = ${calc.dividir()}`);
            break;

        case 4:
            console.clear();
            console.log(`${num1} * ${num2} = ${calc.multiplicar()}`);
            break;

        default:
            console.log("error");
            break;
    }

    close();

}

main()