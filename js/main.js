function mensaje () {
calcularUnidades(prompt("Cual fue el valor de azucar en sangre?"));
}

function calcularUnidades (nivelAzucar) {
  if (nivelAzucar < 60) {
    alert("Tu nivel de azucar es demasiado bajo, considerá llamar a un especialista")
  } else if (nivelAzucar >= 140 && nivelAzucar <= 160) {
    alert("Debes administrarte 2 unidades de insulina rápida");
  } else if (nivelAzucar >= 161 && nivelAzucar <= 180) {
    alert("Debes administrarte 3 unidades de insulina rápida");
  } else if (nivelAzucar >= 181 && nivelAzucar <= 200) {
    alert("Debes administrarte 4 unidades de insulina rápida");
  } else if (nivelAzucar >= 201 && nivelAzucar <= 220) {
    alert("Debes administrarte 5 unidades de insulina rápida");
  } else if (nivelAzucar >= 221 && nivelAzucar <= 240) {
    alert("Debes administrarte 6 unidades de insulina rápida");
  } else if (nivelAzucar >= 241 && nivelAzucar <= 260) {
    alert("Debes administrarte 7 unidades de insulina rápida");
  } else if (nivelAzucar >= 261 && nivelAzucar <= 280) {
    alert("Debes administrarte 8 unidades de insulina rápida");
  } else if (nivelAzucar >= 281 && nivelAzucar <= 300) {
    alert("Debes administrarte 9 unidades de insulina rápida");
  } else if (nivelAzucar > 300) {
    alert("Debes administrarte 10 unidades de insulina rápida");
  } else {
    alert("Tu nivel de azucar está dentro de los parametros normales")
  }
}

function generarListado() {
  let nivelAzucarInicial = 140;
  let unidadesIniciales = 2;
  let nivelAzucar = nivelAzucarInicial;
  let unidadesInsulina = unidadesIniciales;
  let listado = "";

  for (i = 0; i < 9; i++) {
    listado += "Nivel de azúcar: " + nivelAzucar + " - Unidades de insulina: " + unidadesInsulina + "\n";
    nivelAzucar += 20;
    unidadesInsulina++;
  }

  alert(listado);
}










