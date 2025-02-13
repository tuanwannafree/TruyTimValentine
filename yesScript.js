document.addEventListener("DOMContentLoaded", function () {
    let body = document.body;
    let transitionTime = 5000; // Time before switching pages
    let fadeDuration = 3; // Seconds for fade effect

    // Step 1: Slowly change background color
    body.style.transition = `background-color ${fadeDuration}s ease-in-out`;
    setTimeout(() => {
        body.style.backgroundColor = "#312"; // Match the heart page background
    }, 500); // Start fade a little after page load

    // Step 2: After transitionTime, switch to heart page
    setTimeout(() => {
        let overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.background = "#312";
        overlay.style.opacity = "0";
        overlay.style.transition = `opacity ${fadeDuration}s ease-in-out`;
        document.body.appendChild(overlay);

        // Start fade-out effect
        setTimeout(() => {
            overlay.style.opacity = "1";
        }, 100);

        // Redirect after fade
        setTimeout(() => {
            window.location.href = "./heart/Infinitive_heart_main.html"; // Change to your heart page if different
        }, fadeDuration * 1000);
    }, transitionTime);
});
