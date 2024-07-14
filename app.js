let reemplazo = ["e", "enter","o", "ober", "i", "imes","a", "ai", "u", "ufat"];

function copiarTextoAlPortapapeles(texto) {
    
    navigator.clipboard.writeText(texto)
        .catch(err => {
            // Error: Failed to copy text
            console.error('No se pudo copiar el texto', err);
        });
}

function encriptar() {
    let texto = document.getElementById('input').value;
    
    let encriptado = texto;

    for (let i = 0; i < 9; i +=2){
        if(encriptado.includes(reemplazo[i])){
            encriptado = encriptado.replaceAll(reemplazo[i], reemplazo[i+1]);
        }
    }
    let nuevoParrafo = document.createElement('p');
    let botonCopiar = document.createElement('button');
    let division = document.createElement('div');

    division.className = "nuevo-div";
    botonCopiar.className = "copiar";
    botonCopiar.textContent ="Copiar";
    botonCopiar.onclick = () => copiarTextoAlPortapapeles(encriptado);
    nuevoParrafo.classList.add('nuevo-parrafo');
    nuevoParrafo.id = 'texto';
    
    
    
    nuevoParrafo.textContent = encriptado; 

    division.appendChild(nuevoParrafo);
    division.appendChild(botonCopiar);
    let contenedorDer = document.querySelector('.der');
    contenedorDer.innerHTML = '';
    contenedorDer.appendChild(division);
}




function desencriptar(){
    let texto = document.getElementById('input').value;
    let desencriptado = texto;
    for(let i = 1; i < 10; i+= 2){
        if(desencriptado.includes(reemplazo[i])){
            desencriptado = desencriptado.replaceAll(reemplazo[i], reemplazo[i-1]);
        }
    }

    let nuevoParrafo = document.createElement('p');
    let botonCopiar = document.createElement('button');
    let division = document.createElement('div');

    division.className = "nuevo-div";
    botonCopiar.className = "copiar";
    botonCopiar.textContent ="Copiar";
    botonCopiar.onclick = () => copiarTextoAlPortapapeles(desencriptado);
    nuevoParrafo.classList.add('nuevo-parrafo');
    nuevoParrafo.id = 'texto';
    
    
    
    nuevoParrafo.textContent = desencriptado; 

    division.appendChild(nuevoParrafo);
    division.appendChild(botonCopiar);
    let contenedorDer = document.querySelector('.der');
    contenedorDer.innerHTML = '';
    contenedorDer.appendChild(division);

}
