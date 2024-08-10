async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    const chatBox = document.getElementById("chat-box");

    // Adiciona a mensagem do usuário ao chat
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Limpa o campo de entrada
    document.getElementById("user-input").value = "";

    // Chama a API da OpenAI (substitua esta parte para usar o LLaMA localmente)
    const response = await fetch('/api/llama', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: userInput })
    });

    const data = await response.json();
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.textContent = data.response; // Certifique-se de que o backend retorna o texto da resposta aqui
    chatBox.appendChild(botMessage);

    // Rola para baixo para ver a nova mensagem
    chatBox.scrollTop = chatBox.scrollHeight;
}
