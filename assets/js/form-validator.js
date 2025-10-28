const form   = document.getElementById('form');
const campos = document.querySelectorAll('.required');

function setError(index){
    campos[index].style.border = '2px solid #8B0000'; 
}

function removeError(index){
    campos[index].style.border = '';
}

function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0);
    }else{
        removeError(0); 
    }

}