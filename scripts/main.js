// navbar
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Highlight active page
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
});
// end navbar




    
// video service
document.addEventListener('DOMContentLoaded', function() {
    const videoContainers = document.querySelectorAll('.video-container');
    const modal = document.querySelector('.video-modal');
    const modalVideo = document.querySelector('.modal-video');
    const closeBtn = document.querySelector('.modal-close-btn');

    videoContainers.forEach(container => {
        container.addEventListener('click', function() {
            const video = this.querySelector('.service-video');
            const videoSource = video.querySelector('source').src;
            
            modalVideo.querySelector('source').src = videoSource;
            modalVideo.load();
            
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modalVideo.play();
        });
    });

    // Updated modal click handler
    modal.addEventListener('click', function(e) {
        if (!modalVideo.contains(e.target)) {
            modalVideo.pause();
            modalVideo.currentTime = 0;
            modal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modalVideo.pause();
            modal.style.display = 'none';
        }
    });
});
// end video service