/*=========================================================
                    LOADER
=========================================================*/


window.addEventListener("load",()=>{


    const loader = document.querySelector(".loader");


    if(loader){

        loader.classList.add("hide");

    }


});





/*=========================================================
                    PARTICULAS
=========================================================*/


const particles = document.querySelector("#particles");


if(particles){


for(let i=0;i<40;i++){


    let particle=document.createElement("span");


    particle.classList.add("particle");


    particle.style.left=Math.random()*100+"%";


    particle.style.animationDuration=
    (5+Math.random()*10)+"s";


    particle.style.animationDelay=
    Math.random()*5+"s";


    particles.appendChild(particle);


}


}




/*=========================================================
                    CURSOR
=========================================================*/


const cursor=document.querySelector(".cursor");


if(cursor){


document.addEventListener("mousemove",(e)=>{


    cursor.style.left=e.clientX+"px";


    cursor.style.top=e.clientY+"px";


});



document.querySelectorAll("a,button").forEach(item=>{


    item.addEventListener("mouseenter",()=>{


        cursor.classList.add("active");


    });



    item.addEventListener("mouseleave",()=>{


        cursor.classList.remove("active");


    });


});


}






/*=========================================================
                    PARALLAX
=========================================================*/


const heroImage=document.querySelector(".hero-image");



window.addEventListener("scroll",()=>{


if(heroImage){


let value = window.scrollY * .15;


heroImage.style.transform=
`translateY(${value}px)`;


}



});






/*=========================================================
                    VOLTAR AO TOPO
=========================================================*/


const backTop=document.querySelector(".back-top");


window.addEventListener("scroll",()=>{


if(window.scrollY > 500){


backTop.classList.add("show");


}else{


backTop.classList.remove("show");


}



});



if(backTop){


backTop.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}
