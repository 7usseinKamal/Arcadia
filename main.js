// Loading screen variables
const theBody = document.querySelector('body');
const loadingBar = document.querySelector('.load');
const theHtml = document.querySelector('html');

// Set style attribute to body to take the overflow "hidden"
theBody.setAttribute('style', 'overflow: hidden;');

// Set the HTML element to scrollBehavior : auto
theHtml.style.scrollBehavior = 'auto';

/*
    SetTimeout to activate the screen loading
    *** and ***
    so after 5 seconds the HTML baecome 'smooth' scrollBehavior
*/
function loadingFunc() {
    window.addEventListener('load', _ => {
        window.scrollTo(0, 0);
        theHtml.style.scrollBehavior = 'smooth';
        setTimeout(() => {
            loadingBar.style.display = 'none';
            theBody.removeAttribute('style');
        }, 5_000); // Syntactic sugar
        showSlide();
    })
    setTimeout(type, 5000);
}
loadingFunc();

const hamburgerBtnOpen = document.getElementById('btn');
const hamburgerBtnClose = document.getElementById('cancel');
const slideBar = document.querySelector('.slide_bar');
const myHtml = document.querySelector('html');

// Add and remove show class to slideBar
const showSlide = () => {
    hamburgerBtnOpen.addEventListener('click', _ => {
        slideBar.classList.add('show');
    });
    hamburgerBtnClose.addEventListener('click', _ => {
        slideBar.classList.remove('show');
    });
    CreatetheLis();
}

// List items variables
const theSections = document.querySelectorAll('.main__content');
const theUl = document.querySelector('.nav__bar');
const fragment = document.createDocumentFragment();

// Create the list items
const CreatetheLis = () => {
    theSections.forEach(section => {
        let sectionDataNav = section.getAttribute('data-nav');
        let theDataTarget = section.getAttribute('data-target')
        let theLis = document.createElement('li');
        theLis.textContent = sectionDataNav;
        theLis.classList.add("navBar__li", theDataTarget);
        fragment.appendChild(theLis);
        theLis.addEventListener('click', _ => {
            section.scrollIntoView({ behavior: 'smooth' });
            slideBar.classList.remove('show');
            myHtml.style.overflow = 'visible';
        });
        changeActive(theLis);
    });
    theUl.appendChild(fragment);
    theUl.children[0].classList.add("activate");
}

// Function to change activate class when scroll
const changeActive = list => {
    window.addEventListener('scroll', _ => {
        let current = "";
        theSections.forEach(section => {
        let sectionHeight = section.clientHeight;
        if (scrollY > (section.offsetTop - sectionHeight / 3)) {
            current = section.getAttribute("data-target");
        }
        });
        let listArr = [list];
        listArr.forEach(li => {
            li.classList.remove("activate");
            if (li.classList.contains(current)) {
                li.classList.add("activate");
            } else {
                li.classList.remove("activate");
            }
        });
    })
}

// Typing function
const typedTextSpan = document.querySelector(".typed_text");
const textArray = ['We make websites', 'Web design with diffence', '24/6 date of started'];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
	if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } 
    else {
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
    }
}

// Slider variables 
const theContainer = document.querySelector('.slides__container');
const theSliders = document.querySelectorAll('.slider__bar');
const navDotsContainer = document.querySelector('.navigation__dots');
let theSlidersLength = theSliders.length;

// Positions of the slider
function thePositions() {
    theSliders.forEach((elm, i) => {
        elm.style.left = i * 100 + '%';
    });
    createNavigationDots();
}
thePositions();

// Create navigation dots 
function createNavigationDots() {
    for (let j = 0; j < theSlidersLength; j++) {
        let createDots = document.createElement('div');
        createDots.classList.add('single__dot');
        navDotsContainer.appendChild(createDots);
    };
    navDotsContainer.children[0].classList.add('active');
    theClick();
}

// Excution function to activate the slider
function theClick() {
    const theDotes = document.querySelectorAll('.single__dot');
    theDotes.forEach(ele => {
        ele.addEventListener('click', e => {
            theDotes.forEach(ele => {
                ele.classList.remove('active');
            });
            e.currentTarget.classList.add('active');
            if (theDotes[0].classList.contains('active')) {
                theContainer.style.transform = 'translateX(' + 0 + '%)';
            } else if (theDotes[1].classList.contains('active')) {
                theContainer.style.transform = 'translateX(-' + 100 + '%)';
            } else if (theDotes[2].classList.contains('active')) {
                theContainer.style.transform = 'translateX(-' + 200 + '%)';
            };
        });
    });
    buttonClick();
}

// The form button
function buttonClick() {
    const buttonForm = document.getElementById('btnForm')
    buttonForm.addEventListener('click', _ => {
        window.open('', '_blank', 'Width=400,height=400,left=10,top=10,menubar=no,status=no', 'true');
    })
}

// Back to top function
const backToTop = document.getElementById('toTop');

function toTop() {
    backToTop.addEventListener('click', _ => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    })
    console.log(document.lastModified + ' By %cHussein Kamal', 'color: red; text-transform: uppercase');
}
toTop();
