// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
            behavior: 'smooth'
        });
    });
});

// Sticky Navbar Background Change on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

// FAQ Section - Toggle Answer Visibility
document.querySelectorAll('.question-title').forEach(title => {
    title.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});

// Project Cards Hover Effect
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'scale(1.1)';
    });
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'scale(1)';
    });
});