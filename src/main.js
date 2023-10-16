// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import  login  from './elements/login.js';
//import { firebase } from '.firebase.js';
import  error  from './elements/error.js';
import  register  from './elements/register.js';
import  home  from './elements/home.js';

const routes = [
    { path: '/', component: home },
    { path: '/login', component: login },
    { path: '/error', component: error },
    { path: '/register', component: register },
    //{ path: '/firebase', component: firebase },
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

//myFunction();
