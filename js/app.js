/*==================================================================*/
/*==================== SHOW MENU ====================*/
/*==================================================================*/
const showMenu = (bxId, menuId) => {
    const bx = document.getElementById(bxId);
    const menu = document.getElementById(menuId);

    // Validate that variables exist
    if(bx && menu){
        bx.addEventListener('click', () => {
            // We add the show-menu class to the div tag with the nav__menu class

            menu.classList.toggle('active-menu');
            bx.classList.toggle('active-bx');
        });
    }
}

showMenu('bx','menu');


/*==================================================================*/    
/*==================== CHANGE BACKGROUND HEADER ====================*/
/*==================================================================*/
function scrollHeader(){
    const nav = document.querySelector('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}
  
window.addEventListener('scroll', scrollHeader);


/*==================================================================*/
/*==================== CUSTOM CURSOR ====================*/
/*==================================================================*/

/*
let cursor = document.querySelector('.cursor');
let heads = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
let svgs = document.querySelectorAll('svg');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

heads.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
    });
});

svgs.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
    });
});
*/



var cursor = $(".cursor"), follower = $(".cursor-follower");

            var posX = 0,
                posY = 0,
                mouseX = 0,
                mouseY = 0;

            TweenMax.to({}, 0.016, {
                repeat: -1,
                onRepeat: function() {
                    posX += (mouseX - posX) / 12;
                    posY += (mouseY - posY) / 12;

                    TweenMax.set(follower, {
                        css: {
                            left: posX - 32,
                            top: posY - 32
                        }
                    });

                    TweenMax.set(cursor, {
                        css: {
                            left: mouseX - 8,
                            top: mouseY - 8
                        }
                    });
                }
            });
            
            $(document).on("mousemove", function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });

            
            $("figure").on("mouseenter", function() {
                follower.addClass("active");
                cursor.addClass("active");
                //follower.addClass("active");
            });

            $(".btn").on("mouseenter", function() {
                follower.addClass("active");
                cursor.addClass("active");
                //follower.addClass("active");
            });

            $("figure").on("mouseleave", function() {
                follower.removeClass("active");
                cursor.removeClass("active");
                //follower.addClass("active");
            });

            $(".btn").on("mouseleave", function() {
                follower.removeClass("active");
                cursor.removeClass("active");
                //follower.addClass("active");
            });

            $("a").on("mouseenter", function() {
                follower.addClass("active");
                cursor.addClass("active");
                //follower.addClass("active");
            });

            $("a").on("mouseleave", function() {
                follower.removeClass("active");
                cursor.removeClass("active");
                //follower.addClass("active");
            });


/*==================================================================*/
/*==================== ANIMATION GRID PHOTOS ====================*/
/*==================================================================*/
const gridphoto1 = document.querySelector('.grid-photo-1');
const gridphoto2 = document.querySelector('.grid-photo-2');
const gridphoto3 = document.querySelector('.grid-photo-3');
const gridphoto4 = document.querySelector('.grid-photo-4');

// PHOTO GRID 1
gridphoto1.addEventListener('mouseover', () => {
    gridphoto1.classList.add('expand-photo');
    gridphoto2.classList.add('regress-photo');
    gridphoto3.classList.add('regress-photo');
    gridphoto4.classList.add('regress-photo');
})

gridphoto1.addEventListener('mouseout', () => {
    gridphoto1.classList.remove('expand-photo');
    gridphoto2.classList.remove('regress-photo');
    gridphoto3.classList.remove('regress-photo');
    gridphoto4.classList.remove('regress-photo');
})

// PHOTO GRID 2
gridphoto2.addEventListener('mouseover', () => {
    gridphoto1.classList.add('regress-photo');
    gridphoto2.classList.add('expand-photo');
    gridphoto3.classList.add('regress-photo');
    gridphoto4.classList.add('regress-photo');
})

gridphoto2.addEventListener('mouseout', () => {
    gridphoto1.classList.remove('regress-photo');
    gridphoto2.classList.remove('expand-photo');
    gridphoto3.classList.remove('regress-photo');
    gridphoto4.classList.remove('regress-photo');
})

// PHOTO GRID 3
gridphoto3.addEventListener('mouseover', () => {
    gridphoto1.classList.add('regress-photo');
    gridphoto2.classList.add('regress-photo');
    gridphoto3.classList.add('expand-photo');
    gridphoto4.classList.add('regress-photo');
})

gridphoto3.addEventListener('mouseout', () => {
    gridphoto1.classList.remove('regress-photo');
    gridphoto2.classList.remove('regress-photo');
    gridphoto3.classList.remove('expand-photo');
    gridphoto4.classList.remove('regress-photo');
})

// PHOTO GRID 4
gridphoto4.addEventListener('mouseover', () => {
    gridphoto1.classList.add('regress-photo');
    gridphoto2.classList.add('regress-photo');
    gridphoto3.classList.add('regress-photo');
    gridphoto4.classList.add('expand-photo');
})

gridphoto4.addEventListener('mouseout', () => {
    gridphoto1.classList.remove('regress-photo');
    gridphoto2.classList.remove('regress-photo');
    gridphoto3.classList.remove('regress-photo');
    gridphoto4.classList.remove('expand-photo');
});

/*==================================================================*/
/*==================== SMOOTH SCROLL ====================*/
/*==================================================================*/
/*
const body = document.body,
            scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
            height = scrollWrap.getBoundingClientRect().height - 1,
            speed = 0.04;

        var offset = 0;

        body.style.height = Math.floor(height) + "px";

        function smoothScroll() {
            offset += (window.pageYOffset - offset) * speed;

            var scroll = "translateY(-" + offset + "px) translateZ(0)";
            scrollWrap.style.transform = scroll;

            callScroll = requestAnimationFrame(smoothScroll);
        }

        smoothScroll();

*/

