function comprar(){
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    comprarIngresso(quantidade,ingresso)
}


function comprarIngresso(qtd,tipo){//Função para comprar os ingressos de acordo com a quantidade e tipo
    let quantidadeDisponivel = document.getElementById(`qtd-${tipo}`);
    if(qtd <= quantidadeDisponivel.textContent){
        quantidadeDisponivel.textContent = parseInt(quantidadeDisponivel.textContent) - qtd;
    }else{
        alert("Quantidade não disponível")
        return;
    }
}