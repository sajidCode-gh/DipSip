let tlText=gsap.timeline({defaults:{duration:.5}}),tlHero=gsap.timeline({defaults:{duration:3},scrollTrigger:{trigger:".hero",start:"top top",end:"bottom 20%",scrub:1,pin:!0}});tlHero.fromTo(".hero-img2",{y:"0%"},{y:"-99%"}),tlHero.fromTo(".first-para",{opacity:1},{opacity:0},"-=2"),tlHero.to(".second-para",{y:"-20px",opacity:1},"-=1"),window.addEventListener("load",(function(){tlText.from(".header-wrapper",{delay:1,y:"-100%",ease:"power1.out",duration:1}).from(".hero-title",{opacity:0,y:"20px",ease:"power1.out"}).from(".first-para",{opacity:0,y:"20px"})}));const leftChevron=document.querySelector(".left-chevron"),rightChevron=document.querySelector(".right-chevron"),cards=document.querySelectorAll(".card"),classArr=[];for(let t=0;t<cards.length;t++)classArr.push(cards[t].classList[1]);let tlTest=gsap.timeline({default:{duration:1}}),counterRight=2;rightChevron.addEventListener("click",(()=>{for(let t=0;t<classArr.length;t++)gsap.to(`.${classArr[t]}`,{scale:"0.8",zIndex:1});counterRight>classArr.length-1&&(counterRight=0),2==counterRight&&gsap.to(".cards",{x:"-150px"}),1==counterRight&&gsap.to(".cards",{x:"0px"}),0==counterRight&&gsap.to(".cards",{x:"150px"}),gsap.to(`.${classArr[counterRight]}`,{scale:"1",zIndex:4,ease:"power2.out"}),counterRight++}));let counterLeft=0;leftChevron.addEventListener("click",(()=>{for(let t=0;t<classArr.length;t++)gsap.to(`.${classArr[t]}`,{scale:"0.8",zIndex:1});counterLeft>classArr.length-1&&(counterLeft=0),2==counterLeft&&gsap.to(".cards",{x:"-250px"}),1==counterLeft&&gsap.to(".cards",{x:"0px"}),0==counterLeft&&gsap.to(".cards",{x:"150px"}),gsap.to(`.${classArr[counterLeft]}`,{scale:"1",zIndex:4,ease:"power3.out"}),counterLeft++}));let tlCup=gsap.timeline({defaults:{duration:1}});tlCup.fromTo(".steam",{x:-10,fill:"black",repeat:-1,yoyo:!0},{x:5,fill:"gray",repeat:-1,yoyo:!0});