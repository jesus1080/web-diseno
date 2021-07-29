const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const ham1 = document.querySelector('.hamburguer');

//console.log(imagenes, imagenesLight, contenedorLight);

imagenes.forEach(img =>{
    img.addEventListener('click', ()=>{
        //alert('dio click en la img');
        aparecerImagen(img.getAttribute('src'));
    });
});

contenedorLight.addEventListener('click', (e)=>{
    //console.log(e.target);
    if(e.target != imagenesLight){
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        ham.style.opacity = '1';
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    ham1.style.opacity = '0';
}