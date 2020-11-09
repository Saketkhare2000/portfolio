const slidetl = gsap.timeline({ default: { ease: 'power4' } });
const revealImg = document.querySelector(".reveal-img");
const revealtext= document.querySelector(".reveal-text");
const img = document.querySelector('.my-image');

slidetl.to(revealImg,{x:'100%', delay:0.6, duration:0.7})
slidetl.to(revealtext, {x:"100%", duration:0.7})