// Función para mostrar un mensaje de amor
function showLove() {
    const messages = [
        "Camila, eres mi todo. 💖",
        "Tu sonrisa es mi felicidad. 🌟",
        "Gracias por ser mi Pochacco favorito. 🐾",
        "Te amo más de lo que las palabras pueden expresar. ❤️",
        "Eres la razón por la que mi mundo es perfecto. ✨",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
    createConfetti();
}

// Función para crear confeti
function createConfetti() {
    const confettiContainer = document.getElementById("confetti-container");
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confettiContainer.appendChild(confetti);
    }
    setTimeout(() => {
        confettiContainer.innerHTML = "";
    }, 5000);
}

// Mensaje de consola secreto
console.log("Camila, eres la persona más especial en mi vida. 💕");