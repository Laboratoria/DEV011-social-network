function login(navigateTo) {
    const container1 = document.createElement('container flex');
    const container2 = document.createElement('mujeres-page flex');
    const container3 = document.createElement('text');
    const titleP1 = document.createElement('h1');
    const titleP2 = document.createElement('h2');
    const slogan = document.createElement('p');
    const imgMujeres = document.createElement('image1');
    const links = document.createElement('#');
    const inputEmail = document.createElement('email');
    const inputPassword = document.createElement('password');
    const container4 = document.createElement('link');
    const buttonLogin = document.createElement('login');
    const or = document.createElement('a');
    const buttonGoogle = document.createElement('google-button');
    const imgGoogle = document.createElement('google');
    const buttonNewAccount = document.createElement('new-button');
    const form = document.createElement('form');

  
    inputEmail.placeholder = 'Email';
    inputPassword.placeholder = 'Password';
  
    titleP1.textContent = 'Mujeres';
    titleP2.textContent = '-Space-';
    slogan.textContent = 'Conectadas las Mujeres de todo el mundo';
    buttonLogin.textContent = 'Entrar';
    or.textContent = 'ó';
    buttonGoogle.textContent = 'Continuar con Google';
  
    buttonNewAccount.textContent = 'Crear cuenta';
    buttonReturn.addEventListener('click', () => {
      navigateTo('/register');
    });
  
    form.append(inputEmail, inputPassword, buttonLogin, buttonGoogle, buttonNewAccount);
    section.append(titleP1, titleP2, slogan, form);

    console.log(form);
    return section;
  }
  
  export default login;