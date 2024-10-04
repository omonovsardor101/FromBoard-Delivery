//  -------Calculator Tel-----------
const phoneInp = document.getElementById("calc-phone");
const defaultText = "+7(___)___-__-__";

phoneInp.onmouseover = () => {
    phoneInp.setAttribute("placeholder", defaultText);
}

phoneInp.onmouseleave = () => {
    phoneInp.setAttribute("placeholder", "Телефон");
}

phoneInp.onkeydown = (event) => {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if (isNaN(event.key) && !allowedKeys.includes(event.key)) {
        event.preventDefault();
    }
}

/* The rest of phone input functionality will be done later
   as well as form validation :)
*/


// -------Slider--------

let slider = document.querySelector(".slides");

function nextSlide() {
    slider.scrollLeft += 650;
}

function prevSlide() {
    slider.scrollLeft -= 650;
}

function updateSliderOnSmallerScreen() {
    if(window.innerWidth <= 600) {
        nextSlide = function() {
            slider.scrollLeft += 358;
        }
        prevSlide = function() {
            slider.scrollLeft -= 358;    
        }
    }
    else if(window.innerWidth <= 774) {
        nextSlide = function() {
            slider.scrollLeft += 449;
        }
        prevSlide = function() {
            slider.scrollLeft -= 449;    
        }
    }
    else if(window.innerWidth <= 1070) {
        nextSlide = function() {
            slider.scrollLeft += 582;
        }
        prevSlide = function() {
            slider.scrollLeft -= 582;    
        }
    }
    else if(window.innerWidth <= 1536) {
        nextSlide = function() {
            slider.scrollLeft += 424;
        }
        prevSlide = function() {
            slider.scrollLeft -= 424;    
        }
    }
}

updateSliderOnSmallerScreen();

window.addEventListener('resize', updateSliderOnSmallerScreen);


// -------Burger Menu---------
var burgerIcon = document.querySelector('.burger-btn img');

function burgerModal() {
    if (burgerIcon.getAttributeNode("src").value == "img/icons/burger.svg") {
        burgerIcon.setAttribute("src", "img/icons/close.svg");
        document.querySelector('.modal').style.top = "110px";

        setTimeout(() => {
            document.body.style.setProperty('--visibility', 'block');    
        }, 60);        
    }
    else if(burgerIcon.getAttributeNode("src").value == "img/icons/close.svg") {
        burgerIcon.setAttribute("src", "img/icons/burger.svg");
        document.querySelector('.modal').style.top = "-300px";

        document.body.style.setProperty('--visibility', 'none');        
    }
}

// --------------Navigation--------------

document.getElementById('nav-calc').onclick = () => {
    burgerIcon.setAttribute("src", "img/icons/burger.svg");
    document.body.style.setProperty('--visibility', 'none');
    document.querySelector('.modal').style.top = "-300px";
}

document.getElementById('nav-about').onclick = () => {
    burgerIcon.setAttribute("src", "img/icons/burger.svg");
    document.body.style.setProperty('--visibility', 'none');
    document.querySelector('.modal').style.top = "-300px";
}

document.getElementById('nav-guarantee').onclick = () => {
    burgerIcon.setAttribute("src", "img/icons/burger.svg");
    document.body.style.setProperty('--visibility', 'none');
    document.querySelector('.modal').style.top = "-300px";
}

document.getElementById('nav-feedbacks').onclick = () => {
    burgerIcon.setAttribute("src", "img/icons/burger.svg");
    document.body.style.setProperty('--visibility', 'none');
    document.querySelector('.modal').style.top = "-300px";
}


// -------------Go To Top-----------------

window.onscroll = function() {
    if (document.body.scrollTop > (window.innerHeight / 2) || document.documentElement.scrollTop > (window.innerHeight / 2)) {
        document.getElementById("to-top").style.display = "block";
    } else {
        document.getElementById("to-top").style.display = "none";
    }
}

document.getElementById("to-top").addEventListener("click", () => {
    window.scrollTo(0, 0);
    document.getElementById("to-top").style.display = "none";
});
