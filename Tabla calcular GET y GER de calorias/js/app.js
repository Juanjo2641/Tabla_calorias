$(document).ready(function () {
  $("#Guardar").click(function () {
      var nombre = $("#Nombre").val();
      var apellidos = $("#Apellidos").val();
      var sexo = $("#Sexo").val();
      var actividad = $("#Actividad").val();
      var edad = $("#Edad").val();
      var altura = $("#Altura").val();
      var peso = $("#Peso").val();

      var getKcal;
      var gerKcal;

      // Validar campos obligatorios
    if (!nombre || !apellidos || !sexo || !actividad || !edad || !peso || !altura) {
        alert("Por favor, rellene todos los campos obligatorios");
        return false;
      }

      if (sexo == "Hombre") {
          getKcal = (13.707 * peso) + (5 * altura) - (6.755 * edad) + 66;
          if (actividad == "sedentaria") {
              gerKcal = getKcal * 1.2;
          } else if (actividad == "media") {
              gerKcal = getKcal * 1.55;
          } else if (actividad == "intensa") {
              gerKcal = getKcal * 1.725;
          }
      } else if (sexo == "Mujer") {
          getKcal = (9.563 * peso) + (1.85 * altura) - (4.676 * edad) + 655;
          if (actividad == "sedentaria") {
              gerKcal = getKcal * 1.2;
          } else if (actividad == "media") {
              gerKcal = getKcal * 1.55;
          } else if (actividad == "intensa") {
              gerKcal = getKcal * 1.725;
          }
      }

      var newRow = $("<tr>");
      var cols = "";

      cols += "<td>" + nombre + "</td>";
      cols += "<td>" + apellidos + "</td>";
      cols += "<td><span class='badge text-bg-primary'>" + sexo + "</span></td>";
      cols += "<td>" + edad + "</td>";
      cols += "<td>" + altura + "</td>";
      cols += "<td>" + peso + "</td>";
      cols += "<td><span class='badge text-bg-secondary'>" + actividad + "</span></td>";
      cols += "<td>" + getKcal + "</td>";
      cols += "<td>" + gerKcal + "</td>";

      newRow.append(cols);
      $("#table_add tbody").append(newRow);
  });


  const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

// Obtener el botón y la tabla
var btnCargar = document.getElementById("inputCarga");
var tablaClientes = document.getElementById("table_add");

// Agregar un evento de clic al botón
btnCargar.addEventListener("click", function () {
  // Hacer una solicitud HTTP para obtener los datos JSON de la URL
  var url = new XMLHttpRequest();
  url.open("GET", "https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/clientes.json");
  url.onload = function () {
    if (url.status === 200) {
      // Analizar los datos JSON y agregarlos a la tabla
      var clientes = JSON.parse(url.responseText);
      for (var i = 0; i < clientes.length; i++) {
        var cliente = clientes[i];
        var fila = "<tr>" +
          "<td>" + cliente.nombre + "</td>" +
          "<td>" + cliente.apellidos + "</td>" +
          "<td><span class='badge text-bg-primary'>" + cliente.sexo + "</span></td>" +
          "<td>" + cliente.edad + "</td>" +
          "<td>" + cliente.altura + "</td>" +
          "<td>" + cliente.peso + "</td>" +
          "<td><span class='badge text-bg-secondary'>" + cliente.actividad + "</span></td>" +
          "<td>" + cliente.get + "</td>" +
          "<td>" + cliente.ger + "</td>" +
          "</tr>";
        tablaClientes.innerHTML += fila;
      }
    }
  };
  url.send();
});

});