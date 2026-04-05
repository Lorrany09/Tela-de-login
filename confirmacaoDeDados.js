function confirmarSenha() {
    const senha = document.getElementById('senha').value;
    const senha2 = document.getElementById('confirmeSenha').value;

    if(!senha && !senha2){
        alert("Você não preencheu os campos em branco! Tente novamente!")
    } else if(senha === senha2){
        return window.location.href = "confirmacao.html";
    } else {
        alert("As senhas não estão iguais! Tente novamente!")
    }
}

function checarEmail(){
    const email = document.getElementById('email').value;

    if(!email){
        alert("Você não preencheu o campo do email!")
    } else {
        return window.location.href = "redefinirSenha.html";
    }
}