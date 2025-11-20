document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const chapterDisplay = document.getElementById('chapterDisplay');
    const slideCounter = document.getElementById('slideCounter');

    let currentSlide = 0;
    const totalSlides = slides.length;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev');

            if (index === currentSlide) {
                slide.classList.add('active');

                // Update Chapter Display based on class
                if (slide.classList.contains('roadmap-1')) {
                    chapterDisplay.textContent = "Roadmap 1: Foundations";
                    chapterDisplay.style.color = "var(--accent-color)";
                } else if (slide.classList.contains('roadmap-2')) {
                    chapterDisplay.textContent = "Roadmap 2: Integrated Ops";
                    chapterDisplay.style.color = "var(--accent-secondary)";
                } else if (slide.classList.contains('roadmap-3')) {
                    chapterDisplay.textContent = "Roadmap 3: Agentic Enterprise";
                    chapterDisplay.style.color = "var(--accent-tertiary)";
                } else {
                    chapterDisplay.textContent = "Summary";
                    chapterDisplay.style.color = "#fff";
                }

            } else if (index < currentSlide) {
                slide.classList.add('prev');
            }
        });

        // Update Buttons
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;

        // Update Counter
        slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlides();
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlides();
        }
    }

    // Event Listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Initialize
    updateSlides();
});
