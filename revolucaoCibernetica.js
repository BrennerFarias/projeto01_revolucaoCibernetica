const prompt = require ('prompt-sync')()

//Revolução Cibernética

let nomeAgente = prompt('Digite seu nome de agente: ').toLowerCase()
let especialidade = prompt('Digite sua especialidade: ').toLowerCase()
let idade = parseInt(prompt('Digite sua idade: '))
let ranking = parseFloat(prompt('Pontuação em ranking: '))
console.log(`Bem-vindo, ${nomeAgente}. Um(a) ${especialidade} destemindo(a) de ${idade} anos.`)
console.log('Sua jornada contra as IAs rebeldes começa agora!')

//Portão de acesso
let veterano = prompt('Você é veterano sim ou não? ').toLowerCase() === 'sim'

if (idade >= 18 && ranking >= 75.5 && veterano === true) {
    console.log('Acesso permitido!')
    console.log(`Você por ser veterano, recebeu +10% na pontução. Total: ${(ranking * 0.1) + ranking}`)
    console.log(`Parabéns, ${nomeAgente}! Você invadiu os servidores e a resistência conta com sua força!`)
} else if (idade >= 18 && ranking >= 75.5 && veterano !== true) {
    console.log('Acesso permitido!')
    console.log(`Você não é veterano, mas te damos um bônus de + 5pts sua pontuação aumentou para: ${ranking + 5}`)
    console.log(`Parabéns, ${nomeAgente}! Você invadiu os servidores e a resistência conta com sua força!`)
} else {
    console.log(`Infelizmente, ${nomeAgente}, suas defesas foram insuficientes. Mas a resistência sempre estará esperando por você.`)
}


