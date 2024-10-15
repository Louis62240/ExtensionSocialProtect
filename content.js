// Liste de mots d'insultes (vous pouvez ajouter ou modifier cette liste)
const insults = ['guerre'];

function checkForInsults() {
  // Récupérer tout le texte de la page
  const bodyText = document.body.innerText.toLowerCase();
  
  // Vérifier si un des mots d'insultes est présent
  for (let i = 0; i < insults.length; i++) {
    if (bodyText.includes(insults[i])) {
      displayWarning();
      break;
    }
  }
}

function displayWarning() {
  // Créer un élément d'avertissement (par exemple une div en haut à droite)
  const warningDiv = document.createElement('div');
  warningDiv.innerText = 'Attention: du contenu inapproprié a été détecté sur cette page !';
  warningDiv.style.position = 'fixed';
  warningDiv.style.top = '10px';
  warningDiv.style.right = '10px';
  warningDiv.style.backgroundColor = 'yellow';
  warningDiv.style.color = 'red';
  warningDiv.style.padding = '10px';
  warningDiv.style.zIndex = '1000';
  warningDiv.style.border = '2px solid red';
  
  // Ajouter l'avertissement à la page
  document.body.appendChild(warningDiv);
  
  // Optionnel : Faire disparaître l'avertissement après 5 secondes
//   setTimeout(() => {
//     warningDiv.remove();
//   }, 5000);
}

// Lancer la vérification lorsque la page est chargée
window.onload = checkForInsults;
