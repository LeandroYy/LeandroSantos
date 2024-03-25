const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch('https://jsonserverleandro.leandrohenriq42.repl.co/fotos')
.then(response => response.json())
.then(data => {

    const objetosFiltrados = data.filter(objeto => objeto.idAF == id);

    for(var i = 0; i < objetosFiltrados.length; i++){
        var template = document.getElementById('template')

        var card = template.content.cloneNode(true).children[0]

        var img = card.querySelector('[img]')
        var desc = card.querySelector('[descri]');



        img.src = objetosFiltrados[i].urlF
        desc.textContent = objetosFiltrados[i].descF


        document.getElementById('tabela').append(card)


    }
})

fetch('https://jsonserverleandro.leandrohenriq42.repl.co/albuns')
.then(response => response.json())
.then(data => {

    const objetosFiltrados = data.filter(objeto => objeto.idA == id)

    console.log(objetosFiltrados)

    var imagem = document.querySelector('[imgA]')
    var descri = document.querySelector('[descA]')
    var localiza = document.querySelector('[locA]')
    var data = document.querySelector('[dataA]')

    imagem.src = objetosFiltrados[0].urlA
    descri.textContent = objetosFiltrados[0].desc
    localiza.textContent = objetosFiltrados[0].localA
    data.textContent = objetosFiltrados[0].dataA




})

