
    // ------------------------------- // 
    //                                 // 
    //     Scroll Quien Soy             // 
    //                                 // 
    // ------------------------------- // 

    document.addEventListener('DOMContentLoaded', function () {
        const observerMeTextOnly = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 200); // Delay de 200ms para el texto
                }
            });
        }, { threshold: 0.1 });

        const elementsMeTextOnly = document.querySelectorAll('.me-container__textonly');
        elementsMeTextOnly.forEach(element => observerMeTextOnly.observe(element));


        const observerAcordeon = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 400); // Delay de 400ms para el acordeón
                }
            });
        }, { threshold: 0.1 });

        const elementsAcordeon = document.querySelectorAll('.acordeon');
        elementsAcordeon.forEach(element => observerAcordeon.observe(element));
    });


    document.addEventListener('DOMContentLoaded', function () {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.me-container__text');
        elements.forEach(element => observer.observe(element));
    });


    document.addEventListener('DOMContentLoaded', function () {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.me-container__text, .me-container__image-wrapper');
        elements.forEach(element => observer.observe(element));
    });

    // ------------------------------- // 
    //                                 // 
    //         Acordeon                // 
    //                                 // 
    // ------------------------------- // 


    document.addEventListener('DOMContentLoaded', function () {
        const acordeon = document.querySelector(".acordeon");
        const headers = document.querySelectorAll(".acordeon-header");
        const acordeonItems = document.querySelectorAll(".acordeon-item");

        headers.forEach(header => {
            header.addEventListener("click", () => {
                const item = header.closest(".acordeon-item");
                cerrarTodas();
                item.classList.toggle("active");
            });
        });

        headers[0].click(); // Abre el primer elemento por defecto

        function cerrarTodas() {
            acordeonItems.forEach(elemento => {
                elemento.classList.remove("active");
            });
        }
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
