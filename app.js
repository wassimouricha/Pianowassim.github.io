// reglage des constantes
// choix des boutons div


// La méthode querySelectorAll()  de Element 
// renvoie une NodeList statique représentant une liste des éléments du document qui correspondent au groupe de sélecteurs spécifiés.

// La déclaration const permet de créer une constante nommée accessible uniquement en lecture. 


const btns = document.querySelectorAll(".btn");

// La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.

btns.forEach(btn => {
    btn.addEventListener("click", () => playSound(btn))


});
//  addEventListener() attache une fonction à appeler chaque fois que l'évènement spécifié est envoyé à la cible.

// playsound 

// La déclaration function (ou l'instruction function) permet de définir une fonction et les paramètres que celle-ci utilise ici playsound.
function playSound(btn) {
    const sound = document.getElementById(btn.dataset.key);
    sound.currentTime = 0;
    sound.play()
};

// getElementById() de Document renvoie un objet  Element représentant l'élément dont la propriété  id 
// correspond à la chaîne de caractères spécifiée.