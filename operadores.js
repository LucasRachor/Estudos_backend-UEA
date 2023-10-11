function somar(num1, num2) {

    if (num1 == undefined || num2 == undefined) {
        console.log('Você precisa passar 2 valores!')
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Somente números permitidos!')
    } else {
        console.log('a soma de',num1,'+',num2,'é:', num1 + num2)
    }
}

function subtrair(num1, num2) {

    if (num1 == undefined || num2 == undefined) {
        console.log('Você precisa passar 2 valores!')
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Somente números permitidos!')
    } else {
        console.log('a subtração de',num1,'-',num2,'é:', num1 - num2)
    }
}

function multiplicar(num1, num2) {

    if (num1 == undefined || num2 == undefined) {
        console.log('Você precisa passar 2 valores!')
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Somente números permitidos!')
    } else {
        console.log('a operação de',num1,'*',num2,'é:', num1 * num2)
    }
}

function dividir(num1, num2) {

    if (num1 == undefined || num2 == undefined) {
        console.log('Você precisa passar 2 valores!')
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Somente números permitidos!')
    } else {
        console.log('a operação de',num1,'/',num2, 'é:',(num1 / num2).toFixed(0))
    }
}

function potencia(num1, num2) {

    if (num1 == undefined || num2 == undefined) {
        console.log('Você precisa passar 2 valores!')
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Somente números permitidos!')
    } else {
        console.log(num1,'elevado a',num2,'é:', num1 ** num2)
    }
}

somar(12, 32)
subtrair(234, 15)
multiplicar(5, 3)
dividir(10, 2)
potencia(10, 2)