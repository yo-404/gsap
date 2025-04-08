var initialPath = `M 10 80 Q 600 80 1190 80`

var finalPath = `M 10 80 Q 600 80 1190 80`

var string = document.querySelector("#string")

// string.addEventListener("mouseenter",function(){
//     console.log("entered")
// })

// string.addEventListener("mouseleave",function(){
//     console.log("left")
// })

string.addEventListener("mousemove",function(dets){
    console.log(dets)
    path = `M 10 80 Q ${dets.x} ${dets.y} 1190 80`

    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:0.8,
        ease:"elastic.out(1,0.2)"
    })
})