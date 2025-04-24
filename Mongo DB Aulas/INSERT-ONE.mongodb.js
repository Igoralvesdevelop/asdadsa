// CONSTANTE QUE DEFINI O NOME DO BANCO DE DADOS

const database = 'BD3_AULA1'

// DEFINIR BANCO DE DADOS UTILIZADO:

use(database);

// EXEMPLO DE INSERÇÃO DE UM ARQUIVO

db['LIVRARIA'].insertOne({
    "codigo":"2",
      "titulo": "As Cavernas de Aço ",
      "autor": "Isaac Asimov",
      "descricao": "As Cavernas de Aço, de Isaac Asimov, é o segundo romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais.",
      "valor": 120,
      "categoria":"Ficção Científica"
})