const keyValue = document.getElementById("keyValue");
const keyCodes = document.getElementById("keyCode");
const charCode = document.getElementById("charCode");
const heading = document.getElementById("heading");


window.addEventListener("keypress",(event)=>{
    keyValue.innerHTML = event.key;
    keyCodes.innerHTML = event.which;
    charCode.innerHTML = key.code;
    heading.innerHTML = event.keyCode;
    
});
