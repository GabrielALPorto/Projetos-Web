import {conteudoIndex, conteudoDoacoes, conteudoProjetos, conteudoSobre} from '../pages_contents/contentsHTML.js';   

function conteudoController(conteudo){
    const conteudoMain = document.querySelector(".main_container");
    conteudoMain.innerHTML = conteudo;
}

conteudoController(conteudoIndex);
// Eu posso fazer uma função que carregue o conteúdo selecionado
// Posso colocar uma função "onclick" no HTML e chamar a função solicitada
