import {conteudoIndex, conteudoDoacoes, conteudoProjetos, conteudoSobre} from '../pages_contents/contentsHTML.js';   

function conteudoController(conteudo){
    let conteudoMain = document.querySelector(".main_container");
    conteudoMain.innerHTML = conteudo;
    return conteudo;
}

conteudoController(conteudoIndex);