
const botao = document.getElementById('botao')
botao.addEventListener('click', darkLightMode);




function mudarTexto(){
    
    var textButton = 'Dark Mode';
    var text = 'Light Mode ON';

    if(document.getElementById('botao').innerText == 'Dark Mode'){
        textButton = 'Light Mode';
        text = 'Dark Mode ON';
    }
    
    document.getElementById('botao').innerText = textButton;
    document.getElementById('texto').innerText = text;
}

function darkLightMode(){
    mudarTexto()
    document.getElementsByClassName('container')[0].classList.toggle('dark-mode')
    document.getElementById('botao').classList.toggle('btn-dark')
    document.getElementById('texto').classList.toggle('text-dark')
}