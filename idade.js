function veriricarIdade(idade) {

    if (idade == undefined) {
        console.log('você precisa passar uma idade!')
    } else if (typeof idade !== 'number') {
        console.log('Somente numeros permitidos!')
    } else if (idade <= 12) {
        console.log("criança")
    } else if (idade > 12 & idade <= 18) {
        console.log('adolescente')
    } else if (idade > 18 & idade <= 59) {
        console.log('adulto')
    } else if (idade > 59) {
        console.log('idoso')
    }
}

veriricarIdade(60)
