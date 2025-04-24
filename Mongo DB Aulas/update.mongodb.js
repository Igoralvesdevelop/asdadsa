
use('Bd_aula-livraria');

//Atualização de dados ddelivro (UPDATE-ONE)
// db['LIVRARIA'].updateOne(
//   { 'codigo': 1 },
//   { $set: { 'valor': 200 } }
// )
//seleçao do livro de alteração
//db['LIVRARIA'].find({'titulo':'As Cavernas de Aço'})


//Atualização de dados ddelivro (UPDATE-many)
// db['LIVRARIA'].updateMany(
//   {'autor':'J.R.R Tolkien'},
//   {$set:{'autor':'JonhRonald Reuel Tolkien'}}
// )
//seleçao do livro de alteração
db['LIVRARIA'].find({'autor':'JonhRonald Reuel Tolkien'})