import {addUserToSocialNetwork} from '../lib/auth.js';
function signUp (navigateTo){
    const container =document.createElement('div');
    const html = `
    <div class='login' id='signup'>
    <span> Signup </span>
    <input type='email' placeholder='email' id='email'>
    <input type='password' placeholder='***' name='password' id='password'>
    <span id='answer'></span>
    <button id='save'>Save</button>
    </div>
    <button id='return'>Return </button>
    `;
    container.innerHTML=html;
    container.querySelector('#return').addEventListener('click', ()=>{
        navigateTo('/');
        
    })
}