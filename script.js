body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
    position: relative;
}

.logo {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100px;
    height: auto;
}

#chat-container {
    width: 100%;
    max-width: 400px;
    height: 600px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

header {
    background-color: #1a3e5c; /* Azul escuro */
    color: white;
    padding: 10px;
    text-align: center;
}

#chat-box {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    background-color: #e5ddd5;
}

#chat-box div {
    margin: 5px 0;
    padding: 10px;
    border-radius: 10px;
    max-width: 80%;
}

#chat-box .user-message {
    align-self: flex-end;
    background-color: #ffcc00; /* Dourado */
    color: #000;
}

#chat-box .bot-message {
    align-self: flex-start;
    background-color: #fff;
    color: #000;
    border: 1px solid #ccc;
}

footer {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ccc;
    background-color: #fff;
}

#user-input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    margin-right: 10px;
    outline: none;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background-color: #1a3e5c; /* Azul escuro */
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #16334c; /* Um tom mais escuro de azul */
}
