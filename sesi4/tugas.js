function greet() {
    var tombol=document.getElementsByClassName("tombol1");
    var i;
    for (i=0; i<tombol; i++){
        console.log('Hallo '+i)
    }
}

var btn=document.getElementById("greet");
btn.addEventListener("click", greet);