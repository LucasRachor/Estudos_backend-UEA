function maiorNumero(num1, num2) {

    if (num1 == undefined || num2 == undefined) {
        console.log('você precisa passar 2 números!')
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('somente números permitidos!')
    } else if (num1 == num2) {
        console.log('os dos números são iguais!')
    } else if (num1 > num2) {
        console.log(num1)
    } else {
        console.log(num2)
    }
}

maiorNumero(132)
