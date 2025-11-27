// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Mobile dropdown toggle
document.querySelectorAll('.dropdown > .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdownContent = link.nextElementSibling;
            dropdownContent.classList.toggle('show');
        }
    });
});

// Close mobile menu when clicking on a normal nav link (not dropdown parent)
document.querySelectorAll('.nav-link').forEach(n => 
    n.addEventListener('click', (e) => {
        // Only close if it's NOT a dropdown toggle
        if (!n.parentElement.classList.contains('dropdown')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    })
);


      // Animate timeline items on scroll
      const timelineItems = document.querySelectorAll(".timeline-item");

      function checkTimelineAnimation() {
        const triggerBottom = (window.innerHeight / 5) * 4;

        timelineItems.forEach((item) => {
          const itemTop = item.getBoundingClientRect().top;

          if (itemTop < triggerBottom) {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
          }
        });
      }

      // Set initial state
      timelineItems.forEach((item) => {
        item.style.opacity = "0";
        if (item.classList.contains("left")) {
          item.style.transform = "translateX(-50px)";
        } else {
          item.style.transform = "translateX(50px)";
        }
        item.style.transition = "all 0.8s ease";
      });

      window.addEventListener("scroll", checkTimelineAnimation);
      checkTimelineAnimation(); // Run once on load