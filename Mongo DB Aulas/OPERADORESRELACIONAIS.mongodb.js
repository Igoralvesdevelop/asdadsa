 use('Bd_aula-livraria');

//db['LIVRARIA'].find();

/* seleciona liros em um intervalo de valores:
entre 100 e 150 
usop dos operadores relacionais $gte > / = e $lte < / =*/

/* db['LIVRARIA'].find({
    valor : {$gte: 100, $lte:150}
});*/


 /* seleciona livros da categoria 'Fantasia
 heroica' e com valores menor ou igual a 100
 Operador Lógicos:$and
 Operador Relacional: $lte
  Operador Relacional: $eq

 /*db['LIVRARIA'].find({
   $and : [ 
        {categoria:{$eq: "Fantasia Heroica" }},
        {valor: {$lte : 100 }}

   ]
}); 

 seleciona livros da categoria 'Fantasia heroica' ou
 com valores menor ou igual a 100
 Operador Lógicos:$or
 Operador Relacional: $lte
  Operador Relacional: $eq




db['LIVRARIA'].find({
   $or : [
        {valor: {$lte : 150 }},
        {autor: /tolkien/i}

   ]

}) 
seleciona todos os livros do autor tolkien e ordena 
nome do autor possua a palavra tolkien sem 
diferenciar maiusculas de minusculas 
 Operador Lógico:$or
 Operador Relacional: $lte
 e uso de REGEX insentivo do mongodb
*/ 


/*

SELECIONA  LIVROS  QUE CONTENHA O NOME DE AUTOR Isaac Asimov>
OPERADOR RELACIONAL 
*/ 
db['LIVRARIA'].find({
   autor : {
    $in: ['Isaac Asimov']
   }
},{
    _id  : 0,
    codigo: 0
}).sort({valor : 1}) 