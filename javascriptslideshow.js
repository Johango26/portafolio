// ------------------------------- // 
//           Scroll slideshow         // 
// ------------------------------- // 

document.addEventListener('DOMContentLoaded', function () {
    const observerVideoTextbox = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const videoTextboxElements = document.querySelectorAll('.outerContainer');
    videoTextboxElements.forEach(element => observerVideoTextbox.observe(element));

});



// ------------------------------- // 
//                                 // 
//         Slideshow               // 
//                                 // 
// ------------------------------- // 



//---------------------------------------------//
//              Declaramos variables           //
//--------------------------------------------//

const sliderImages = document.querySelector(".Slider-images");

const listImages = document.querySelectorAll(".Slider-images img");

const btnPrev = document.querySelector(".btnPrev"); // boton prev

const btnNext = document.querySelector(".btnNext"); // boton siguiente

const spanActual = document.getElementById("txtActual"); // texto images actual

const spanTotal = document.getElementById("txtTotal"); // texto total images

let imgIndex = 0; // imagenes actuales

const totalImages = listImages.length;  //total de imagenes



btnNext.addEventListener("click", nextImagen);

btnPrev.addEventListener("click", prevImagen);


//---------------------------------------------//
//                   Funciones                 //
//--------------------------------------------//


function nextImagen() {
    imgIndex++;
    if (imgIndex >= totalImages) {
        imgIndex = 0
    }
    actualizarSlider();
    actualizarContador();
}

function prevImagen() {
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = totalImages;
    }
    actualizarSlider();
    actualizarContador();
}

function actualizarSlider() {
    const width = sliderImages.querySelector(`img`).clientWidth;
    sliderImages.style.transform = `translateX(${-width * imgIndex}px)`;
}




function actualizarContador() {
    spanActual.textContent = imgIndex + 1;
}




//---------------------------------------------//
//                 Ejecutamos                 //
//--------------------------------------------//
actualizarContador();
spanTotal.textContent = totalImages;


//---------------------------------------------//
//                Intervalos                   //
//--------------------------------------------//

let Intervalos;
agregarIntervalo();

sliderImages.addEventListener("mouseover", () => {
    clearInterval(Intervalos);
});

sliderImages.addEventListener("mouseout", () => {
    agregarIntervalo();
})

function agregarIntervalo() {
    Intervalos = setInterval(nextImagen, 1000);
}

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

