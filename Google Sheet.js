const scriptURL = 'https://script.google.com/macros/s/AKfycbwZfYHS7zB14zSGi1T-K4frnh6iauna6bsvpnOiJiX6nuqWnQRMuPKtzO4qBgC_5BIwpQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})