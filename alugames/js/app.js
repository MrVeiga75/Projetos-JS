function alterarStatus(id) {
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        botao.classList.remove('dashboard__item__button--return')
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar'; 
    } else {
        botao.classList.add("dashboard__item__button--returns")
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
    }
}