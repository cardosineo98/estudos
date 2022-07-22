let elemento = document.querySelector('#titulo-Principal');

setTimeout(function() {
    elemento.style.color = 'red';
    elemento.style.backgroundColor = 'yellow';
    elemento.style.width = '400px';

}, 1000);

window.onbeforeunload = function(e) {
    return 'Tem a certeza que quer fechar a janela?';
 };