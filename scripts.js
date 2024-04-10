function ativar(id) {
    var div = document.getElementById("topnavi");
    var a = div.getElementsByTagName('a');
    for (var i = 0; i < a.length; i++) {
        a[i].classList.remove('active');
    }
    var elem = document.getElementById(id);
    if (elem) {
        elem.classList.add('active');
        console.log("cu");
    } else {
        console.error("Elemento não encontrado com o ID:", id);
    }
}
