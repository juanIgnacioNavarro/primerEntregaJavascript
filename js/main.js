let turno = confirm("¿Desea reservar un turno?");

if (turno) {
  let dia = prompt("Ingrese día");
  console.log(dia);

  if (dia === "lunes" || dia === "martes" || dia === "miércoles" || dia === "jueves" || dia === "viernes") {
    console.log("1: oftalmólogo");
    console.log("2: cardiólogo");
    console.log("3: dentista");

    let reserva = prompt("Ingrese especialidad");

    switch (reserva) {
      case "1":
        console.log("Ha seleccionado la especialidad de oftalmología");
        break;
      case "2":
        console.log("Ha seleccionado la especialidad de cardiología");
        break;
      case "3":
        console.log("Ha seleccionado la especialidad de dentista");
        break;
      case "4":
        console.log("Fin del proceso de reserva");
        break;
      default:
        console.log("Fallo la reserva, inténtelo más tarde");
        break;
    }
  } else {
    console.log("El día ingresado no es válido para reservas");
  }
} else {
  console.log("Reserva incorrecta");
}

let semana;
let semanaValida = false;

while (!semanaValida) {
  semana = prompt("Seleccione una opción para la semana:\n1. Esta semana\n2. La siguiente\n3. Próxima semana\n4. Dentro de un mes");

  switch (semana) {
    case "1":
        semanaValida = true;
    case "2":
        semanaValida = true;
    case "3":
        semanaValida = true;
    case "4":
      semanaValida = true;
      break;
    default:
      console.log("Opción de semana inválida. Por favor, seleccione una opción válida.");
      break;
  }
}

let fechaInicioSemana;

switch (semana) {
  case "1":
    fechaInicioSemana = "La proxima semana";
    break;
  case "2":
    fechaInicioSemana = "Dentro de dos semanas";
    break;
  case "3":
    fechaInicioSemana = "Dentro de tres semanas";
    break;
  case "4":
    fechaInicioSemana = "Dentro de un mes";
    break;
}

console.log("Fecha del turno:", fechaInicioSemana);