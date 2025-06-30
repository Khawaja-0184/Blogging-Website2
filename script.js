document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;
    let slideInterval;
    const slideCount = slides.length;

    // Function to show a specific slide
    function showSlide(index) {
        // Wrap around if index is out of bounds
        if (index >= slideCount) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slideCount - 1;
        } else {
            currentSlide = index;
        }
        
        // Update slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }

    // Function to go to next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
        resetTimer();
    }

    // Function to go to previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
        resetTimer();
    }

    // Function to start the auto-slide timer
    function startTimer() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Function to reset the timer
    function resetTimer() {
        clearInterval(slideInterval);
        startTimer();
    }

    // Event listeners for buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            resetTimer();
        });
    });

    // Initialize the slider
    showSlide(0);
    startTimer(2);
});


