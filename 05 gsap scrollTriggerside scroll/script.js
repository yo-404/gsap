
gsap.to("#page2 h1",{
    transform:"translateX(-600%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -190%",
        scrub:4,
        pin:true
    }
})