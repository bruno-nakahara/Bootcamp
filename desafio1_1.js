const nome = 'Bruno'

const peso = 100

const altura = 1.75

const sexo = 'M'

const idade = 20

const contribuição = 3

// Calculo de IMS

const imc = peso / (altura * altura)

if (imc >= 30){
    console.log(`${nome} você está acima do peso`)
} else {
    console.log(`${nome} você não está acima do peso`)
}


// Calculo de aposentadoria

if (sexo == 'M' && contribuição >= 35) {
    if ((contribuição + idade) >= 95){
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }

} else if (sexo == 'F' && contribuição >= 30) {
    if ((contribuição + idade) >= 85){
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }

} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}