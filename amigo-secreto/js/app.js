function adicionar(){
    let nome = document.getElementById("nome-amigo");

    if(nome.value ==''){//verifica se é um nome válido
        alert('insira um nome');
        return;
    }

    let listaNomes = document.getElementById("lista-amigos").textContent.split(',');//Busca os nomes como um array
    listaNomes.unshift(' '+nome.value); //Adiciona o nome no começo
    listaNomes = listaNomes.filter(nome => nome !='');//Retira o '' que se inicia
    document.getElementById("lista-amigos").textContent = listaNomes//atualiza na tela os nomes
    nome.value = ''
}

function reiniciar(){
    document.getElementById("nome-amigo").value = '';
    document.getElementById("lista-amigos").textContent = '';
}

function sortear(){
    let listaNomes = document.getElementById("lista-amigos").textContent.split(',');//Busca os nomes como um array
    let i;
    console.log('tamanho: '+listaNomes.length);
    let sorteio = gerarListaAleatoria(listaNomes.length);

    console.log(sorteio);
    listaNomes = listaNomes.filter(nome => nome !='');//Retira o '' que se inicia
    
    if(listaNomes.length<=2){
        alert('Selecione ao menos 3 participantes');
        return;
    }

    for(let i = 0; i < listaNomes.length; i++){
        //console.log(i);
    }

}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function gerarListaAleatoria(len){
    let sorteio = [];
    let aux = 0;
    
    for (i = 0; i<len;i++){

        while(sorteio.includes(aux) || aux == i){
            if(i == (len-1) && !(sorteio.includes(i))){
                console.log('fudeu');
                gerarListaAleatoria(len);
            }
            aux = getRandomIntInclusive(0, (len-1));
        }
        sorteio.push(aux);
    }
    return sorteio;
}