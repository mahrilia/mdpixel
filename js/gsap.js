
/*--===========================================- */
/*--=========== GSAP SCROLLTRIGGER ============- */
/*--===========================================- */
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    /*--===========================================- */
    /*--=========== TIMELINE LOADING E HERO ============- */
    /*--===========================================- */
    var tl_screen = gsap.timeline();

    tl_screen
    .to('.screen-loading', {
        duration: 2,
        opacity: 0, 
        delay: 4,
        ease: "power1.out",
    })
    .from(".text-comforma-hero", {
        duration: 2,  
        opacity: 0,
        ease: "power2.out",
    }, '-=1')
    .from(".text-architecture-hero", {
        duration: 3,  
        opacity: 0,
        ease: "power2.out",
    }, '-=1')
    .from(".wide-hero", {
        opacity: 0,
        duration: 3,
        x: -200,
        ease: "power2.out",
    }, '-=3.2')



    /*--=========== ANIMATION MENU ============- */
    const tl_menu = gsap.timeline({ paused: true });
    tl_menu
    .to(".menu",{
        opacity: 1,
        duration: 0.1,
        pointerEvents: "all",
        ease: "power1.out",
    })
    .from(".bg-menu-white",{
        scaleY: 0,
        opacity: 0,
        backdropFilter: "blur(12px)",
        duration: 0.6,
        ease: "expoScale(0.5,7,power1.inOut)",
    }, "-=0.0")
    .from(".bg-menu-black",{
        scaleY: 0,
        opacity: 0,
        duration: 0.6,
        backdropFilter: "blur(12px)",
        ease: "expoScale(0.5,7,power1.inOut)",
    }, "-=0.3")
    .from(".menu-white div",{
        x: -200,
        opacity: 0,
        stagger:{each: 0.2},
        duration: 2,
        ease: "power4.out",
    }, "-=0.5")
    .from(".menu-black div",{
        x: -120,
        opacity: 0,
        stagger:{each: 0.1},
        duration: 1.8,
        ease: "power4.out",
    }, "-=2.2");


    const bx = document.getElementById("bx")
    const menu = document.getElementById("menu");
    const menu_links = Array.from(document.querySelectorAll('.menu-li'));

    // Validate that variables exist
    if(bx && menu){
        bx.addEventListener('click', () => {

            if(menu.classList.contains('active-menu')){
                tl_menu.play();
                //console.log('play');
            }
            else{
                tl_menu.reverse(1.5);
                //console.log('reverse');
            }
            
        });

        menu_links.forEach(item => {
            // Quando clicar em algum link, o menu precisa recolher sempre, desativar.
            item.addEventListener('click', () => {
                menu.classList.remove('active-menu');
                bx.classList.remove('active-bx');
                tl_menu.reverse(1.5);
            });
        });
    }



    /*--===========================================- */
    /*--=========== TL-TEXT ============- */
    /*--===========================================- */
    var tl_text = gsap.timeline();
    tl_text
    .from(".text-process-1",{
        duration: 1.5,
        opacity: 0,
        x: -50,
        ease: "power4.out",
        scrollTrigger:{
            trigger: '.text-process-1',
            start: 'center 50%',
            end: 'bottom -10%',
            //markers: true,
            pin: true,
            scrub: 1,
        }
    })
    .from(".text-process-2",{
        duration: 1.5,
        opacity: 0,
        rotate: -10,
        ease: "power4.out",
        scrollTrigger:{
            trigger: '.text-process-2',
            start: 'center 50%',
            end: 'bottom -10%',
            //markers: true,
            pin: true,
            scrub: 1,
        }
    })
    .from(".text-process-3",{
        duration: 1.5,
        opacity: 0,
        x: -50,
        rotate: 10,
        ease: "power4.out",
        scrollTrigger:{
            trigger: '.text-process-3',
            start: 'center 50%',
            end: 'bottom -10%',
            //markers: true,
            pin: true,
            scrub: 1,
        }
    });



    /*--===========================================- */
    /*--=========== TL-CTA ============- */
    /*--===========================================- */
    var tl_cta = gsap.timeline();
    tl_cta
    .from(".text-process-4",{
        duration: 1.5,
        opacity: 0,
        x: -50,
        ease: "power4.out",
        scrollTrigger:{
            trigger: '.text-process-4',
            start: 'center 50%',
            end: 'bottom -10%',
            //markers: true,
            pin: true,
            scrub: 1,
        }
    })
    .from(".text-process-5",{
        duration: 1.5,
        opacity: 0,
        rotate: -10,
        ease: "power4.out",
        scrollTrigger:{
            trigger: '.text-process-5',
            start: 'center 50%',
            end: 'bottom -10%',
            //markers: true,
            pin: true,
            scrub: 1,
        }
    })
    .from(".text-process-6",{
        duration: 1.5,
        opacity: 0,
        x: -50,
        scale: 0.5,
        ease: "power4.out",
        scrollTrigger:{
            trigger: '.text-process-6',
            start: 'center 50%',
            end: 'bottom -10%',
            //markers: true,
            pin: true,
            scrub: 1,
        }
    });


    /*--===========================================- */
    /*--=========== REDEFINED SPACES ============- */
    /*--===========================================- */
    gsap.from(".project-a",{
        y: -100,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
        scrollTrigger:{
            trigger: '.project-a',
            start: 'top 80%',
            end: 'top 40%',
            scrub: 2,
        }
    });

    gsap.from(".project-b",{
        y: 100,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
        scrollTrigger:{
            trigger: '.project-b',
            start: 'top 80%',
            end: 'top 40%',
            scrub: 2,
        }
    });

    gsap.from(".project-c",{
        x: -100,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
        scrollTrigger:{
            trigger: '.project-c',
            start: 'top 80%',
            end: 'top 40%',
            scrub: 2,
        }
    });

    gsap.from(".project-d",{
        x: -100,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
        scrollTrigger:{
            trigger: '.project-d',
            start: 'top 80%',
            end: 'top 40%',
            scrub: 2,
        }
    });

 /*
    gsap.from(".carol-natalia",{
        y: 100,
        opacity: 0,
        rotate: 10,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger:{
            trigger: '.carol-natalia',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });
*/

    /*--===========================================- */
    /*--=========== ANIMATION SECTIONS ============- */
    /*--===========================================- */
    gsap.from("#section-presentation div",{
        x: -50,
        opacity: 0,
        duration: 2.5,
        stagger:{each: 0.25},
        ease: "power4.out",
        scrollTrigger:{
            trigger: '#section-presentation',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });


    gsap.from(".div-grid-photos figure",{
        //width: "0%",
        scaleX: 0,
        transformOrigin: "top left",
        duration: 1.5,
        stagger: {each: 0.2},
        ease: "power1.out",
        scrollTrigger:{
            trigger: '.div-grid-photos',
            start: 'top 60%',
            end: 'bottom 00%',
        }
    });

/*
    gsap.from(".section-card-projects figure",{
        //width: "0%",
        scaleY: 0,
        duration: 1.5,
        opacity: 0,
        stagger: {each: 0.4},
        ease: "power1.out",
        scrollTrigger:{
            trigger: '.section-card-projects',
            start: 'top 60%',
            end: 'bottom 00%',
        }
    });
*/
    gsap.from(".figure-card-project-1",{
        //width: "0%",
        //scaleY: 0,
        duration: 2,
        opacity: 0,
        x: -200,
        ease: "power3.out",
        scrollTrigger:{
            trigger: '.figure-card-project-1',
            start: 'top 60%',
            end: 'bottom 00%',
        }
    });

    gsap.from(".figure-card-project-2",{
        //width: "0%",
        //scaleY: 0,
        duration: 2,
        x: -200,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger:{
            trigger: '.figure-card-project-2',
            start: 'top 60%',
            end: 'bottom 00%',
        }
    });


    gsap.from(".figure-card-project-3",{
        //width: "0%",
        //scaleY: 0,
        duration: 2,
        opacity: 0,
        x: -200,
        ease: "power3.out",
        scrollTrigger:{
            trigger: '.figure-card-project-3',
            start: 'top 60%',
            end: 'bottom 00%',
        }
    });

    gsap.from(".figure-card-project-4",{
        //width: "0%",
        //scaleY: 0,
        duration: 2,
        opacity: 0,
        x: -200,
        ease: "power3.out",
        scrollTrigger:{
            trigger: '.figure-card-project-4',
            start: 'top 60%',
            end: 'bottom 00%',
        }
    });


    gsap.from("#section-services div",{
        x: -50,
        opacity: 0,
        duration: 2.5,
        stagger:{each: 0.25},
        ease: "power4.out",
        scrollTrigger:{
            trigger: '#section-services',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });

    gsap.from(".line-presentation",{
        width: '0',
        duration: 4,
        delay: 1,
        ease: "power1.out",
        scrollTrigger:{
            trigger: '.line-presentation',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });

    gsap.from("#section-cta-presentation div",{
        x: -50,
        opacity: 0,
        duration: 2.5,
        stagger:{each: 0.25},
        ease: "power4.out",
        scrollTrigger:{
            trigger: '#section-cta-presentation',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });
    
    gsap.from("#section-projects div",{
        x: -50,
        opacity: 0,
        duration: 2.5,
        stagger:{each: 0.25},
        ease: "power4.out",
        scrollTrigger:{
            trigger: '#section-projects',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });

    gsap.from("#section-process div",{
        x: -50,
        opacity: 0,
        duration: 2,
        stagger:{each: 0.25},
        ease: "power4.out",
        scrollTrigger:{
            trigger: '#section-process',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });


    gsap.from("#section-numbers div",{
        x: -50,
        opacity: 0,
        duration: 2.5,
        stagger:{each: 0.25},
        ease: "power4.out",
        scrollTrigger:{
            trigger: '#section-numbers',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });

    gsap.from("#section-cta-instagram div",{
        x: -50,
        opacity: 0,
        duration: 2.5,
        stagger:{each: 0.25},
        ease: "power4.out",
        scrollTrigger:{
            trigger: '#section-cta-instagram',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });

    /*
    gsap.from("#section-about div",{
        x: -50,
        opacity: 0,
        duration: 2.5,
        stagger:{each: 0.25},
        ease: "power4.out",
        scrollTrigger:{
            trigger: '#section-about',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });
    */

    gsap.from("#section-cta div",{
        x: -50,
        opacity: 0,
        duration: 2.5,
        stagger:{each: 0.25},
        ease: "power4.out",
        scrollTrigger:{
            trigger: '#section-cta',
            start: 'top 80%',
            end: 'bottom 00%',
        }
    });


    /*--===========================================- */
    /*--=========== ANIMATION SECTIONS PROJECT.HTML ============- */
    /*--===========================================- */
    gsap.from("#section-about-project div", {
        x: -50,
        opacity: 0,
        duration: 2.5,
        stagger:{each: 0.1},
        ease: "power4.out",
        scrollTrigger:{
            trigger: '#section-about-project',
            start: 'top 60%',
            end: 'bottom 00%',
        }
    });

    gsap.from("#section-title-project div",{
        x: -50,
        opacity: 0,
        duration: 2.5,
        stagger:{each: 0.3},
        ease: "power4.out",
        scrollTrigger:{
            trigger: '#section-title-project',
            start: 'top 60%',
            end: 'bottom 00%',
        }
    });

    gsap.from("#section-thumb-project div",{
        x: -100,
        opacity: 0,
        transformOrigin: "top left",
        duration: 2.5,
        stagger:{each: 0.1},
        ease: "power4.out",
        scrollTrigger:{
            trigger: '#section-thumb-project',
            start: 'top 60%',
            end: 'bottom 00%',
        }
    });

    gsap.from("#section-imgs-project figure",{
        x: -50,
        opacity: 0,
        duration: 2.5,
        stagger:{each: 0.2},
        ease: "power4.out",
        scrollTrigger:{
            trigger: '#section-imgs-project',
            start: 'top 60%',
            end: 'bottom 00%',
        }
    });

    gsap.from("#section-next-project div",{
        x: -50,
        opacity: 0,
        duration: 2.5,
        stagger:{each: 0.2},
        ease: "power4.out",
        scrollTrigger:{
            trigger: '#section-next-project',
            start: 'top 60%',
            end: 'bottom 00%',
        }
    });


    


});

    ////////////////////////////////////////
    ////////////////////////////////////////
    ////////////////////////////////////////
    ////////////////////////////////////////


//ScrollTrigger.addEventListener("scrollStart", () => ScrollTrigger.refresh() );


