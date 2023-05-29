let bomba = "💣";
console.log(bomba)

function regresivo(variable) {
    for (let cifra = 12; cifra >= variable; cifra--) {
      console.log(cifra);
    }
    console.log("¡Despegando y dejando la bomba atrás!");  
  }
  
  regresivo(0);
  let bomba2 = "💣 🎆";
  console.log(bomba2);