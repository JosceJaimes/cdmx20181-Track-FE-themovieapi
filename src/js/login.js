
//Aqui va a ingresar el usuario cuando ya tiene cuenta
// const emails = document.getElementById('email');
// const password = document.getElementById('password');
// const btninto = document.getElementById('into');

// const validateEmail = (userRegistered) => {
//   var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//   return regex.test(userRegistered) ? true : false;
// };




// const autentific = () => {
//   let email = emails.value;
//   let pass = password.value; 
//   const auth = firebase.auth()
//   auth.signInWithEmailAndPassword(email, pass)
//     .then(result =>{
//       location.href='../views/pagprincipal.html'
//     })
//     .catch(function(error){
//       // let errorCode = error.code;
//       // alert('los datos ingresados no son correctos')
//       alert(error)
//       console.log(error);

//     });
//   console.log(email, pass);

// }

// const validate = () => {
//   //Aqui se van a validar que los campos no vayan vacios.
// }

// btninto.addEventListener('click', e =>{
//   autentific();
// })

// btninto.addEventListener('click', e => {
//   console.log("hola");

//     let mail = emails.value;
//     let clave = password.value;
//     const auth = firebase.auth();
//     const promise = auth.signInWithEmailAndPassword(mail, clave)
//     promise.then(function (docRef) {
//       console.log('document write with ID:', docRef.id);// falta que me lance el id
//       if (mail == '') {
//         alert('Ingresa un email valido')
//       } else if (clave = '') {
//         alert('Ingresa una contraseña valida')
//       } else {
//         alert('Tus datos estan correctos')
//       }
//       document.getElementById('user').value = '';
//       document.getElementById('email1').value = '';
//       document.getElementById('password1').value = '';


//     })
//       .catch(function (error) {
//         console.error('Error adding document:', error);
//       });

//   });



const email = document.getElementById('email');
const password = document.getElementById('password');
const redirect = document.getElementById('into');



const autentific = () => {
  let mail = email.value;
  console.log(mail);
  
  let pass = password.value;
  console.log(pass);
  
  const auth = firebase.auth();
  auth.signInWithEmailAndPassword(mail, pass)
    .then(result => {
      location.href = "../views/panel.html"
    })
    .catch(function (error) {
      let errorCode = error.code;
      alert("Ingrese un usuario valido ")
      console.log(errorCode);
    })

}
redirect.addEventListener('click', e => {
  autentific();

})



