console.log('nav.js loaded');

async function cambiarNav(){
    var nav = document.getElementById("nav");
    if(nav.classList.contains("navbar-light")){
        await sleep(100);
        nav.classList.remove("navbar-light");
        nav.classList.add("navbar-dark", "bg-dark");
        document.body.style.backgroundColor = "#f8f9fa";
    }else{
        nav.classList.add("navbar-light");
        nav.classList.remove("navbar-dark", "bg-dark");
        document.body.style.backgroundColor = "transparent";
    }
}
function sleep(ms) {return new Promise((res)=> setTimeout(res, ms));}

window.addEventListener('load', ()=>{cambiarNav()});

$('#modoOscuro').click(cambiarNav);
$(document).ready(function(){
    $('.nav-link').on('click', function(){
        $('.nav-item').removeClass('active');
        $(this).closest('.nav-item').addClass('active');
    });
});
