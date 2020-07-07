// // Usuários e tecnologias

// const usuarios = [

//     { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
//     { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//     { nome: "Tuane", tecnologias: ["HTML", "Node.js"] },
//     { nome: "Bruno", tecnologias: ["CSS", "Vue"] },
//     { nome: "Mayk", tecnologias: ["CSS", "Node.js"] },

// ]

// for (let i = 0; i < usuarios.length; i++) {
//     console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
// }

// //Busca por tecnologia

// for (let i = 0; i < usuarios.length; i++) {
//     const usuarioTrabalhaComCSS = checkCSS(usuarios[i])

//     if (usuarioTrabalhaComCSS) {
//         console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
//     } else {
//         console.log(`O usuário ${usuarios[i].nome} não trabalha com CSS`)
//     }
// }

// function checkCSS (usuario) {

//     let condição    
    
//     for (let j = 0; j < usuario.tecnologias.length; j++) {
        
//         if ( usuario.tecnologias[j] == 'CSS') {
//             condição = true
//             break
//         } else {
//             condição = false
//         }
//     }
//     return condição
// }

//Soma de despesas e receitas

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

  for (let i = 0; i < usuarios.length; i++) {
      let saldo = 0
      saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas)
      if (saldo >= 0) {
        console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldo}`)
      } else {
        console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo}`)
      }
      
  }


  function calculaSaldo(receita, despesa) {

      const somaReceita = somaNumeros(receita)
      const somaDespesa = somaNumeros(despesa)
      const resultado = somaReceita - somaDespesa

      return resultado
  }

  function somaNumeros(vetor) {
      let soma = 0
      for (let j = 0; j < vetor.length; j++ ) {
          soma = soma + vetor[j]
      }
      return soma

  }