document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to Antonette Simms' Portfolio!");
});
function chatbotResponse(userInput) {
    const responses = {
        "hello": "Hi there! How can I help you?",
        "projects": "I have worked on network security, machine learning, and chatbot projects.",
        "resume": "You can download my resume from the Resume page."
    };

    return responses[userInput.toLowerCase()] || "I'm still learning! Try asking something else.";
}

document.addEventListener("DOMContentLoaded", function () {
    const chatbotBox = document.createElement("div");
    chatbotBox.innerHTML = `
        <div id="chatbot">
            <p><strong>Chatbot:</strong> Ask me about my skills or projects!</p>
            <input type="text" id="chatInput" placeholder="Type here...">
            <button onclick="sendMessage()">Send</button>
        </div>
    `;
    document.body.appendChild(chatbotBox);
});

function sendMessage() {
    const userInput = document.getElementById("chatInput").value;
    alert("Chatbot: " + chatbotResponse(userInput));
}

