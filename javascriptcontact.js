
// ------------------------------- // 
//           Scroll contact        // 
// ------------------------------- // 

document.addEventListener('DOMContentLoaded', function () {
    const observerVideoTextbox = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const videoTextboxElements = document.querySelectorAll('.contactContainer');
    videoTextboxElements.forEach(element => observerVideoTextbox.observe(element));

});

// ------------------------------- // 
//                                 // 
//         Animación navBar        // 
//                                 // 
// ------------------------------- // 

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('hamburger').addEventListener('click', function () {
        this.classList.toggle('active');
        document.getElementById('sidebar').classList.toggle('active');
    });

    document.getElementById('close-btn').addEventListener('click', function () {
        document.getElementById('sidebar').classList.remove('active');
        document.getElementById('hamburger').classList.remove('active');
    });

    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
});