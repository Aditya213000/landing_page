document.addEventListener('DOMContentLoaded', function () {
    // Function to smoothly scroll to the target element
    function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    }


    // Taskbar buttons
    const homeButton = document.getElementById('homeButton');
    const coursesButton = document.getElementById('coursesButton')
    const aboutButton = document.getElementById('aboutButton');
    const contactButton = document.getElementById('contactButton');

    // Content section buttons
    const learnMoreButton = document.querySelector('.styled-button');

    // Add click event listeners to taskbar buttons
    homeButton.addEventListener('click', function () {
        smoothScroll('#homeSection');
    });

    coursesButton.addEventListener('click', function (){
        smoothScroll('#coursessection');
    });

    aboutButton.addEventListener('click', function () {
        smoothScroll('#aboutSection');
    });

    contactButton.addEventListener('click', function () {
        smoothScroll('#contactSection');
    });

    // Add click event listener to the "Learn More" button in the content section
    learnMoreButton.addEventListener('click', function () {
        alert('You clicked the "Learn More" button!');
    });
});
