


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
        mainContainer.style.height = '45vh';
    });

    textarea.addEventListener('blur', function () {
        mainContainer.style.height = '';
    });
}

/*
const methodOne = document.getElementById('prompt');
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => window.scrollTo(0, 100));
  methodOne.addEventListener('focus', () => {
    methodOne.style.opacity = 0;
    setTimeout(() => (methodOne.style.opacity = 1));
  });
});
*/


// 1. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
// Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
// This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
const targetElement = document.getElementById('chat-container');

// 2. ...in some event handler after showing the target element...disable body scroll
bodyScrollLock.disableBodyScroll(targetElement);