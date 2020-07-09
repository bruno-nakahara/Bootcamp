const turmaA = [
    {
        nome: 'Bruno',
        nota: 9.5
    },
    {
        nome: 'Mayk',
        nota: 8
    },
    {
        nome: 'Diego',
        nota: 9
    }
]

const turmaB = [
    {
        nome: 'Bruna',
        nota: 7.5
    },
    {
        nome: 'Felipe',
        nota: 5
    },
    {
        nome: 'Carlos',
        nota: 2
    },
    {
        nome: 'Gabriela',
        nota: 10
    }
]

function calculaMedia(alunos) {
    let soma = 0

    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    media = soma / alunos.length

    return media

}

console.log(calculaMedia(turmaA))
console.log(calculaMedia(turmaB))

