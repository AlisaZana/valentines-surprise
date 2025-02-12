const messageElement = document.getElementById('message');
const surpriseButton = document.getElementById('surpriseButton');

surpriseButton.addEventListener('click', () => {
  const messages = [
    "Roses are red,",
    "Violets are blue,",
    "rrakun e kam t madh",
    "you know it's true! 💖",
    "",
    "Happy Valentine's Day, amore mio!",
    "Forever yours, megalluksi_69 ❤️"
  ];

  let index = 0;
  const interval = setInterval(() => {
    if (index < messages.length) {
      messageElement.textContent = messages[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, 5000); // Change message every 5 second
});