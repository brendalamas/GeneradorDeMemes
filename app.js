
const header = document.querySelector("header");

//////////////////////////////////////modo claro - oscuro
const botonModo = document.getElementById('botonModo');
const body = document.querySelector("body");

botonModo.addEventListener ("click",() => {
  body.classList.toggle("ligth-mood");
  body.classList.toggle("dark-mood");
})

//////////////////////////////////////// cambiar paneles

const botonTexto = document.getElementById("botonTexto");
const botonImagen = document.getElementById("botonImagen");
const sectionImagen = document.querySelector (".sectionImagen");
const sectionTexto = document.querySelector (".sectionTexto");
const oculto = document.querySelector(".oculto");
const botonCerrarPanel = document.querySelector(".botonCerrarPanel");

botonImagen.addEventListener ("click",()=>{
  iconPanel.classList.remove('oculto');
  sectionImagen.classList.remove("oculto");
  sectionTexto.classList.add("oculto");
});
botonTexto.addEventListener ("click",()=>{
  iconPanel.classList.remove('oculto');
  sectionTexto.classList.remove("oculto");
  sectionImagen.classList.add("oculto");
});

////////////// cerrar boton en panel
const iconPanel = document.querySelector(".iconPanel");

botonCerrarPanel.addEventListener('click', ()=>{
  iconPanel.classList.add('oculto');
});

////////////////////////////////////////cambiar texto
const textSuperior = document.querySelector(".textSuperior");
const topText = document.querySelector(".topText");
const textInferior = document.querySelector(".textInferior");
const bottomText = document.querySelector(".bottomText");
const inputCheckboxTop = document.querySelector(".input-checkbox-top");
const inputCheckboxBottom = document.querySelector(".input-checkbox-bottom");

textSuperior.addEventListener("input",()=>{
  console.log(textSuperior.value);
  topText.innerText = textSuperior.value;
  topText.style="font-family: 'Open Sans', sans-serif;font-weight: 800;";
})
textInferior.addEventListener("input",()=>{
  console.log(textInferior.value);
  bottomText.innerText=textInferior.value;
  bottomText.style="font-family: 'Open Sans', sans-serif;font-weight: 800;";
})

const checkeando = ()=>{
  if(inputCheckboxTop.checked){
    topText.classList.add("oculto")
  }else{
    topText.classList.remove("oculto");
  }

  if(inputCheckboxBottom.checked){
    bottomText.classList.add("oculto")
  }else{
    bottomText.classList.remove("oculto");
  }
}
inputCheckboxTop.addEventListener('change', checkeando);
inputCheckboxBottom.addEventListener('change', checkeando);


//////////////////////////////////////// Imagen - url
const inputUrl = document.getElementById("inputUrl");
const memeImagen = document.querySelector(".memeImagen");

inputUrl.addEventListener("input", ()=>{
  memeImagen.style.backgroundImage = `url("${inputUrl.value}")`
})

////////////////////////////////////////descarga de imagen
const descargaImagen = document.querySelector(".boton-descarga-imagen");
const cuadroMeme = document.querySelector(".cuadroMeme")

descargaImagen.addEventListener("click",()=>{
  domtoimage.toBlob(cuadroMeme).then(function (blob) {
  window.saveAs(blob, 'meme.png');
  });
});


//////////////////////////////////////filtros
const brillo = document.getElementById("brillo");
const opacidad = document.getElementById("opacidad");
const contraste = document.getElementById("contraste");
const desenfoque = document.getElementById("desenfoque");
const gris = document.getElementById("gris");
const sepia = document.getElementById("sepia");
const hue = document.getElementById("hue");
const saturado = document.getElementById("saturado");
const negativo = document.getElementById("negativo");
const reestablecerBoton = document.querySelector(".reestablecer-boton");
const panelControl = document.querySelector("panel-control");


const actualizarFiltros = ()=>{
    memeImagen.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px) grayscale(${gris.value}%) sepia(${sepia.value}) hue-rotate(${hue.value}deg) saturate(${saturado.value}%) invert(${negativo.value})`;
}

brillo.addEventListener("change",actualizarFiltros);
opacidad.addEventListener("change",actualizarFiltros);
contraste.addEventListener("change",actualizarFiltros);
desenfoque.addEventListener("change",actualizarFiltros);
gris.addEventListener("change",actualizarFiltros);
sepia.addEventListener("change",actualizarFiltros);
hue.addEventListener("change",actualizarFiltros);
saturado.addEventListener("change",actualizarFiltros);
negativo.addEventListener("change",actualizarFiltros);

reestablecerBoton.addEventListener("click",()=>{
  brillo.value= 1;
  opacidad.value=1;
  contraste.value=0;
  desenfoque.value=0;
  gris.value=0;
  sepia.value=0;
  hue.value=0;
  saturado.value=0;
  negativo.value=0;
  actualizarFiltros();
})

//////////////// cambiar el background color del CuadroMeme

const inputFondo = document.querySelector(".inputFondo");
const spanBlanco = document.querySelector(".span-blanco");

inputFondo.addEventListener("input",()=>{
  spanBlanco.textContent = inputFondo.value;
  cuadroMeme.style.backgroundColor = inputFondo.value;
})

//////////////// cambiar el font size
const inputNumber = document.querySelector(".panel-input-number");
const inputEspaciado = document.getElementById("inputEspaciado");


const actualizarTamanioTexto = () =>{
  const tamanio = inputNumber.value
  topText.style.fontSize = `${tamanio}px` ;
  bottomText.style.fontSize = `${tamanio}px` ;
}

const tamanioTexto = Math.round((window.innerWidth / 10) * 0.5)
const padding = Math.round((window.innerWidth / 10) * 0.2)
inputNumber.value = tamanioTexto
inputEspaciado.value = padding


inputNumber.addEventListener("input", actualizarTamanioTexto);

/// ////////// cambiar tipo de letra
const fuentesOpc = document.getElementById("fuentesOpc");

fuentesOpc.addEventListener("change", ()=>{
  const fuente = fuentesOpc.value;
  topText.style.fontFamily = fuente;
  bottomText.style.fontFamily = fuente;
});

//////////// alineacion textos
const buttonLeft = document.getElementById("buttonLeft");
const buttonCenter = document.getElementById("buttonCenter");
const buttonRight = document.getElementById("buttonRight");

const alinearTexto = (alineacion) => {
  topText.style.textAlign = alineacion
  bottomText.style.textAlign = alineacion
}

buttonLeft.addEventListener('click', () =>
alinearTexto('left')
)
buttonCenter.addEventListener('click', () =>
alinearTexto('center')
)
buttonRight.addEventListener('click', () =>
alinearTexto('right')
)


////////////// color de fondo y letra
const textoColorInput = document.getElementById("textoColorInput");
const textoColor = document.getElementById("textoColor")

textoColorInput.addEventListener("input", ()=>{
  const color = textoColorInput.value.toUpperCase()

  textoColor.innerText = color
  topText.style.color = color
  bottomText.style.color = color
})

///////////// fondo
const fondoColorInput = document.getElementById("fondoColorInput");
const fondoColor = document.getElementById ("fondoColor")
const fondoNoCheckbox = document.getElementById("fondoNoCheckbox");

const actualizarFondoTexto = () => {
  if (!fondoNoCheckbox.checked) {
    const color = fondoColorInput.value;

    fondoColor.innerText = color.toUpperCase()
    topText.style.backgroundColor = color;
    bottomText.style.backgroundColor = color;
  } else {
    topText.style.backgroundColor = 'transparent';
    bottomText.style.backgroundColor = 'transparent';
  }
};

fondoColorInput.addEventListener('input',actualizarFondoTexto);
fondoNoCheckbox.addEventListener('change',actualizarFondoTexto);

////////// Contorno
const buttonNinguno = document.getElementById("buttonNinguno");
const buttonClaro = document.getElementById("buttonClaro");
const buttonOscuro = document.getElementById("buttonOscuro");



const actualizarContorno = (contorno) => {
const grosor = '2px'

if (contorno === 'ninguno') {
  topText.style.textShadow = 'none'
  bottomText.style.textShadow = 'none'
} else if (contorno === 'claro') {
  topText.style.textShadow = `${grosor} ${grosor} #FFF, -${grosor} ${grosor} #FFF, ${grosor} -${grosor} #FFF, -${grosor} -${grosor} #FFF`
  bottomText.style.textShadow = `${grosor} ${grosor} #FFF, -${grosor} ${grosor} #FFF, ${grosor} -${grosor} #FFF, -${grosor} -${grosor} #FFF`
} else if (contorno === 'oscuro') {
  topText.style.textShadow = `${grosor} ${grosor} #000, -${grosor} ${grosor} #000, ${grosor} -${grosor} #000, -${grosor} -${grosor} #000`
  bottomText.style.textShadow = `${grosor} ${grosor} #000, -${grosor} ${grosor} #000, ${grosor} -${grosor} #000, -${grosor} -${grosor} #000`
}
}


buttonNinguno.addEventListener('click', () => {
    actualizarContorno('ninguno')
})

buttonClaro.addEventListener('click', () => {
    actualizarContorno('claro')
});

buttonOscuro.addEventListener('click', () => {
    actualizarContorno('oscuro')
});

////////////////// espaciado

inputEspaciado.addEventListener('input', ()=>{
  const paddingY = inputEspaciado.value;
  topText.style.padding = `${paddingY}px 50px`;
  bottomText.style.padding = `${paddingY}px 50px`;
});


////////////// interlineado
const interlineadoInput = document.getElementById("interlineadoInput");

interlineadoInput.addEventListener('input', () =>{
  topText.style.lineHeight = interlineadoInput.value;
  bottomText.style.lineHeight = interlineadoInput.value;
})

