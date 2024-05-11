const qrbox = document.getElementById("qrimg");
const qrimg = document.getElementById("QR");
const input = document.getElementById("get");
function generate(){
    if(input.value.length > 0)
    {
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
        qrbox.classList.add("show-img");
    }
    else{
        input.classList.add("error");
        setTimeout(()=>{
            input.classList.remove("error");
        },1000);
    }
}