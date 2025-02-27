document.addEventListener('DOMContentLoaded', () => {
  const chatWindow = document.getElementById('chat-window');
  const chatForm = document.getElementById('chat-form');
  const userInput = document.getElementById('user-input');

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const messageText = userInput.value.trim();
    if (messageText !== '') {
      addMessage(messageText, 'user');
      userInput.value = '';
      fetch('/api/chat', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify({message : messageText}),
      })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => { addMessage(data.response, 'bot'); })
          .catch((error) => {
            console.error('Error:', error);
            addMessage('Error communicating with AI.', 'bot');
          });
    }
  });

  function addMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = text;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
});