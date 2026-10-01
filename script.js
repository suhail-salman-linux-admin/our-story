```javascript
/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader")
            .classList.add("hide");

    }, 1800);

});


/* =========================
   BEGIN STORY
========================= */

function beginStory() {

    document.querySelector(".universe")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   FLOATING HEARTS
========================= */

const heartSymbols = [
    "♥",
    "♡",
    "❤",
    "💕",
    "✨"
];


function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.innerHTML =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        10 + Math.random() * 22 + "px";

    heart.style.color =
        Math.random() > .5
            ? "#e8a1b4"
            : "#ffffff";

    heart.style.animationDuration =
        5 + Math.random() * 6 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 11000);

}


setInterval(createHeart, 900);


/* =========================
   NO BUTTON
========================= */

const noButton =
    document.getElementById("noBtn");


function moveNoButton() {

    const padding = 20;

    const maxX =
        window.innerWidth -
        noButton.offsetWidth -
        padding;

    const maxY =
        window.innerHeight -
        noButton.offsetHeight -
        padding;

    const x =
        padding +
        Math.random() * Math.max(maxX - padding, 1);

    const y =
        padding +
        Math.random() * Math.max(maxY - padding, 1);

    noButton.style.position =
        "fixed";

    noButton.style.left =
        x + "px";

    noButton.style.top =
        y + "px";

    noButton.style.zIndex = "5000";
}


/* Desktop */

noButton.addEventListener(
    "mouseenter",
    moveNoButton
);


/* Mobile */

noButton.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        moveNoButton();

    }
);


/* =========================
   YES BUTTON
========================= */

function sayYes() {

    const proposal =
        document.querySelector(".proposal");

    const success =
        document.getElementById("success");

    proposal.style.display =
        "none";

    success.classList.add("show");

    createConfetti();

    createCelebrationHearts();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   CELEBRATION HEARTS
========================= */

function createCelebrationHearts() {

    for (let i = 0; i < 100; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.className =
                "floating-heart";

            heart.innerHTML =
                ["❤️", "💖", "💕", "💗", "💘", "✨"]
                [
                    Math.floor(
                        Math.random() * 6
                    )
                ];

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                15 + Math.random() * 35 + "px";

            heart.style.animationDuration =
                3 + Math.random() * 5 + "s";

            document.body.appendChild(heart);

            setTimeout(() => {

                heart.remove();

            }, 8000);

        }, i * 40);

    }

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const container =
        document.querySelector(
            ".confetti-container"
        );

    const symbols = [
        "♥",
        "✦",
        "✧",
        "•"
    ];

    for (let i = 0; i < 120; i++) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti";

        piece.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.fontSize =
            10 + Math.random() * 20 + "px";

        piece.style.color =
            Math.random() > .5
                ? "#eaa5b8"
                : "#ffffff";

        piece.style.animationDuration =
            2 + Math.random() * 4 + "s";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(piece);

    }

}


/* =========================
   MUSIC
========================= */

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

let musicPlaying = false;


function toggleMusic() {

    if (!music.src) {

        alert(
            "Add your song as song.mp3 in the GitHub repository first ❤️"
        );

        return;

    }

    if (musicPlaying) {

        music.pause();

        musicBtn.innerHTML =
            "♫ <span>Our Song</span>";

        musicPlaying = false;

    } else {

        music.play();

        musicBtn.innerHTML =
            "❚❚ <span>Playing...</span>";

        musicPlaying = true;

    }

}
```
