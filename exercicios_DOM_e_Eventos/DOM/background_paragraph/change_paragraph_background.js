const getPara = document.getElementsByTagName('p');
//const changeBackColor = getPara[0].style.backgroundColor='rgb(255,0,0)';
for (let i = 0; i<getPara.length; i++){
    // Obtendo acesso ao conteúdo da tag <p>
    // console.log(getPara[i].outerText);
    changeBackColor = getPara[i].style.backgroundColor='rgb(255,0,0)';
}