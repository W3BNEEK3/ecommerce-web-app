const mobileMenuBtn = document.getElementById('mobile-menu');
const mobileSidebar = document.getElementById('mobileSidebar');



mobileMenuBtn.addEventListener('click', () => {
        mobileSidebar.classList.toggle('active');
});


