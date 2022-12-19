var items = [];

document.querySelector('input[type=submit]').addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=produto]'); 
    var precoProduto = document.querySelector('input[name=valor]'); 

    items.push({
        nome: nomeProduto.value,
        preco: precoProduto.value
    })


    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;
    listaProdutos.innerHTML = "";
    items.map(function(val){
        soma+=parseFloat(val.preco);
        listaProdutos.innerHTML+=`
        <div class="lista-produto-single">
        <h2>`+val.nome+`</h2>
        <span>R$`+val.preco+`</span>
        <div class="clear"></div>
    </div>
        `;
    })

    soma = soma.toFixed(2);
    nomeProduto.value = "";
    precoProduto.value = "";

    let elementoSoma = document.querySelector('.total h1');
    elementoSoma.innerHTML = 'R$'+soma;
})

document.querySelector('button[name=limpar]').addEventListener('click',()=>{
    items = [];

    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.total h1').innerHTML = "R$0";
})