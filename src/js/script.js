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

});


//clik di close
window.addEventListener('click', function(a){
if (a.target!=hamburger && a.target !=navMenu){
    hamburger.classList.remove('active');
    navMenu.classList.add('hidden');
}
});


// dark mode 
const darkToggle=document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click',function(){
if(darkToggle.checked){
    html.classList.add('dark');
    localStorage.theme = 'dark';
}else{
    html.classList.remove('dark');
    localStorage.theme = 'light';
}
});


//perpindahan tombol
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  };