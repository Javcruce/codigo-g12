function esPositivo(numero) {
    if (Math.round(numero) > 0 ){
        return "Es positivo";
    }   else if (Math.round(numero) < 0) {
        return "Es Negativo";
    }   else {
        return false;
    }
}

function isPositive(number) {
    if (number === 0) return false;
  
    return number > 0 ? "positivo" : "negativo";
  }

  const resultado1 = esPositivo(5);
  const resultado2 = esPositivo(-3);
  const resultado3 = esPositivo(0);
  
  console.log(resultado1)
  console.log(resultado2)
  console.log(resultado3)