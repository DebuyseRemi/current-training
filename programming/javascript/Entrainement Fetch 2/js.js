let form = document.querySelector('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault();


let prenom = document.getElementById('Prenom');
let nom = document.getElementById('Nom');

  fetch('https://685a92c29f6ef9611156f24a.mockapi.io/Test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prenom: prenom.value,
      nom: nom.value
    })
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    alert(`Utilisateur créé avec succès : ${JSON.stringify(data)}`);
  })
});

