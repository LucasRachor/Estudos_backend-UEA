function verificarNum(num1) {

    if (num1 == undefined) {
        console.log('você precisa passar uma idade!')
    } else if (typeof num1 !== 'number') {
        console.log('Somente numeros permitidos!')
    }
    else if (num1 % 2 === 0) {
        console.log('par')
    } else {
        console.log('impar')
    }
}

verificarNum()
