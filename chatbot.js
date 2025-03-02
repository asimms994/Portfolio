// Show chatbot when the page loads
window.onload = () => {
    setTimeout(() => {
        document.getElementById("chatbox").style.display = "block";
    }, 2000); // Show the chatbot after 2 seconds of loading the page
};

// Function to add a message to the chat
function addMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    document.getElementById("chat-content").appendChild(messageElement);
    document.getElementById("chat-content").scrollTop = document.getElementById("chat-content").scrollHeight; // Scroll to the latest message
}

// Handle user message
document.getElementById("send-chat").onclick = function () {
    const userMessage = document.getElementById("chat-input").value;
    if (userMessage.trim() !== "") {
        addMessage(userMessage, "user");
        document.getElementById("chat-input").value = ""; // Clear input field

        // Simple chatbot response logic
        setTimeout(() => {
            const botResponse = getChatbotResponse(userMessage);
            addMessage(botResponse, "bot");
        }, 1000); // Delay bot's response
    }
};

// Function to generate bot responses
function getChatbotResponse(message) {
    message = message.toLowerCase();
    if (message.includes("hello")) {
        return "Hello! How can I assist you today?";
    } else if (message.includes("portfolio")) {
        return "You can view my portfolio on the 'Projects' page.";
    } else if (message.includes("resume")) {
        return "You can view my resume on the 'Resume' page.";
    } else {
        return "Sorry, I didn't understand that. Could you please clarify?";
    }
}

// Close the chatbox
document.getElementById("close-chat").onclick = function () {
    document.getElementById("chatbox").style.display = "none";
};
