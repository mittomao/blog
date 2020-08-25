const t1 = new TimelineLite({paused : false})
const t2 = new TimelineMax();
t2.staggerTo(".hellu span",0.5, {
    x : "100%",
    opacity:1,
    yoyo : true ,
    ease : Power1.easeInOut
    },0.2)
    .staggerTo(".hallu span",0.5, {
        y : "-100%",
        opacity:1,
        yoyo : true ,
        ease : Power1.easeInOut
    },0.2)
    .to(".header",0.5,{
            y : "0",
            ease : Power1.easeInOut
        })
        .to(".left",1,{
            x : "0",
            ease : Power2.easeInOut
        }).to(".right",1,{
            x : "0",
            ease : Power2.easeInOut,
        })
        .to(".left__img-box img",1,{
            scale : 1.1,
            ease : Power2.easeInOut,
        }).staggerTo(".right__tab a",0.5, {
            y : "0",
            yoyo : true ,
            ease : Power1.easeInOut
        },0.2)
        const back = document.querySelector(".abc");
        back.onclick = function(){
            t2.reversed(!t1.reversed());
}