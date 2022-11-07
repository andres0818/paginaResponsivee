function validar() {
  const nombre = document.getElementById("nombre");
  const apelllido = document.getElementById("apellido");
  const email = document.getElementById("email");
  const contraseña = document.getElementById("password");

  if (nombre.value == "") {
    nombre.setCustomValidity("Por favor ingrese el nombre");
  } else {
    nombre.setCustomValidity("");
  }

  if (apelllido.value == "") {
    apelllido.setCustomValidity("Por favor ingrese el Apellido");
  } else {
    apelllido.setCustomValidity("");
  }

  if (email.value == "") {
    email.setCustomValidity("Por favor ingrese el Email");
  } else {
    email.setCustomValidity("");
  }

  if (contraseña.value == "") {
    contraseña.setCustomValidity("Por favor ingrese la contraseña");
  } else {
    contraseña.setCustomValidity("");
  }
}

function storage() {
  event.preventDefault();

  let _res = localStorage.getItem("respuestas");
  let formulario;

  if (_res == undefined) {
    formulario = [];
  } else {
    formulario = JSON.parse(_res);
  }

  let nuevaRespuesta = {
    nombre: document.getElementById("nombre").value,
    apelllido: document.getElementById("apellido").value,
    email: document.getElementById("email").value,
    contraseña: document.getElementById("password").value,
  };

  formulario.push(nuevaRespuesta);

  let formularioJSON = JSON.stringify(formulario);
  console.log(formularioJSON);
  localStorage.setItem("respuestas", formularioJSON);

  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

function validarYLocalStorage() {
  validar();
  storage();
}
