let listaAmigos=[]
let listaAdicionados=[]

function adicionar(){
    //Identificando o nome do amigo
    let nome=document.getElementById('nome-amigo').value;
    //Identificando o campo "Amigos Incluídos"
    let amigos=document.getElementById('lista-amigos').textContent;
    //Inserindo no campo
    if (listaAdicionados.includes(nome)){
        alert(`O nome ${nome} já foi adicionado. Diferencie os nomes`);
    } else{
        listaAdicionados.push(nome);
        listaAmigos.push(nome);
        if (nome==' ' || nome==''){
            alert('Digite um nome válido')
        } else {
            if (document.getElementById('lista-amigos').textContent=='') {
                document.getElementById('lista-amigos').textContent=nome;
            } else {
                document.getElementById('lista-amigos').textContent=amigos+', '+nome;
            }
            document.getElementById('nome-amigo').value='';
        }
    }


}

function sortear(){
    embaralha(listaAmigos);
    let sorteio=document.getElementById('lista-sorteio');
    if (listaAmigos.length<=3){
        alert('Inclua no mínimo 4 amigos')
    } else{
        for (let i=0; i<listaAmigos.length; i++){
            if (i==listaAmigos.length-1){
                sorteio.innerHTML=sorteio.innerHTML+listaAmigos[i]+'-->'+listaAmigos[0]+'<br>';
            } else{
                sorteio.innerHTML=sorteio.innerHTML+listaAmigos[i]+'-->'+listaAmigos[i+1]+'<br>';
            }
    }
    }
}

function embaralha(lista){
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }

}


function reiniciar(){
    //Localizando os campos de digitar, amigos incluidos e sorteio
    listaAmigos=[]
    listaAdicionados=[]
    document.getElementById('lista-amigos').innerHTML='';
    document.getElementById('lista-sorteio').innerHTML='';
}
