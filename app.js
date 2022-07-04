function entrar() {
    nome_usuario = document.getElementById('username').value;
    senha_usuario = document.getElementById('password').value;
    if (nome_usuario == "chiapettaiago" && senha_usuario == "vitoriaamor12"){
        alert('Bem vindo, ' + nome_usuario);
        window.location = "links.html";
    }
    else if (nome_usuario == "" || senha_usuario == ""){
        alert("Você precisa digitar usuário e senha para entrar!!")
    }
    else {
        alert("Usuário e senha não reconhecidos")
    }
    
}