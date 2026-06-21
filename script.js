const qrText = document.querySelector("#qr-text");
const qrSize = document.querySelector("#size");
const qrColor = document.querySelector("#qr-color");
const generate = document.querySelector("#generate");
const download = document.querySelector("#download");
const qrContainer = document.querySelector(".qr-body");

let sizes = qrSize.value;
let color = qrColor.value;


generate.addEventListener("click", (e) => {
    e.preventDefault();
    isEmptyInput();
})

qrSize.addEventListener("change", (e) => {
    sizes = e.target.value;
    isEmptyInput();
})
qrColor.addEventListener("change", (e) => {
    color = e.target.value;
    isEmptyInput();
})

function isEmptyInput() {
    qrText.value.length > 0 ? generateQrCode() : alert(`Please write any text or url to generate QRCode`);
}

download.addEventListener("click", () => {
    let img = document.querySelector(".qr-body img");
    
    if(img !== null) {
        let imgAtrr = img.getAttribute("src");
        download.setAttribute("href", imgAtrr);
    } else {
     download.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);   
    }
})

function generateQrCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        width: sizes,
        height: sizes,
        colorDark: color,
        colorLight: "#ffffff"
    });
}
