/* Função feita para o arquivo redefinirSenha.html.
    A função garante que o usuario preencha os campos, não escreva 
    duas senhas diferente, e precise escrever uma senha com 8 caracteres ou mais.*/
function confirmarSenha() {
    const senha = document.getElementById('senha');
    const senha2 = document.getElementById('confirmeSenha');

    if(!senha.value || !senha2.value){
        const caixa = document.getElementById('container');
        caixa.style.height = '36rem';

        document.getElementById('aviso').innerHTML = `
            <p>Preencha todos os campos!</p>
        `
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
    } else if (senha.value.length < 8 || senha2.value.length < 8){
        const caixa = document.getElementById('container');
        caixa.style.height = '36rem';

        document.getElementById('aviso').innerHTML = `
            <p>Escreva no minimo 8 caracteres</p>
        `
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

    } else if(senha.value === senha2.value){
        return window.location.href = "confirmacao.html";
    } else {
        const caixa = document.getElementById('container');
        caixa.style.height = '36rem';

        document.getElementById('aviso').innerHTML = `
            <p>As senhas não são iguais!</p>
        `
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
    }
}

/* Função feita para o arquivo esqueceuSenha.html
    A função garante que o usuario preencha o campo e não escreva um email inválido*/
function checarEmail(){
    const email = document.getElementById('email');

    if(!email.value){
        const caixa = document.getElementById('container');
        caixa.style.height = '30rem';

        document.getElementById('aviso').innerHTML = `
            <p>Preencha o campo de email!</p>
        `
        if(!email.value){
            email.classList.add('erro');
            email.onclick = function() {
                email.classList.remove('erro');
                email.onclick = null;
            }
        }
    } else if(!email.value.includes('@') || !email.value.includes('.') || email.value.indexOf('.') < email.value.indexOf('@') + 2) {
        const caixa = document.getElementById('container');
        caixa.style.height = '30rem';

        document.getElementById('aviso').innerHTML = `
            <p>Email inválido!</p>
        `
        if(!email.value){
            email.classList.add('erro');
            email.onclick = function() {
                email.classList.remove('erro');
                email.onclick = null;
            }
        }
    } else {
        return window.location.href = "redefinirSenha.html";
    }
}

// Função feita para o arquivo cadastro.html
// preciso refazer
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

/* Função feita para o arquivo cadastro.html
    A função garante que todos os campos do cadastro sejam preenchidos
    mas ainda não possui algumas verificações importantes.*/
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
        <a href="index.html"><button type="button">Voltar</button></a>
        </div>
        `
        caixa.classList.add('avisoConclusao');
        caixa.style.height = "18rem";
        caixa.style.marginTop = "9rem";
    }
}
carregarGeneros();