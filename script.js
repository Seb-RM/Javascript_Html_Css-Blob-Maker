let outputCode = document.getElementById("css-code");

let sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(sliders){
    sliders.addEventListener("input", createBlob);
});

let inputs = document.querySelectorAll("input[type='number']");
inputs.forEach(function(inputs){
    inputs.addEventListener("change", createBlob);
});

function createBlob() {

    let radiusOne = sliders[0].value;
    let radiusTwo = sliders[1].value;
    let radiusThree = sliders[2].value;
    let radiusFour = sliders[3].value;

    let blobHeight = inputs[0].value;
    let blobWidth = inputs[1].value;

    let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree}% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusFour}%`;

    let blobStyle   = `border-radius: ${borderRadius}; height:${blobHeight}px; width:${blobWidth}px;`;

    document.querySelector(".blob").style.cssText = blobStyle;

    outputCode.value = blobStyle;

}


document.getElementById("copy").addEventListener("click", function(){
    navigator.clipboard.writeText(outputCode.value)
    .then(function(){
        alert("CSS copied to clipboard");
    })
});

createBlob();