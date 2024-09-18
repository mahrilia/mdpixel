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

/*
function scrollLinks(){
    const links = document.querySelectorAll('.link-menu');
    links.forEach(item => {
        // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
        if(this.scrollY >= 2000) item.classList.add('link-menu-black'); else item.classList.remove('link-menu-black')
    })
    
}

window.addEventListener('scroll', scrollLinks);
*/


/*==================== ACCORDION ====================*/ 
document.querySelectorAll('.accordion-button').forEach(button => {
    
    button.addEventListener('click', () => {
        //button.classList.remove('accordion-button-active');

        const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion-button-active');

        if(button.classList.contains('accordion-button-active')){
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }
        else{
          accordionContent.style.maxHeight = 0;
        }
    });
});