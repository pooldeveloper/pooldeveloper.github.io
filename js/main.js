const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav-menu');
const links = document.querySelectorAll('.link');
const header = document.querySelector('.header');
const active = document.querySelectorAll('active')
btn.addEventListener('click', () => {
    menu.classList.toggle('show');
});
links.forEach((link) =>{
    link.addEventListener('click',(e) => {
        menu.classList.toggle('show');
        links.forEach((link) => link.classList.remove('active'))
        e.target.classList.add('active')
    }); 
})
//Ejecutar cuando la pagina de haya cargado
document.addEventListener('DOMContentLoaded',() =>{
    window.addEventListener('scroll',() =>{
        // pageYOffsetes un alias para scrollY; como tal, devuelve el número de píxeles que el documento se desplaza actualmente a lo largo del eje vertical (es decir, hacia arriba o hacia abajo) con un valor de 0.0
        if(window.pageYOffset > 60){
            header.classList.add('scrollTop');
        }else{
            header.classList.remove('scrollTop');
        }
    });
    
});





