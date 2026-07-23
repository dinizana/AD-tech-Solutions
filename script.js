/*==========================================
        MENU MOBILE
==========================================*/

const menuButton = document.querySelector(".menu-mobile");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});

/*==========================================
        HEADER AO ROLAR
==========================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }

});

/*==========================================
        SCROLL REVEAL
==========================================*/

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    const windowHeight = window.innerHeight;

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

/*==========================================
        CONTADORES
==========================================*/

const counters = document.querySelectorAll(".number h2");

let started = false;

function startCounter(){

    const numbers = document.querySelector(".numbers");

    if(!numbers) return;

    const top = numbers.getBoundingClientRect().top;

    if(top < window.innerHeight && !started){

        started = true;

        counters.forEach(counter=>{

            const text = counter.innerText;

            const finalValue = parseInt(text.replace(/\D/g,""));

            const hasPercent = text.includes("%");
            const hasPlus = text.includes("+");

            if(isNaN(finalValue)) return;

            let value = 0;

            const increment = Math.ceil(finalValue / 60);

            const timer = setInterval(()=>{

                value += increment;

                if(value >= finalValue){

                    value = finalValue;

                    clearInterval(timer);

                }

                let display = value.toString();

                if(hasPlus){

                    display = "+" + display;

                }

                if(hasPercent){

                    display += "%";

                }

                counter.innerText = display;

            },25);

        });

    }

}

window.addEventListener("scroll", startCounter);

startCounter();

/*==========================================
        BOTÃO TOPO
==========================================*/

const topButton = document.createElement("div");

topButton.className = "top";

topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==========================================
        SCROLL SUAVE LINKS
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const id = this.getAttribute("href");

        const target = document.querySelector(id);

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

        nav.classList.remove("active");

    });

});

/*==========================================
        MENU ATIVO
==========================================*/

const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if(scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    menuLinks.forEach(link=>{

        link.classList.remove("selected");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("selected");

        }

    });

});

/*==========================================
        EFEITO HOVER CARDS
==========================================*/

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(0,212,255,.15),
        white 70%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="white";

    });

});

/*==========================================
        HERO PARALLAX
==========================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    let offset = window.scrollY;

    hero.style.backgroundPositionY = offset * .4 + "px";

});

/*==========================================
        LOADER
==========================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

/*==========================================
        DIGITAÇÃO HERO
==========================================*/

const title = document.querySelector(".hero h1");

if(title){

    const text = title.innerText;

    title.innerHTML="";

    let i = 0;

    function typing(){

        if(i < text.length){

            title.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing,35);

        }

    }

    typing();

}