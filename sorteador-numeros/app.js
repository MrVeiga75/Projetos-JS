function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value)
    let minimo = parseInt(document.getElementById('de').value)
    let maximo = parseInt(document.getElementById('ate').value)
    let botao = document.getElementById('btn-reiniciar');

    if(isNaN(quantidade) || isNaN(minimo) || isNaN(maximo) || quantidade<1 || minimo < 1 || maximo <= minimo){
        resultado.innerHTML = `<label class="texto__paragrafo">Insira valores inteiros maiores que 1 e o número limite deve ser maior que o mínimo.</label>`
        let botao = document.getElementById('btn-reiniciar');
        if(botao.classList.contains('container__botao-desabilitado')){ 
            alterarStsBotao();
        }
        return;
    }else{
        let valores = [];
        let numero;

        for (let i = 0; i< (quantidade); i++){
            numero = numeroAleatorio(minimo,maximo)
            while(valores.includes(numero)){
                numero = numeroAleatorio(minimo,maximo);
            }
            valores.push(numero)
        }
        
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${valores}</label>`
        if(botao.classList.contains('container__botao-desabilitado')){ 
            alterarStsBotao();
        }
    }
}

function reiniciar(){
    if(document.getElementById('btn-reiniciar').classList.contains('container__botao-desabilitado')){

    }else{
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStsBotao();
    }
}

function alterarStsBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}