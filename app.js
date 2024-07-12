function encriptar() {
    let texto = document.getElementById('input').value;
    let encriptado = [];


    for (let letra of texto) {
        
        if(letra == "a"){
            encriptado.push("ai");
        } else if(letra == "e"){
            encriptado.push("enter");
        } else if (letra == "i"){
            encriptado.push("imes");
        } else if (letra == "o"){
            encriptado.push("ober");
        } else if (letra == "u"){
            encriptado.push("ufat");
        } else {
            encriptado.push(letra);
        }
    }

    
}
