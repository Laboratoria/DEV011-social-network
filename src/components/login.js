// file login.js
export function login() {
    const section = document.createElement('section');
    section.setAttribute ('class', 'container');    
    const title = document.createElement('h1');
    title.setAttribute ('class', 'title');  
    const buttonGoogle = document.createElement('button');
    buttonGoogle.setAttribute ('class', 'button-google');   
    const form = document.createElement('form');
    form.setAttribute('class', 'form');
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute ('class', 'email');   
    const inputPass = document.createElement('input');
    inputPass.setAttribute ('class', 'password');   
    const buttonLogin = document.createElement('button');
    buttonLogin.setAttribute ('class', 'button-login');   
    const buttonReturn = document.createElement ('button');
    buttonReturn.setAttribute ('class', 'button-return');
    const imgLogo = document.createElement ('img');
    imgLogo.setAttribute ('class', 'img-logo');
    imgLogo.setAttribute ('src', 'olla.png');

    title.textContent = 'Login';
    inputEmail.placeholder = 'Write email';
    inputPass.placeholder = 'pass';
    buttonLogin.textContent ='Ingresar';
    buttonGoogle.textContent = 'Ingresar con Google';
    buttonReturn.textContent = 'Return to home';
    
    buttonReturn.addEventListener('click', () => {
      navigateTo('/');
    });
    form.append(inputEmail, inputPass, buttonLogin);
    section.append(title, form, buttonGoogle, buttonReturn);
  
    return section;
  }
  
  export default login;