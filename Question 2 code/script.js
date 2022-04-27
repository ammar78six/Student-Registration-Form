let btnClear = Document.querySelector('button');
let inputs = Document.querySelectorAll('input');

btnClear.addEventListener('click',()=>{
    inputs.forEach(input =>input.value ='');
});