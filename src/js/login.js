const emails = document.getElementById('email1');
const password = document.getElementById('password1');
const btnAddMember = document.getElementById('addMember');
const btnGoogle = document.getElementById('google');
const btninto = document.getElementById('into');

validateEmail = (userRegistered) => {
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(userRegistered) ? true : false;
};



btninto.addEventListener('click', e => {
    let mail = emails.value;
    let clave = password.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(mail, clave)
    promise.then(function (docRef) {
      console.log('document write with ID:', docRef.id);// falta que me lance el id
      if (mail == '') {
        alert('Ingresa un email valido')
      } else if (clave = '') {
        alert('Ingresa una contraseña valida')
      } else {
        alert('Tus datos estan correctos')
      }
      document.getElementById('user').value = '';
      document.getElementById('email1').value = '';
      document.getElementById('password1').value = '';
  
  
    })
      .catch(function (error) {
        console.error('Error adding document:', error);
      });
  
  });