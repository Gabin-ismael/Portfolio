var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputfield');

addToDo.onclick = function(){
   //vérifier si l'input n'est pas vide
   if(inputField.value != ""){
    //si l'input n'est pas vide, créer un paragraphe
    var paragrah = document.createElement('p');
   }
   //valorisé ce paragraph avec le contenu de l'input
   paragrah.innerText = inputField.value ;

   //stylisé le paragraphe
   paragrah.classList.add('paragraph_style')
   
   //insérer le paragraphe dans l'élément toDoContainer
   toDoContainer.appendChild(paragrah);

   //vidé l'input quand le paragraphe est ajouté
   inputField.value = "";

   //barré le paragrahe quand in clique dessus
   paragrah.addEventListener('click',function(){
     paragrah.classList.add('paragraph_click')
   })

   //supprimer la tâche quand on double clique sur la tâche

   paragrah.addEventListener('dblclick',function(){
    toDoContainer.removeChild(paragrah);
  })

}