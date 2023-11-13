import { authGoogle, loginEmail } from '../auth.js';

export function login(navigateTo) {
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

  // const cintarosa = document.createElement('img');
  // cintarosa.setAttribute('alt', 'mujer');
  // cintarosa.setAttribute('class', 'image3');
  // cintarosa.src = '/img/cinta2.png';

  const imgMujeres = document.createElement('img');
  imgMujeres.setAttribute('alt', 'mujer');
  imgMujeres.setAttribute('class', 'image1');
  imgMujeres.src = 'img/Mujer -Space_-2.png';

  const links = document.createElement('form');
  links.setAttribute('action', '#');
  links.setAttribute('class', 'contenido');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('id', 'email1');
  inputEmail.placeholder = 'Email';
  inputEmail.required = true;

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('id', 'password1');
  inputPassword.placeholder = 'Password';
  inputPassword.required = true;

  const linkButton = document.createElement('div');
  linkButton.setAttribute('class', 'link');

  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('id', 'buttonLogin');
  buttonLogin.setAttribute('type', 'submit');
  buttonLogin.setAttribute('class', 'login');
  buttonLogin.textContent = 'Entrar';

  buttonLogin.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event);
    loginEmail(inputEmail.value, inputPassword.value).then((response) => {
      if (response) {
        console.log(response);
        navigateTo('/wall');
      }
    });
  });

  const or = document.createElement('a');
  or.setAttribute('class', 'or');
  or.textContent = 'ó';

  const buttonGoogle = document.createElement('button');
  buttonGoogle.setAttribute('type', 'submit');
  buttonGoogle.setAttribute('class', 'login google-button');
  buttonGoogle.textContent = 'Continuar con Google';

  buttonGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    authGoogle().then((response) => {
      if (response) {
        console.log(response);
        navigateTo('/wall');
      }
    });
  });

  const imgGoogle = document.createElement('img');
  imgGoogle.setAttribute('class', 'google');
  imgGoogle.setAttribute('alt', 'logo-google');
  imgGoogle.src = 'img/logo_google_icon_143197.png';

  const container4 = document.createElement('div');
  container4.setAttribute('class', 'button');

  const buttonNewAccount = document.createElement('a');
  buttonNewAccount.setAttribute('href', '#');
  buttonNewAccount.setAttribute('class', 'newac');
  buttonNewAccount.textContent = 'Crear cuenta';
  buttonNewAccount.addEventListener('click', () => {
    navigateTo('/register');
  });

  container3.append(titleP1, titleP2, slogan, imgMujeres);
  container4.append(buttonNewAccount);
  links.append(
    inputEmail,
    inputPassword,
    buttonLogin,
    or,
    buttonGoogle,
    imgGoogle,
    buttonNewAccount,
  );
  container2.append(container3, linkButton, container4, links);
  container1.append(container2);

  console.log(container1);
  return container1;
}
