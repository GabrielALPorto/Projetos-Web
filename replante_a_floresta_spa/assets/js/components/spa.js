import {conteudoIndex, conteudoDoacoes, conteudoProjetos, conteudoSobre} from '../pages_contents/contentsHTML.js';   

function conteudoController(conteudo){
    const conteudoMain = document.querySelector(".main_container");
    conteudoMain.innerHTML = conteudo;
}

const buttonHandle = (buttonId) => {
    document.getElementById(buttonId).addEventListener('click', preventDefault());
} 

conteudoController(conteudoIndex);
