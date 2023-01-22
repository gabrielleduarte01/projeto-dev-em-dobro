// objetivo 1 - Usuario clicar no botão ver trailer, abrir modal com o video
//pegar o elemento
const buttonTrailer = document.querySelector('.botao-trailer')
//pegar o elemento fechar modal
const buttonCloseModal = document.querySelector('.fechar-modal')
// pegar elemento da modal 
const modal = document.querySelector('.modal')
// elemento video
const video = document.getElementById('video')
// para colocar a url de volta 
const linkVideo = video.src;

function alternarModal() {
    modal.classList.toggle('aberto')
} 
//identificar quando o usuario clicar no botão
buttonTrailer.addEventListener("click", () => {
    alternarModal();//modal.classList.add('aberto') (tambem esta certo, mas pela função fica refaturado e mais facil de entender) //abrir modal na tela (o que foi estilizado no css)
    video.setAttribute("src", linkVideo)
})

// Objetivo 2 - Fechar o trailer no X

//identificar que o usuario clicou no botao
buttonCloseModal.addEventListener("click", () => {
   alternarModal(); //modal.classList.remove('aberto') (tambem esta certo, mas pela função fica refaturado e mais facil de entender) //fechar modal
    video.setAttribute("src", "") // para deixar o src vazio e parar de tocar o video
})

