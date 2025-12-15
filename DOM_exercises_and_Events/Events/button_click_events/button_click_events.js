// Selecionando o container Body
const bodyHTML = document.getElementById('meuBody');
// Criando um botão
const button = document.createElement('button');
button.textContent = 'text';
// Adicionando o botão no Body
bodyHTML.appendChild(button);
// Obtendo uma array de todos os childrens do body 
const buttonChildren = bodyHTML.children;
// Adicionando o eventListener para enviar a mensagem!
buttonChildren[1].addEventListener('click', console.log('Voce Clicou!'));