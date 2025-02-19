function comprobarprimo (numero)
  {
var esprimo;
    var i;
for(i=numero-1; i>=2; i=i-1)
  {
    if ( numero % i == 0 )
    {
      esprimo = false;
      return esprimo;
    }
    }
esprimo = true;    
return esprimo;
    }
