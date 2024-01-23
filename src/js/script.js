//

window.onscroll = function(){
    const header = document.querySelector('header');
    const navbarfixed = header.offsetTop;
    const toTop = document.querySelector('#to-top');


    if(window.pageYOffset > navbarfixed){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
    }
}


//button hamburger//
const hamburger =document.querySelector('#hamburger');
const navMenu =document.querySelector('#nav-menu');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('active');
  
navMenu.classList.toggle('hidden');

})