const link = document.getElementById('w3r');
console.log(link.attributes);
// Agora eu posso apenas chamar a() no lugar de getAttributes()
// Significa que eu posso utilizar um nome curto para a cons-
// tante e um longo na função para explicar bem o que ela faz.
const a = function getAttributes(){
    console.log(link.attributes); 
};
