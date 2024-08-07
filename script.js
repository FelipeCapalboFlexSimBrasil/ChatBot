async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    // Adiciona a mensagem do usuário ao chat
    const chatBox = document.getElementById("chat-box");
    const userMessage = document.createElement("div");
    userMessage.textContent = `Você: ${userInput}`;
    chatBox.appendChild(userMessage);

    // Limpa o campo de entrada
    document.getElementById("user-input").value = "";

    // Chama a API da OpenAI
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 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` // Substitua YOUR_API_KEY pela sua chave de API da OpenAI
        },
        body: JSON.stringify({
            prompt: userInput,
            max_tokens: 150,
        })
    });

    const data = await response.json();
    const botMessage = document.createElement("div");
    botMessage.textContent = `Chatbot: ${data.choices[0].text}`;
    chatBox.appendChild(botMessage);

    // Rola para baixo para ver a nova mensagem
    chatBox.scrollTop = chatBox.scrollHeight;
}
