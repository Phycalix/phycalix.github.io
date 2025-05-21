document.addEventListener('DOMContentLoaded', function() {
    const typingTexts = [
        "Shaping the Future of Microalgae",
        "Driven by passion, powered by science",
        "Disrupting industries with next-gen biotechnology",
        "Transforming microalgae into high-value solutions",
        "Sustainable, scalable, and revolutionary",
        "The next frontier in food, wellness, and beyond"
    ];

    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const typingSpeed = 80;
    const erasingSpeed = 30;
    const delayBetweenTexts = 2000;
    const targetElement = document.querySelector('h1');

    // Set a fixed line height
    targetElement.style.lineHeight = '2em';
    targetElement.style.minHeight = '2em';

    function type() {
        const currentText = typingTexts[currentTextIndex];
        if (isDeleting) {
            targetElement.textContent = currentText.substring(0, currentCharIndex--);
            if (currentCharIndex < 0) {
                isDeleting = false;
                currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(type, erasingSpeed);
            }
        } else {
            targetElement.textContent = currentText.substring(0, currentCharIndex++);
            if (currentCharIndex > currentText.length) {
                isDeleting = true;
                setTimeout(type, delayBetweenTexts);
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();
});