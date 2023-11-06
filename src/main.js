// import { myFunction } from './lib/index.js';
import { login } from './elements/login.js';
import { error } from './elements/error.js';
import { register } from './elements/register.js';
import { home } from './elements/home.js';
// import { wallPage } from './elements/post.js';

const routes = [
  { path: '/', component: login },
  { path: '/login', component: login },
  { path: '/wall', component: home },
  { path: '/error', component: error },
  { path: '/register', component: register },
  // { path: '/wallPage', component: wallPage },
  // { path: '/firebase', component: firebase },
];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);

// myFunction();

// function createUser(){

//   const email = document.getElementById ("email2").Value;
//   const password = document.getElementById ("password2").Value;
//   firebase.auth().createUserWhitEmailAndPassword()
//   .then(res =>{
//     alert("se registro correctamente")

//   }).catch(err=>{
//     alert("ocurrio un error");
//   });

// };
