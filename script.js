// Sound button on the hero video
const video = document.getElementById("heroVideo");
const soundBtn = document.getElementById("soundBtn");

if (video && soundBtn) {
    video.volume = 0.2;

    soundBtn.addEventListener("click", function () {
        video.muted = !video.muted;
        soundBtn.textContent = video.muted ? "🔇" : "🔊";
    });
}

// Hero buttons
const projectBtn = document.getElementById("projectBtn");
const contactBtn = document.getElementById("contactBtn");

if (projectBtn) {
    projectBtn.addEventListener("click", function () {
        window.location.href = "projects.html";
    });
}

if (contactBtn) {
    contactBtn.addEventListener("click", function () {
        window.location.href = "contact.html";
    });
}