/**
 * @jest-environment jsdom
 */

// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
// import { jest } from '@jest/globals';
import { expect } from '@jest/globals';
import {
  authGoogle, loginEmail,
} from '../src/auth.js';
import * as prueba from '../src/auth.js';
import { register } from '../src/elements/register.js';
// import * as index from '../src/elements/register.js';
// import { register } from '../src/elements/register.js';
describe('authGoogle', () => {
  test('is a function', () => {
    expect(typeof authGoogle).toBe('function');
  });
});
test('have a button', () => {
  const DOM = document.createElement('div');
  DOM.append(loginEmail());
  const haveAButton = DOM.querySelector('#buttonLogin');
  expect(haveAButton).not.toBe(undefined);
});

describe('button login', () => {
  test('testing button NewUser', () => {
    const spyNewUser = jest.spyOn(prueba, 'NewUser').mockImplementation(() => Promise.resolve());
    const navigateTo = jest.fn()
    const DOM = document.createElement('div');
    DOM.append(register(navigateTo));
    const email = DOM.querySelector('#emailR');
    const password = DOM.querySelector('#passwordR');
    const buttonLogin = DOM.querySelector('#buttonLogin');
    email.value = 'prueba@prueba49.com';
    password.value = '123456';
    buttonLogin.click();

    setTimeout(()=>{
      expect(navigateTo).toHaveBeenCalledWith('/login')
    })
  //   expect(spyNewUser).toHaveBeenCalledWith('prueba@prueba49.com', '123456');
  //   const user = spyNewUser.mock.results[0].value;
  //   console.log({ user }, 'desde aquiiiiiiiiiiiiiiiii');
  //  expect(user.email).toBe('prueba@prueba49.com');
  });
});
