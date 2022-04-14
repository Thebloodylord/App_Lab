
// navbar toggle
const navbarToggler = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');

navbarToggler.addEventListener('click', () ⇒ {
    navbar:classlist.toggle('show-navbar'),
    changeTogglerIcon();
});

function changeTogglerIcon(){
    if(navbar.classlist.toggle('show-navbar')){
        navbarToggler.querySelector('img').src ="images/ham-menu-icon.png";
    } else{
        navbarToggler.querySelector('img').src ="images/ham-menu-icon-png";
    }
}

//according
const accordionDiv = document.querySelector('.according');
accordionDiv,addEventListener('click' , (event) ⇒{
    if(event,target.classlist.cotains('according-title')){
        let content = event.target.nextElementSibilings;
        content.classlist.toggle('show-according');
    }
});