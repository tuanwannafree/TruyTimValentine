const messages = [
    "Are you sure? 💔",
    "That hurts… 😢",
    "Try again? 😉",
    "My heart’s waiting ❤️",
    "No isn’t allowed! 😠",
    "Say yes, please? 🥺",
    "I’ll love you more! 😘",
    "You’re my only choice! 💘",
    "Don’t break my heart! 💞"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yesPage.html";
}
