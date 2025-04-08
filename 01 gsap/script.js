gsap.to("#box1",{
    x:1000,
    duration:3,
    delay:1,
    rotate:270,
    backgroundColor:"orange",
    borderRadius:"55",
    scale:0.5,
    repeat:-1,
    yoyo:true
})

gsap.to("#box2",{
    x:1000,
    duration:2,
    delay:4
})

gsap.to("#box3",{
    x:1000,
    duration:2,
    delay:6,
    scale:0.6
})

gsap.to("#box4",{
    x:1000,
    duration:2,
    delay:8,
    borderRadius:"50%"
})

gsap.from("h1",{
    color:"orange",
    delay:1,
    duration:1,
    opacity:0,
    y:40,
    stagger:0.4
})

gsap.from("h2",{
    color:"orange",
    delay:1,
    duration:1,
    opacity:0,
    y:40,
    stagger:-1
})