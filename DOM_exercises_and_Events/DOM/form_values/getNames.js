// Lembrar: há elementos que possuem outros elementos dentro,
// como são os formulários. Nisso, é preciso interar dentro
// desses elementos para buscar o desejado.
const formValue = function getFormvalue(){
    // Obtendo os elementos do formulário
    let formArray = document.getElementById('form1');
    // Iterando entre os elementos do formulário
    // Pelo visto sempre é necessário iterar sobre esses elementos
    for (let i=0; i<formArray.length;i++){
        // Obtendo os valores desse array
        if(formArray.elements[i].value!='Submit')
        {
            // formArray.elements Obtém qual o elemento 
            // do formulário. Nesse caso, o formulário possui
            // dois inputs, logo ele diz que há dois inputs.
            // Porém, ele não pega os valores desses inputs.
            console.log(formArray.elements[i]);
            // Acessando os valores desses inputs
            console.log(formArray.elements[i].value);
        }
    }
};