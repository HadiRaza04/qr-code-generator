const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

function create() {
    const url = document.querySelector("#urlText").value;
    const qrCodeImg = document.querySelector("#qrCodeImage");
    const imgDiv = document.querySelector(".image");
    const imgSrc = api + url;

    qrCodeImg.src = imgSrc;
    imgDiv.style.display = "flex";
}