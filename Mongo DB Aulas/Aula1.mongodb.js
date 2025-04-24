// CONSTANTE QUE DEFINI O NOME DO BANCO DE DADOS

const database = 'BD_AULA'

// CONSTANTE QUE DEFINI O NOME DA COLEÇÃO DE DADOS

const collection = 'Bd_aula-livraria'

// DEFINIR BANCO DE DADOS UTILIZADO:

use(database);

// DEFINIR/CRIA COLEÇÃO DO BANCO DE DADOS UTILIZADO:

db.createCollection(collection)