

document.getElementById('num').addEventListener('keypress', function(event) {
  
    const char = String.fromCharCode(event.keyCode);
    if (!/^\d$/.test(char)) {
        
        event.preventDefault();
        
    }
});

const data = {
    "flow": "f16518f7-4062-4c39-befd-5e2de3a4f55b",
    "urns": ["tel:+527713719671"],
    "params": {
        "codigo": "12345",
        "texto": "mensaje de prueba"
    } 
}
const url = 'https://omni.c3ntro.com/api/v2/flow_starts.json?voz'

const envio = () => {
    
    fetch(url, {
        method: 'POST', 
        credentials:'include',
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': 'Token b3ded447f8db29a1dad97e2abeee9fc72a715367', 
        },
        body: JSON.stringify(data) // body
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }
        return response.json(); // procesar en json
    })
    .then(data => {
        console.log('Respuesta recibida:', data); //ok
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud:', error); // error
    });
}
