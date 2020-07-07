//Construção e impressão de objetos

const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereço: {
        Rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.Rua}, ${empresa.endereço.numero}`)

//Vetores e Objetos

const programador = {
    nome: 'Bruno',
    idade: 24,
    propriedades: [
        {nome: "C++", especialidade: "Desktop"},
        {nome: "JavaScript", especialidade: "Web/Mobile"}
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.propriedades[0].nome} com especialidade em ${programador.propriedades[0].especialidade}`)
