const weddingDate = new Date("December 10, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
        document.getElementById("countdown").innerHTML = "🎉 It's Wedding Day!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerHTML = `${days} Days`;
}

updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60);
