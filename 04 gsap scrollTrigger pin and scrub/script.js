gsap.from("#page1 #box",{
    scale:0,
    duration:1.5,
    delay:0.8,
    rotate:180
})


gsap.from("#page2 #box",{
    scale:0.0,
    duration:1.5,
    delay:0.8,
    rotate:180,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"bottom 10%",
        scrub:5,  
        // 1 to 5 for smoothness or boolean value as true or false
        pin:true
    }
})


gsap.from("#page3 #box",{
    scale:0,
    duration:1.5,
    delay:0.8,
    rotate:180
})

gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        marker:true,
        start:"top 50%"
    }
})


gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        marker:true,
        start:"top 50%"
    }
})


gsap.to("#page2 h1",{
    transfrom:"translateX(-150%)"
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        marker:true,
        start:"top 0%",
    }
})