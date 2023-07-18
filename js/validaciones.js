export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid){
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }
    else{
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
  }

export function validaTextArea(textarea) {
    const Textarea = textarea.dataset.tipo;
    if(textarea.validity.valid){
      textarea.parentElement.classList.remove("input-container--invalid");
      textarea.parentElement.querySelector(".input-message-error").innerHTML = "";
    }
    else{
      textarea.parentElement.classList.add("input-container--invalid");
      textarea.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeErrorTextarea(Textarea, textarea);
    }
}

  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "valid",
    "patternMismatch",
    "customError",
  ];

const mensajesDeError = {
      nombre: {
      valueMissing: "El campo nombre no puede estar vacio",
    },
    mensaje: {
      valueMissing: "El mensaje debe tener hasta 300 caracteres",
    },
    email: {
      valueMissing: "Este campo no puede estar vacio",
      typeMismatch: "El correo no es valido",
    },
    password: {
      valueMissing: "Este campo no puede estar vacio",
    }
}

function mostrarMensajeDeErrorTextarea(Textarea, textarea){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
      if(textarea.validity[error]){
        mensaje = mensajesDeError[Textarea][error];
      }
    })  
    return mensaje;
  }

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
      if(input.validity[error]){
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    })  
    return mensaje;
  }