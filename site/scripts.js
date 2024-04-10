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

function validar() {
    var codigoInput = document.getElementById('Codigo');
    var codigo = codigoInput.value;

    if(codigo !== "41,4d,4f,52,45"){
        alert("CODIGO INCORRETO");
        // Limpa os campos de senha para segurança
        passwordInput.value = "";
        return false;
            }
    
    window.location.href = '/codigo/resposta.html';

    return false; // Retorna false para evitar o envio do formulário tradicional

    

}

