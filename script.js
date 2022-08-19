const estudante = {
    nome:'Thais',
    sobrenome:'Cariri',
    matricula: 201630050202,
    notas:[7,8.5,9,]
}
console.log('Objeto estudante',estudante)
// add uma nova propriedade ao objeto
estudante.modulo = 'HTML'

// imprimindo informações do objeto estudante
console.log('nome da pesso estudante',estudante.nome)
console.log('segunda nota do semestre',estudante.notas[1])
console.log('modulo atual:',estudante.modulo)

// fazendo copia do objeto estudante

const copiaEstudante = {...estudante}
//  alterando o valor da propriedade nome
copiaEstudante.nome = 'astrodev'
// add a nota 9 às notas do semestre
// copiaEstudante.notas.push(9)
copiaEstudante.notas = [...copiaEstudante.notas,9]
// alterando o valor da propriedade modulo 
copiaEstudante.modulo = 'flexbox e grid'

console.log('copia Estudante',copiaEstudante)

// criação do array estudante labenu 
const estudanteLabenu = []
estudanteLabenu.push (estudante)
estudanteLabenu.push (copiaEstudante)

console.log('Array de estudantes da Labenu',estudanteLabenu)

// exercicio de fixação 

let carrinho = {
    nome:'Thais',
    pagamento:'pix',
    endereco:' P Sherman 42 Wallaby Way, Sydney,'
}

console.log('carrinho ',carrinho)

carrinho.compras = [
    {
        item:'blusa',
        preco:45.00,
        qtd:1
    },
    {
        item:'calça',
        preco: 65.00,
        qtd : 2
    },
    {
        item:'vestido',
        preco: 85.00,
        qtd: 1
    }
]

console.log('quantidade de compras',carrinho.compras.length)

carrinhoPresente = {...carrinho}

carrinhoPresente.nome = 'niobe'
carrinhoPresente.pagamento = 'cartão presente'

console.log('presente',carrinhoPresente)
