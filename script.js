const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

const H1Text = [
    "MUEHEHEHEHE!",
    "Are You Busy?",
    "Or Are You Buzzy Buzzy? Xixixixi",
    "I want to ask you something...",
    "Hehehe Nevermind",
    "I'm just kidding",
    "I want to ask...",
]

let messageIndex = 0;
let H1Index = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "Yeppie.html";
}

function handlePageClick() {
    window.location.href = 'toGregory.html'; 
}

document.body.addEventListener("click", function() {
    const H1 = document.getElementById("H1");

    if (H1Index < H1Text.length) {
        H1.textContent = H1Text[H1Index];
        H1Index++;
    } else {
        handlePageClick();
    }
});