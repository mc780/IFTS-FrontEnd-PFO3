//Ejercicio 1: Calcular el area de un rectangulo
/* Escribe una función que reciba la longitud y el ancho de un rectángulo y devuelva su área.
La funcion no debe devolver un console.log() sino retornar un valor, llamaremos a la funcion dentro de un
console.log() . */

const calcularAreaRectangulo = (longitud, ancho) => {
    let area = longitud * ancho;
    return "Solución 1: " + area;
}
/* para su resolución primero se debe conocer
la fórmula para sacar el área de un rectángulo, que es la multiplicación del ancho por el largo. Entonces se pasarán por parámetro el ancho y el largo del rectángulo y al llamar a la función almaceno la multiplicación de estos números en la variable área y por último le indicamos a la función que retorne mediante return area  */
console.log(calcularAreaRectangulo(5, 3))
console.log(calcularAreaRectangulo(6, 1))
console.log(calcularAreaRectangulo(10, 0))


console.log("///////////////////////////////")

//Ejercicio 2: Contar palabras en una cadena
/* Escribe una función que reciba una cadena de texto (string) y devuelva la cantidad de palabras en la cadena
*/
const contarPalabras = (palabras) => {
    let contadorLetras1 = 0;
    let contadorLetras2 = 1;
    let contadorEspacios = 1;
    let letras = [];

    for (i = 0; i < palabras.length; i++) {
        letras[i] = palabras.slice(contadorLetras1++, contadorLetras2++)

        if (letras[i] == " ") {
            contadorEspacios++;
        }

    }
    return "Solución 2: " + contadorEspacios;
}
/* En primer lugar, se crea la función contarPalabras y se pasa por parámetro la palabra ingresada. Luego se 
va a iterar con el bucle For desde 0 hasta (palabras.length) que es la cantidad de caracteres o espacios o números que tiene la cadena ingresada. 
La idea es guardar cada letra pasada por parámetro en un array (letras), y así poder contar cuántos espacios en blanco hay, lo que indicaría que se termina una palabra.
Para ello se usa el método slice() que corta caracteres en posiciones determinadas.
Entonces se crean 2 contadores que incrementan en cada iteración, uno que indica el lugar donde va a comenzar a cortar (contadorLetras1) y otro donde finaliza (contadorLetras2) y se definen en palabras.slice(contadorLetras1++,contadorLetras2++).
Se crea el condicional y la variable contadora de espacios en blanco donde va a incrementar en 1 si encuentra un espacio en blanco y por último se retorna la variable. Se define incialmente en 1 porque considera la última palabra que no tiene espacios.
*/
console.log(contarPalabras("Humahuaca es un lugar copado"));
console.log(contarPalabras("desarrollo front end"));
console.log(contarPalabras("sólo se que no se nada"));
console.log("///////////////////////////////")

// Ejercicio 3. Invertir una cadena
/* Escribe una función que tome una cadena como parámetro y devuelva la cadena invertida*/

const invertirCadena = (cadena) => {
    let letras = [];
    let cadenaInvertida = '';
    let contador1 = 0;
    let contador2 = 1;
    for (i = 0; i < cadena.length; i++) {
        letras[i] = cadena.slice(contador1++, contador2++)
    }
    for (i = letras.length - 1; i > -1; i--) {
        cadenaInvertida = cadenaInvertida + letras[i]
    }
    return "Solución 3: " + cadenaInvertida;
}

/* Se crea un bucle For que comienza en 0 hasta el número de letras que tiene la palabra ingresada (con palabras.length) y se guarda cada letra en posiciones en un array.
Luego se crea otro bucle For que va a inicializarse desde la cantidad de letras que tiene la palabra hasta 0 decrementándose en cada iteración y cada letra se va a guardar desde la última hasta la primera en la variable acumuladora "cadenaInvertida". Por último se retorna la variable. 
*/
console.log(invertirCadena("hola"));
console.log(invertirCadena("palabra"));
console.log(invertirCadena("electroencefalografista"));
console.log("///////////////////////////////")

//4. Encontrar el palíndromo
/* Escribe una función que reciba un string y devuelva true o false si el string es un palíndromo
*/
const esPalindromo = (string) => {
    let contador3 = 0;
    let contador4 = 1;
    let contador5 = string.length;
    let esPalindromo = 0;
    arrayCadena = [];

    //Almacena las letras de la cadena en el array
    for (i = 0; i < string.length; i++) {
        arrayCadena[i] = string.slice(contador3++, contador4++)
    }
    //compara las letras del array
    for (i = 0; i < arrayCadena.length; i++) {
        if (arrayCadena[i] == arrayCadena[contador5 = contador5 - 1]) {
            esPalindromo++
        }
    }
    //condicional si el numero de aciertos es igual a la cantidad de letras de la cadena
    if (esPalindromo == string.length) {
        return "Solución 4: " + true;
    }
    else {
        return "Solución 4: " + false;
    }
}

/* Primero se almacenan las letras en un array. Luego se comparan todas las letras: si la primera letra es igual a la última, si la segunda es igual a la anteúltima, y así sucesivamente. Se utiliza el bucle for inicializado en 0 que se incrementa en 1 y el contador5 en el número de posiciones del array que se decrementa en 1. Finalmente se implementa un condicional que compara: si el número de aciertos es igual al número de posiciones del arrayCadena, entonces es porque todas las letras coincidieron. */

console.log(esPalindromo("neuquen"));
console.log(esPalindromo("reconocer"));
console.log(esPalindromo("rallar"));
console.log(esPalindromo("palabra"));
console.log("///////////////////////////////")

//5. Crear un programa para convertir la edad de un perro a años humanos.
/*Escribe una función que tome un valor de un usuario, utilizando una ventana emergente prompt y calcule la edad canina, que equivale a 7 veces la edad humana.
Esta funcion no debe devolver un valor sino mostrar por consola un mensaje como el del ejemplo.*/

const edadCanina = (edadCanina) => {
    edadCanina = prompt("Ingrese una edad canina");
    let edadHumana = edadCanina * 7;

    if (!isNaN(edadCanina) && edadCanina > 0) {
        console.log("Solución 5: Tu perro tiene " + edadHumana + " años humanos.");
    } else if (edadCanina <= 0 || edadCanina === null || isNaN(edadCanina)) {
        console.log("Solución 5: Ingrese una edad correcta.")
    }
}
/*Se implementa un condicional que valida que el valor del prompt ingresado no sea una cadena, nulo o igual o menor a 0 y luego se calcula la edad canina multiplicando el valor ingresado por 7 e imprimiendo por consola la edad humana o si se ingresaron datos erroneos.  */
edadCanina(7);
