// CONSTANTE QUE DEFINI O NOME DO BANCO DE DADOS

const database = 'Bd_aula-livraria'

// DEFINIR BANCO DE DADOS UTILIZADO:

use(database);

// EXEMPLO DE FIND DE UM ARQUIVO ONDE SELECIONA TUDO SEM CRITÉRIOS

// db['LIVRARIA'].find();

// EXEMPLO DE FIND DE UM ARQUIVO ONDE SELECIONA TUDO COM CRITÉRIOS

// Exenplo de seleção sem criterio
db['LIVRARIA'].find()
// EXEMPLO de seleção com criterio

// db['LIVRARIA'].find({"categoria":"Fantasia Heroica"}, {"_id":0, "codigo":0});

// db['LIVRARIA'].find({'descricao':/Robôs/i})
// Seleciona Dados apartir de incidencia de textos


