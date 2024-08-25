


function addMessageToContainer(message, className) {
    const chatContainer = document.getElementById('chat-container');
    let messageElementContainer;
    let messageElement;

    messageElementContainer = document.createElement('div');
    messageElementContainer.className = className;

    messageElement = document.createElement('div');
    messageElement.className = "message";
    messageElement.textContent = message;

    messageElementContainer.appendChild(messageElement);
    chatContainer.appendChild(messageElementContainer);

    chatContainer.scrollTop = chatContainer.scrollHeight;
}


function sendMessage() {
    const userPromptContainer = document.getElementById('prompt');
    const userPrompt = userPromptContainer.value.trim();  // Captura el texto ingresado y elimina espacios vacios
    userPromptContainer.value = ""; // Borrar el contenido del textarea

    if (userPrompt) {
        // Mostrar el mensaje del usuario alineado a la derecha
        addMessageToContainer(userPrompt, 'user-message');


    } else {
        alert("Please enter a message.");
    }
}


document.getElementById('prompt').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();  // Prevenir salto de línea
        sendMessage();  // Enviar el mensaje
    }
});



const mainContainer = document.getElementById('main-container');
const textarea = document.getElementById('prompt');

// Detectar si estamos en un dispositivo móvil (ancho <= 768px)
if (window.matchMedia("(max-width: 450px)").matches) {

    // Lógica para manejar el focus y blur del textarea
    textarea.addEventListener('focus', function () {
        mainContainer.style.height = '50vh';
    });

    textarea.addEventListener('blur', function () {
        mainContainer.style.height = '';
    });
}


