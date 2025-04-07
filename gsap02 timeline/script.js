// gsap.to("#box1",{
//     x:1000,
//     duration:3,
//     delay:1,
//     rotate:270,
//     backgroundColor:"orange",
//     borderRadius:"55",
//     scale:0.5,
//     repeat:-1,
//     yoyo:true
// })

// gsap.to("#box2",{
//     x:1000,
//     duration:2,
//     delay:4
// })

// gsap.to("#box3",{
//     x:1000,
//     duration:2,
//     delay:6,
//     scale:0.6
// })

gsap.to("#box4",{
    x:1000,
    duration:2,
    delay:8,
    borderRadius:"50%"
})

// gsap.from("h1",{
//     color:"orange",
//     delay:1,
//     duration:1,
//     opacity:0,
//     y:40,
//     stagger:0.4
// })

// gsap.from("h2",{
//     color:"orange",
//     delay:1,
//     duration:1,
//     opacity:0,
//     y:40,
//     stagger:-1
// })

var tl =  gsap.timeline()

tl.to("#box1",{
    x:1200,
    duration:1,
    delay:1,
    rotate:360
})

tl.to("#box2",{
    x:1000,
    backgroundColor:"red",
    scale:0.8
})

tl.to("#box3",{
    x:1200,
    backgroundColor:"blue",
    borderRadius:"50%"
})


var t2 = gsap.timeline()

t2.from("h2",{
    y:-30,
    opacity:0,
    delay:1,
    duration:1
})

t2.from("h3",{
    y:-30,
    opacity:0,
    delay:0.1,
    duration:1,
    stagger:0.5
})

t2.from("#tag",{
    y:-40,
    opacity:0,
    delay:.5,
    scale:0.3
})

