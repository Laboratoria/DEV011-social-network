import { auth } from '../firebase';
import { crearUsuarioConCorreoYContrasena, correoValidacion } from '../lib';

export function createAcount(navigateTo) {
  const section = document.createElement('section');
  section.className = 'sectionlogin';
  const imagen = document.createElement('img');
  imagen.className = 'logo';
  const email = document.createElement('h4');
  const titleUser = document.createElement('h4');
  titleUser.className = 'titleuser';
  const titlePass = document.createElement('h4');
  titlePass.className = 'tirlepass';
  const buttonBack = document.createElement('img');
  buttonBack.className = 'buttonBack';
  const form = document.createElement('form');
  form.className = 'formlogin';
  const inputEmail = document.createElement('input');
  inputEmail.className = 'imputname';
  const spanErrorUser = document.createElement('span');
  spanErrorUser.id = 'spanErrorUserStyle';
  spanErrorUser.textContent = 'error por defecto';
  const inputPass = document.createElement('input');
  inputPass.className = 'imputpass';
  const spanErrorPass = document.createElement('span');
  spanErrorPass.id = 'spanErrorPassStyle';
  const buttonSingUp = document.createElement('button');

  imagen.src = './img/logo.png';
  inputPass.type = 'password';
  buttonBack.src = './img/fleachaatras.png';
  buttonBack.addEventListener('click', () => {
    navigateTo('/');
  });
  buttonSingUp.textContent = 'Sing Up';
  buttonSingUp.addEventListener('click', (e) => {
    e.preventDefault();
    crearUsuarioConCorreoYContrasena(inputEmail.value, inputPass.value)
      .then(() => {
        correoValidacion().then(() => {
          navigateTo('/');
        });
      })

      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          spanErrorUser.textContent = 'Your email is not valid';
          spanErrorUser.style.visibility = 'visible';
        }
        if (error.code === 'auth/weak-password') {
          spanErrorPass.textContent = 'Password should be at least 6 characters';
          spanErrorPass.style.visibility = 'visible';
        }
        if (error.code === 'auth/missing-password') {
          spanErrorPass.textContent = 'Password is not valid';
          spanErrorPass.style.visibility = 'visible';
        }
        if (error.code === 'auth/email-already-in-use') {
          spanErrorUser.textContent = 'Your information is not valid';
          spanErrorUser.style.visibility = 'visible';
        }
        // if (error.code) {
        //   alert(error);
        // }
      });
  });

  email.textContent = 'Enter Email Id';
  titleUser.textContent = 'Create User Name';
  titlePass.textContent = 'Create Password';

  form.append(
    email,
    inputEmail,
    spanErrorUser,
    titlePass,
    inputPass,
    spanErrorPass,
  );

  section.append(buttonBack, imagen, form, buttonSingUp);

  return section;
}

export default createAcount;
