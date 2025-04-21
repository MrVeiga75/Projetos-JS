limpar();

function adicionar() {
    let produto = document.getElementById('produto');
    let quantidade = document.getElementById('quantidade');

    if (quantidade.value < 1 || produto.value === 'Selecione') {
        alert("Coloque o produto e quantidade");
        return;
    }

    let nomeDoProduto = produto.value.split('-')[0].trim();
    let preco = parseFloat(produto.value.split('R$')[1].trim());
    let quantidadeSelecionada = parseInt(quantidade.value);

    let valorTotal = document.getElementById('valor-total');
    let valorAtual = parseFloat(valorTotal.textContent.replace('R$', '').replace(',', '.'));
    let novoTotal = valorAtual + (preco * quantidadeSelecionada);
    valorTotal.textContent = `R$${novoTotal.toFixed(2)}`;

    let carrinhoProdutos = document.getElementById('lista-produtos');
    let produtosExistentes = carrinhoProdutos.getElementsByClassName('carrinho__produtos__produto');
    let produtoAtualizado = false;

    for (let item of produtosExistentes) {
        if (item.textContent.includes(nomeDoProduto)) {
            // Extrair a quantidade atual do texto
            let quantidadeAntiga = parseInt(item.querySelector('.texto-azul').textContent.replace('x', ''));
            let novaQuantidade = quantidadeAntiga + quantidadeSelecionada;
            let novoPreco = (novaQuantidade * preco).toFixed(2);

            item.innerHTML = `<span class="texto-azul">${novaQuantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${novoPreco}</span>`;
            produtoAtualizado = true;
            break;
        }
    }

    if (!produtoAtualizado) {
        carrinhoProdutos.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidadeSelecionada}x</span> ${nomeDoProduto} <span class="texto-azul">R$${(preco * quantidadeSelecionada).toFixed(2)}</span>
        </section>`;
    }

    // Resetar os campos
    quantidade.value = 0;
    produto.value = 'Selecione';
}



function limpar() {
    document.getElementById('produto').value = 'Selecione';
    document.getElementById('quantidade').value = 0;

    document.getElementById('valor-total').textContent = 'R$0.00';
    document.getElementById('lista-produtos').innerHTML = '';
}
