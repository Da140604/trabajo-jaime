function saynumber (min, max) {
  var numero;
  do {
    numero = prompt("Ingresa un número entre " + min +" y " + max + ":");
    numero = Number(numero);
  }  while ( numero < min || numero > max);

return numero;
}
