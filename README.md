# 🌈 Blob Maker - Generador de Formas Orgánicas CSS

## 📝 Descripción

Blob Maker es una aplicación web interactiva que permite crear formas orgánicas (blobs) personalizables y obtener el código CSS correspondiente para implementarlas en tus proyectos. Perfecta para diseñadores y desarrolladores que buscan añadir elementos visuales únicos a sus interfaces.

## ✨ Características Principales

- 🎨 Generador de formas orgánicas con bordes curvos personalizables

- 📏 Control de dimensiones (alto y ancho)

- 🎚️ 4 controles deslizantes para ajustar la curvatura

- 📋 Código CSS generado automáticamente

- 📋 Botón para copiar el código al portapapeles

- 🖥️ Interfaz intuitiva y responsive

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura de la aplicación

- **CSS3** - Estilos y diseño responsive

- **JavaScript** - Lógica y manipulación del DOM

- **Clipboard API** - Para la función de copiar al portapapeles

## 🎮 Funcionamiento

La aplicación funciona mediante la manipulación de la propiedad `border-radius` de CSS, que permite crear formas complejas cuando se especifican los ocho valores posibles (cuatro esquinas horizontales y cuatro verticales).

## 💻 Código Destacado

### Manipulación del DOM y Event Listeners

```javascript
let sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(slider){
    slider.addEventListener("input", createBlob);
});

let inputs = document.querySelectorAll("input[type='number']");
inputs.forEach(function(input){
    input.addEventListener("change", createBlob);
});
```

Este fragmento:

1. Selecciona todos los elementos de tipo `range` (deslizadores) y `number` (inputs numéricos).

1. Añade event listeners a cada uno para ejecutar la función `createBlob` cuando cambian.

### Función Principal `createBlob`

```javascript
function createBlob() {
    let radiusOne = sliders[0].value;
    let radiusTwo = sliders[1].value;
    let radiusThree = sliders[2].value;
    let radiusFour = sliders[3].value;

    let blobHeight = inputs[0].value;
    let blobWidth = inputs[1].value;

    let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree}% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusFour}%`;

    let blobStyle = `border-radius: ${borderRadius}; height:${blobHeight}px; width:${blobWidth}px;`;

    document.querySelector(".blob").style.cssText = blobStyle;
    outputCode.value = blobStyle;
}
```

Esta función:

1. Obtiene los valores actuales de los controles.

1. Calcula los valores complejos para `border-radius`.

1. Aplica los estilos directamente al elemento blob.

1. Muestra el código CSS generado en el área de texto.

### Función para Copiar al Portapapeles

```javascript
document.getElementById("copy").addEventListener("click", function(){
    navigator.clipboard.writeText(outputCode.value)
    .then(function(){
        alert("CSS copied to clipboard");
    })
});
```

Utiliza la Clipboard API moderna para copiar el texto sin necesidad de elementos intermedios.

## 🚀 Cómo Usar la Aplicación

1. **Ajusta las dimensiones**:

    - Cambia los valores de altura (Height) y ancho (Width) para modificar el tamaño del blob.

1. **Personaliza la forma**:

    - Utiliza los 4 controles deslizantes para ajustar la curvatura de los bordes.

    - Observa cómo cambia la forma en tiempo real.

1. **Obtén tu código CSS**:

    - El código se genera automáticamente en el campo de texto.

    - Haz clic en "Copy" para copiarlo al portapapeles.

1. **Implementa en tu proyecto**:

    - Pega el código CSS en tu hoja de estilos.

    - Aplica la clase a cualquier elemento HTML.

## 📥 Instalación y Desarrollo

Para ejecutar localmente:

```bash
# Clona el repositorio
git clone https://github.com/Seb-RM/Javascript_Html_Css-Blob-Maker.git

# Abre el archivo index.html en tu navegador
# No se requieren dependencias adicionales
```

La aplicación no requiere ningún servidor ni dependencias externas, ya que funciona completamente en el lado del cliente.

## 🌍 Compatibilidad

La aplicación funciona en todos los navegadores modernos que soportan:

- CSS border-radius con valores complejos.

- Clipboard API.

- Flexbox y Grid CSS.
