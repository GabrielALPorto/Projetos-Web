/* Obtendo o formulario da pagina de doacoes*/
const form   = document.getElementById('form');
/* Obtendo uma array com todas as queries da pagina doacoes*/
const campos = document.querySelectorAll('.required');

/* Criando uma função para alterar a cor da borda do input para vermelho, sinalizando "erro" */
function setError(index){
    campos[index].style.border = '2px solid #8B0000'; 
}

/* Função para remover a borda vermelha do input, demonstrando que o input está cumprindo
    os requisitos */
function removeError(index){
    campos[index].style.border = '';
}
/* Função para validar tornar ou não a borda vermelha do nome input nome,
    caso as condições tenham sido ou não cumpridas */
function nameValidate(){
    if(campos[0].value.length === 0){
        removeError(0);
    }
    else if(campos[0].value.length < 3){
        setError(0);
    }else{
        removeError(0); 
    }
}
/* Função para validar tornar ou não a borda vermelha do nome input cpf,
    caso as condições tenham sido ou não cumpridas */
function cpfValidate(){
    if(campos[1].value.length === 0){
        removeError(1);
    }
    else if(campos[1].value.length < 11){
        setError(1);
    }else{
        removeError(1);
    }
}

/* Função para validar tornar ou não a borda vermelha do nome input e-mail,
    caso as condições tenham sido ou não cumpridas */
function emailValidate(){
    if(!campos[2].value.includes("@")){
        setError(2);
    }else{
        removeError(2);
    }
}

/* Função para validar tornar ou não a borda vermelha do nome input telefone,
    caso as condições tenham sido ou não cumpridas */
function telValidate(){
    if(campos[3].value.length === 0){
        removeError(3);
    }else if(campos[3].value.length < 8){
        setError(3);
    }else{
        removeError(3);
    }
}
/* Função para validar tornar ou não a borda vermelha do nome input CEP,
    caso as condições tenham sido ou não cumpridas */
function cepValidate(){
    if(campos[4].value.length === 0){
        removeError(4);
    }else if(campos[4].value.length < 8){
        setError(4);
    }else{
        removeError(4);
    }
}

/* Função para validar tornar ou não a borda vermelha do nome input habilidade,
    caso as condições tenham sido ou não cumpridas */
function habValidate(){
    if(campos[5].value.length === 0){
        removeError(5);
    }else if(campos[5].value.length < 3){
        setError(5);
    }else{
        removeError(5);
    }
}