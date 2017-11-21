
windows.addEeventListener('load', function() {
  //DECLARO VARIABLES
  var title = document.getElementsByTagName('h1')[0];
  var image = document.getElementsByTagName('img')[0];

    //MANEJADOR DE EVENTOS PARA EL TITLE
  title.addEeventListener('mouseover', function(){
    title.classList.add('changeColor');
    title.textContent = 'Soy futuro del Perú';

  })
  //MANEJADOR DE EVENTOS PARA LAS IMAGENES
  image.addEeventListener('mouseover', function(event){
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.target.src = 'assets/puppy2.jpg');
  })
  image.addEeventListener('mouseout', function(event){
    console.log(event.target);
    //console.log(event.currentTarget);
    event.target.src = 'assets/puppy1.jpg'

})
