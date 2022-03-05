function gerarBola(){
    atual = document.getElementById('boladeneve')
    
    if (atual == null){
        footer = document.getElementById('footer')

        div = document.createElement('div')
        div.setAttribute('class','boladeneve')
        div.setAttribute('id','boladeneve')
        footer.append(div)
    }
    else{
        atual.remove()
        footer = document.getElementById('footer')

        div = document.createElement('div')
        div.setAttribute('class','boladeneve')
        div.setAttribute('id','boladeneve')
        footer.append(div)
    }

    
}