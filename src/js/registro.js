//    //Añadiendo miembros

// let users = document.getElementById('user');
const emails = document.getElementById('email1');
const password = document.getElementById('password1');
const btnAddMember = document.getElementById('addMember');
const btnGoogle = document.getElementById('google');
const btninto = document.getElementById('into');

validateEmail = (userRegistered) => {
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(userRegistered) ? true : false;
};




// btnGoogle.addEventListener('click', e => {
//   var provider = new firebase.auth.GoogleAuthProvider();
//   autentificate(provider);
// });

const autentificate = (provider) => {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}




btnAddMember.addEventListener('click', e => {
  console.log("hol");

  let name = users.value;
  console.log(name);

  let mail = emails.value;
  console.log(mail);

  let clave = password.value;
  console.log(clave);
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(mail, clave);

  promise.then(function (docRef) {
    console.log('document write with ID:', docRef.id);// falta que me lance el id
    if (name == '') {
      alert('Ingresa un usuario valido');
    } else if (mail == '') {
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
