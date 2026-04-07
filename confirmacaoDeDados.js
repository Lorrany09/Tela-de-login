function confirmarSenha() {
    const senha = document.getElementById('senha').value;
    const senha2 = document.getElementById('confirmeSenha').value;

    if(senha === senha2){
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

function carregarGeneros() {
    const generos = [
        "Mulher cis",
        "Homem cis",
        "Mulher trans",
        "Homem trans",
        "Não binário",
        "Outro"
    ];
    
    const select = document.getElementById('genero');
    
    generos.forEach(genero => {
        const option = document.createElement('option');
        option.value = genero.toLowerCase().replace(' ', '_');
        option.textContent = genero;
        select.appendChild(option);
    });
}

function avisar() {
    const senha = document.getElementById('senha');
    const senha2 = document.getElementById('confirmeSenha');
    const email = document.getElementById('email');
    const nome = document.getElementById('nome');
    const selectG = document.getElementById('genero');
    const data = document.getElementById('data');
    const caixa = document.getElementById('container');

    if(!email.value || !nome.value || !senha.value || !senha2.value || !data.value || !selectG.value){
        document.getElementById('aviso').innerHTML = `
            <p>Preencha todos os campos!</p>
        `
        caixa.style.height = '36rem';

        if(!email.value){
            email.classList.add('erro');
            email.onclick = function() {
                email.classList.remove('erro');
                email.onclick = null;
            }
        }
        if(!nome.value){
            nome.classList.add('erro');
            nome.onclick = function() {
                nome.classList.remove('erro');
                nome.onclick = null;
            }
        }
        if(!selectG.value){
            selectG.classList.add('erro');
            selectG.onclick = function() {
                selectG.classList.remove('erro');
                selectG.onclick = null;
            }
        }
        if(!data.value){
            data.classList.add('erro');
            data.onclick = function() {
                data.classList.remove('erro');
                data.onclick = null;
            }
        }
        if(!senha.value){
            senha.classList.add('erro');
            senha.onclick = function() {
                senha.classList.remove('erro');
                senha.onclick = null;
            }
        }
        if(!senha2.value){
            senha2.classList.add('erro');
            senha2.onclick = function() {
                senha2.classList.remove('erro');
                senha2.onclick = null;
            }
        }
    } else if(senha.value !== senha2.value) {
        document.getElementById('aviso').innerHTML = `
            <p>As senhas não coincidem!</p>
        `
        const caixa = document.getElementById('container');
        caixa.style.height = '36rem';
        senha.classList.add('erro');
        senha.onclick = function() {
            senha.classList.remove('erro');
            senha.onclick = null;
        }
        senha2.classList.add('erro');
        senha2.onclick = function() {
            senha2.classList.remove('erro');
            senha2.onclick = null;
        }
    } else {
        caixa.innerHTML = `
        <h1>Cadastro concluido com sucesso!</h1>
        <hr>
        <p>Volte e faça seu login.</p>
        <div class="botaoDeAviso">
        <a href="index.html"><button type="button" id="botaoV">Voltar</button></a>
        </div>
        `
        caixa.classList.add('avisoConclusao');
        caixa.style.height = "18rem";
        caixa.style.marginTop = "9rem";
    }
}
carregarGeneros();