const ham = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

// console.log(ham);
// console.log(menu);

ham.addEventListener('click', ()=>{
    menu.classList.toggle('spread');
})

window.addEventListener('click', e=>{
    // console.log(e.target);   devuelve el elemento al cual se le hace click
    if(menu.classList.contains('spread')&& e.target != menu && e.target != ham){
        menu.classList.toggle('spread');
    }
})