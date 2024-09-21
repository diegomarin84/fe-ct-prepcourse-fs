function esNuloOIndefinido(valor) {
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:

  var tipovar = typeof(valor)

  if (tipovar == undefined) {
return true
  }

  if (tipovar == null) {
    return true
      }

//else{
  return false
}

module.exports = esNuloOIndefinido(null);

console.log(module.exports)


