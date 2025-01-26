let listaAmigos = [];  

console.log=(listaAmigos);
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim(); 

    if (nombreAmigo) {  
        listaAmigos.push(nombreAmigo); 
        actualizarLista();  
        input.value = '';  
    } else {
        alert('Por favor, ingresa un nombre.');
    }
}

function actualizarLista() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';  
    listaAmigos.forEach(function(amigo) {
        const li = document.createElement('li');  
        li.textContent = amigo;  
        listaElement.appendChild(li);  
    });
}

function sortearAmigo() {
    console.log = (listaAmigos);
    if (listaAmigos.length === 0) {
        alert('¡Agrega al menos un amigo antes de sortear!');
        return;
    }

    const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>Tu amigo secreto es: ${amigoSorteado}</li>`;
}
    