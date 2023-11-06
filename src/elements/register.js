import { NewUser } from '../auth.js';

export function register(navigateTo) {
  const container1 = document.createElement('div');
  container1.setAttribute('class', 'container flex');

  const container2 = document.createElement('div');
  container2.setAttribute('class', 'mujeres-page flex');

  const container3 = document.createElement('div');
  container3.setAttribute('class', 'text');

  const titleP1 = document.createElement('h1');
  titleP1.setAttribute('class', 'title1');
  titleP1.textContent = 'MUJER';

  const titleP2 = document.createElement('h2');
  titleP2.setAttribute('class', 'title2');
  titleP2.textContent = '-Space-';

  const slogan = document.createElement('p');
  slogan.setAttribute('class', 'slogan');
  slogan.textContent = 'Conectadas las Mujeres de todo el mundo';

  const imgMujeres = document.createElement('img');
  imgMujeres.setAttribute('alt', 'mujer');
  imgMujeres.setAttribute('class', 'image1');
  imgMujeres.src = 'img/Mujer -Space_-2.png';

  const links = document.createElement('form');
  links.setAttribute('action', '#');
  links.setAttribute('class', 'allRegister');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('class', 'email2');
  inputEmail.setAttribute('id', 'emailR');
  inputEmail.placeholder = 'Registrate con tu Email';
  inputEmail.required = 'Registrate con tu Email';

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('class', 'password2');
  inputPassword.setAttribute('id', 'passwordR');

  inputPassword.placeholder = 'Crea tu Password';
  inputPassword.required = 'Crea tu Password';

  const linkButton = document.createElement('div');
  linkButton.setAttribute('class', 'link');

  /* botòn para devolverse**** */
  const returnButton = document.createElement('button');
  returnButton.setAttribute('type', 'button');
  returnButton.setAttribute('class', 'returnbtn');
  returnButton.textContent = 'VOLVER';
  returnButton.addEventListener('click', () => {
    navigateTo('/login');
  });

  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('type', 'submit');
  buttonLogin.setAttribute('class', 'login');
  // buttonLogin.setAttribute ('onclick', 'createUser');
  buttonLogin.setAttribute('id', 'buttonLogin');
  buttonLogin.textContent = 'Registrarse';

  buttonLogin.addEventListener('click', (event) => {
    event.preventDefault();
    NewUser(inputEmail.value, inputPassword.value)
      .then((userCredential) => {
        // Signed in
        console.log('ver: ', userCredential);
        navigateTo('/login')
        const user = userCredential.user;
        // alert('Registro exitoso');
        return user; // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error);
        if (errorCode === 'auth/invalid-email') {
          // alert('Correo invalido');
        } else if (errorCode === 'auth/email-already-in-use') {
          // alert('Correo registrado');
        } else if (errorCode === 'auth/weak-password') {
          // alert('La contraseña debe ser minímo de 6 caracteres');
        } else {
          // alert(`Ocurrió un error:  ${errorMessage}`);
        }
        // ..
      });
    });

  container3.append(titleP1, titleP2, slogan, imgMujeres, returnButton);
  links.append(inputEmail, inputPassword, buttonLogin);
  container2.append(container3, links);
  container1.append(container2);

  console.log(container1);
  return container1;
}
