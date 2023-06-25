document.getElementById('lampada').addEventListener("click", function (){
    var imagem = document.getElementById('lamp').src;
    var lampadaDesligada = "https://i.stack.imgur.com/b983w.jpg";
    var lampadaLigada = "https://i.stack.imgur.com/ybxlO.jpg";
    
    if(imagem === lampadaLigada){
        document.getElementById('lamp').src = lampadaDesligada;
        document.getElementById('lampada').innerText = "Ligar"
    } else {
        document.getElementById('lamp').src = lampadaLigada;
        document.getElementById('lampada').innerText = "Desligar"
    }
})