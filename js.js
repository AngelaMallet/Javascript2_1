// j'ouvre le document ou j'appelle l'id de l'image1. quand je passe sur l'image avec
// la souris je sollicite une action
document.getElementById('image1').addEventListener('mouseover', function change(){
  // la fonction est : je modifie en direct l'url de l'image
  document.getElementById('image1').src = 'image1_2.jpg';
}
)
