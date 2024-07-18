



    // ------------------------------- // 
    //                                 // 
    //     Scroll Texto HOMEPAGE       // 
    //                                 // 
    // ------------------------------- // 

    document.addEventListener('DOMContentLoaded', function () {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.homepage-container__text');
        elements.forEach(element => observer.observe(element));
    });

    // ------------------------------- // 
    //                                 // 
    //    Scroll Imagenes HOMEPAGE     // 
    //                                 // 
    // ------------------------------- // 

    document.addEventListener('DOMContentLoaded', function () {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.homepage-container__text, .homepage-container__image-wrapper');
        elements.forEach(element => observer.observe(element));
    });


    // ------------------------------- // 
    //                                 // 
    //         Animación navBar        // 
    //                                 // 
    // ------------------------------- // 


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




