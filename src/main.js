// Este es el punto de entrada de tu aplicacion
// file main.js
import home from './home.js';
import login from './login.js';
import error from './error.js';
import register from './register.js';

const routes = [
    { path: '/', component: home },
    { path: '/login', component: login },
    { path: '/error', component: error },
    { path: '/register', component: register },
];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
    const route = routes.find((routeFound) => routeFound.path === hash);
    console.log('route', route);
    console.log('route.component', route.component);
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

function returnHome() {
    navigateTo('/');
}

window.onpopstate = () => {
    navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);

=======
// file main.js finished
import home from './home.js';
import login from './login.js';
import error from './error.js';

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/error', component: error },
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

