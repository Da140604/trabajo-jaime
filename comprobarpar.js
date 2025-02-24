function comprobarpar (numero)
  {
var espar;
    var i;
for(i=numero-1; i>=2; i=i-1)
  {
    if ( numero % i == 0 )
    {
      espar = false;
      return espar;
    }
    }
noespar = true;    
return noespar;
    }
