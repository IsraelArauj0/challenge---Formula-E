document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); //Evita o envio do formulário

    //Captura dos valores dos campos de entrada
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    //Verifica se os campos estão preenchidos
    if (username.trim() === '' || password.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    //Verifica as credenciais
    if (username === 'usuario' && password === 'senha') {
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});
//SlideShow
let imagens = ['assets/img/carro_2.jpg', 'assets/img/carro_4.jpg', 'assets/img/pilotos.jpg'];
let index = 0;
let time = 3000;

function slideShow() {
    document.getElementById('imgBanner').src = imagens[index];
    index++;

    if (index == imagens.length) {
        index = 0;
    }
    setTimeout(slideShow, time);
}
slideShow(); //Chama a função slideShow para iniciar o slideshow

// Seleciona o botão pelo ID
const button = document.getElementById('myButton');

// Adiciona um evento de mouseover para mudar o cursor
button.addEventListener('mouseover', function() {
    document.body.style.cursor = 'pointer';
});

// Adiciona um evento de mouseout para restaurar o cursor padrão
button.addEventListener('mouseout', function() {
    document.body.style.cursor = 'default';
});
