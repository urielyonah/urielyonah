ok = 'Agregado al carrito';

const texto = document.getElementById('btn');
const texto1 = document.getElementById('btn1');
const texto2 = document.getElementById('btn2');
const cambiartexto = document.getElementById('btn');
const cambiartexto1 = document.getElementById('btn1');
const cambiartexto2 = document.getElementById('btn2');

cambiartexto.addEventListener('click', cambiar);
cambiartexto1.addEventListener('click', cambiar1);
cambiartexto2.addEventListener('click', cambiar2);

function cambiar(){
    return(texto.innerText = ok);
}
function cambiar1(){
    return(texto1.innerText = ok);
}
function cambiar2(){
    return(texto2.innerText = ok);
}