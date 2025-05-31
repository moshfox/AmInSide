function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value;

  if (!userText) return;

  // Mostrar el mensaje del usuario
  chatBox.innerHTML += `<p><strong>Tú:</strong> ${userText}</p>`;

  // Simular una respuesta
  setTimeout(() => {
    const respuesta = generarRespuesta(userText);
    chatBox.innerHTML += `<p><strong>AmInSide:</strong> ${respuesta}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  input.value = "";
}

function generarRespuesta(texto) {
  return "Estoy aprendiendo... ¡pronto seré una super IA académica y creativa!";
}
