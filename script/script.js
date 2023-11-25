// -------RGB Start---------
let areaRgbElt = document.querySelector(".colorarea-rgb");
let buttonRgbElt = document.querySelector(".change-rgb");
let colorcodeRgbElt = document.querySelector(".colorcode-rgb");
let copyRgbElt = document.querySelector(".copyrgb");

copyRgbElt.style.display = "none";

function randomNum(min,max){
	return Math.floor(Math.random() * (max-min+1)+min);
}

let currentRgbColor = "";
const randomRgb = ()=>{
    let r = randomNum(1,255);
    let g = randomNum(1,255);
    let b = randomNum(1,255);
    return `rgb(${r},${g},${b})`;
}

buttonRgbElt.addEventListener("click",()=>{
    currentRgbColor = randomRgb();
    areaRgbElt.style.backgroundColor = currentRgbColor;
    colorcodeRgbElt.innerHTML = currentRgbColor;
    copyRgbElt.style.display = "block";
});

copyRgbElt.addEventListener("click", () => {
    if(currentRgbColor){
        navigator.clipboard.writeText(currentRgbColor)
        alert(`${currentRgbColor} is copied`)
    }
  });
  
// -------RGB Ends------------



// -------Hex Starts----------

let areaHexElt = document.querySelector(".colorarea-hex");
let buttonHexElt = document.querySelector(".change-hex");
let colorcodeHexElt = document.querySelector(".colorcode-hex");
let copyHexElt = document.querySelector(".copyhex");

copyHexElt.style.display = "none";
let currentHexColor = "";

const randomHex = ()=>{
    let hex = (Math.floor(Math.random() * 16581375)).toString(16);
    return `#${hex}`;
}

buttonHexElt.addEventListener("click",()=>{
    currentHexColor = randomHex();
    areaHexElt.style.backgroundColor = currentHexColor;
    colorcodeHexElt.innerHTML = currentHexColor;
    copyHexElt.style.display = "block";
});

copyHexElt.addEventListener("click", ()=>{
    if(currentHexColor){
        navigator.clipboard.writeText(currentHexColor);
        alert(`${currentHexColor} is copied`);
    }
});
// -------Hex Ends------------