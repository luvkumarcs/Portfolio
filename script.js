let t1=gsap.timeline();

t1.from("nav .right a",{
    opacity:0,
    duration:1,
    delay:0.5,
    y:-50,
    stagger:0.3,

})

gsap.from("nav .left h3",{
    opacity:0,
    duration:1,
    delay:0.5,
    y:-50,
    // stagger:0.5,

})

gsap.from("section.home .left img",{
    opacity:0,
    duration:1,
    delay:0.2,
    x:-50,
    
})

let t2=gsap.timeline();

t2.from("section.home .right h3 ",{
    opacity:0,
    duration:1,
    delay:0.2,
    x:80,
    // stagger:0.5,
})

t2.from("section.home .right h1 ",{
    opacity:0,
    duration:1,
    delay:0.2,
    x:80,
    stagger:0.5,
})

t2.from("section.home .right button ",{
    opacity:0,
    duration:1,
    delay:0.2,
    x:80,
    // stagger:0.5,
})

t2.from("section.home .right a ",{
    opacity:0,
    duration:0.3,
    delay:0.2,
    y:-80,
    stagger:0.3,
})

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function () {
    mobileNav.classList.add('open');
});

times.addEventListener('click', function () {
    mobileNav.classList.remove('open');
});
