const scriptURL = 'https://script.google.com/macros/s/AKfycbwCeMslNZ4kIo8KRaDPILoyoxc7WHS7m6mWrQWNBADQ67VCOfd0/exec'
const sendEmail = 'https://script.google.com/macros/s/AKfycbwwc_EfSX2Ncb0hOfPCBJUsQlhc9OscuYc1BgP70bEnUAscBk131NfnGw/exec'
const form = document.forms['google-sheet']
const submit = document.getElementById("submit");
submit.addEventListener('mousedown', function() {
  submit.style.backgroundColor = "darkgrey";
})
submit.addEventListener('touchstart', function() {
  submit.style.backgroundColor = "darkgrey";
})
submit.addEventListener('mouseup', function() {
  submit.style.backgroundColor = "black";
})
submit.addEventListener('touchend', function() {
  submit.style.backgroundColor = "black";
})
submit.addEventListener('click', e => {
  e.preventDefault()
  if (document.getElementById('bericht').value.length !== 0) {
    displayLoading();
  fetch(scriptURL, { method: 'post', body: new FormData(form) })
    .then(response => displaySent())
    .catch(error => console.error('Error!', error.message))
  }
})
function displayLoading() {
  

    switch (submit.getAttribute("value")) {
      case "Send":
        submit.setAttribute("value", "Sending..");
        submit.style.backgroundColor = "grey";
        break;
      case "Versturen":
        submit.setAttribute("value", "Versturing..");
        submit.style.backgroundColor = "green";
        break;
      case "Envoyer":
        submit.setAttribute("value", "Chargement..");
        submit.style.backgroundColor = "green";
        break;
    }
}
function displaySent() {
  

  switch (submit.getAttribute("value")) {
    case "Sending..":
      submit.setAttribute("value", "Well received!");
      submit.style.backgroundColor = "green";
      break;
    case "Versturing..":
      submit.setAttribute("value", "Goed ontvangen!");
      submit.style.backgroundColor = "green";
      break;
    case "Chargement..":
      submit.setAttribute("value", "Bien reçu");
      submit.style.backgroundColor = "green";
      break;
  }
  setTimeout(functie = () => {
    switch (submit.getAttribute("value")) {
      case "Well received!":
        submit.setAttribute("value", "Send");
        submit.style.backgroundColor = "black";
        break;
      case "Goed ontvangen!":
        submit.setAttribute("value", "Versturen");
        submit.style.backgroundColor = "black";
        break;
      case "Bien reçu":
        submit.setAttribute("value", "Envoyer");
        submit.style.backgroundColor = "black";
        break;
    }
  }, 10000);
  $('.message')[0].reset();
}
