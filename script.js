const input = document.getElementById("typedText");
const btnEncrypt = document.getElementById("btn-encrypt");
const btnDecrypt = document.getElementById("btn-decrypt");
const resultado = document.getElementById("resultado");
const resultadoEncriptado = document.getElementsByClassName("resultadoEncriptado")
const resultadoDesencriptado = document.getElementById("resultadoDesencriptado");
const copiarBoton = document.getElementById("copiar-boton");


function eliminarMostrar() {
  // Obtiene el elemento del recuadro
  const recuadro = document.querySelector('#mi-recuadro');
  
  // Elimina la imagen y el texto original
  recuadro.innerHTML = "";
  
  // Agrega el nuevo mensaje al recuadro
  const mensajeNuevo = document.createElement('p');
  mensajeNuevo.classList.add('mensaje-nuevo');
  mensajeNuevo.textContent = "";
  recuadro.appendChild(mensajeNuevo);
}

// Asigna la función al evento click del botón
document.querySelector('#btn-encrypt').addEventListener('click', eliminarMostrar);


btnEncrypt.addEventListener("click", () => {
  const palabra = input.value;


  // Función para encriptar las vocales
  function encriptarVocales(palabra) {
    const vocales = "aeiou";
    const caracteresEncriptados = {
      a: "ai",
      e: "enter",
      i: "imes",
      o: "ober",
      u: "ufat",
    };

    let palabraEncriptada = "";
    for (let i = 0; i < palabra.length; i++) {
      if (vocales.includes(palabra[i])) {
        palabraEncriptada += caracteresEncriptados[palabra[i]];
      } else {
        palabraEncriptada += palabra[i];
      }
    }

    return palabraEncriptada;
  }

  // Encriptamos las vocales de la palabra
  const palabraEncriptada = encriptarVocales(palabra);

  // Mostramos el resultado
  resultado.textContent = palabraEncriptada;
  copiarBoton.style.visibility = "visible";
});


//Desencriptar

function desencriptarVocales(typedText) {
    const reglas = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    const palabraDesencriptada = typedText.replace(/ai|enter|imes|ober|ufat/g, match => reglas[match]);
    return palabraDesencriptada;
}

function desencriptar() {
    const inputElement = document.getElementById('typedText');
    const resultadoElement = document.getElementById('resultadoDesencriptado');

    const typedText = inputElement.value;

    if (typedText.trim() === '') {
        resultadoElement.textContent = 'Por favor, ingrese una palabra encriptada.';
        return;
    }

    const palabraDesencriptada = desencriptarVocales(typedText);
    resultadoElement.textContent = palabraDesencriptada;
}

//Habilitar botón copiar



//Boton copiar


copiarBoton.addEventListener("click", () => {
  // Opción 1: Seleccionar con ID
  const seleccion = document.getSelection();
  seleccion.selectAllChildren(resultado);

  // Opción 2: Seleccionar con clase
  // const texto = document.getElementsByClassName("texto-copiar")[0];
  // seleccion.selectAllChildren(texto);

  document.execCommand("copy");
});
