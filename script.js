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

    // Chama a API da OpenAI
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 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`
        },
        body: JSON.stringify({
            prompt: userInput,
            max_tokens: 150,
        })
    });

    const data = await response.json();
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.textContent = data.choices[0].text.trim();
    chatBox.appendChild(botMessage);

    // Rola para baixo para ver a nova mensagem
    chatBox.scrollTop = chatBox.scrollHeight;
}
