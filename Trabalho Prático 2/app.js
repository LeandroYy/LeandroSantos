fetch('https://jsonserverleandro.leandrohenriq42.repl.co/albuns')
.then(response => response.json())
.then(data => {
    console.log(data)
    
    for(var i = 0; i < data.length; i++){
        
        var template = document.getElementById('temp')
        var card = template.content.cloneNode(true).children[0]

        var img = card.querySelector('[img]'); 
        var link = card.querySelector('[link]');
        var title = card.querySelector('[title]');
        var desc = card.querySelector('[desc]');

        link.href = `detalhe.html?id=${i}`
        img.src = data[i].urlA 
        title.textContent = data[i].tituloA
        desc.textContent = data[i].desc
        
        document.getElementById('tabela').append(card)
    }
} )






