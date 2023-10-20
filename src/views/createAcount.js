import { auth } from "../firebase";
import { crearUsuarioConCorreoYContrasena, correoValidacion } from "../lib";

export function createAcount(navigateTo) {
  const section = document.createElement("section");
  const imagen = document.createElement("img");
  const email = document.createElement("h4");
  const titleUser = document.createElement("h4");
  const titlePass = document.createElement("h4");
  const buttonBack = document.createElement("button");
  const form = document.createElement("form");
  const inputEmail = document.createElement("input");
  const inputPass = document.createElement("input");
  const buttonSingUp = document.createElement("button");

  imagen.src = "./img/logo.png";
  inputPass.type = "password";
  buttonSingUp.textContent = "Sing Up";
  buttonSingUp.addEventListener("click", (e) => {
    e.preventDefault();
    crearUsuarioConCorreoYContrasena(inputEmail.value, inputPass.value)
      .then(() => {
        correoValidacion().then(()=>{
          alert("Cuenta Creada");
        navigateTo("/");
        });
        
      })

      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          alert("Your email is not valid");
        }
        if (error.code === "auth/weak-password") {
          alert("Password should be at least 6 characters");
        }
        if (error.code === "auth/email-already-in-use") {
          alert(error);
        }
        if (error.code) {
          alert(error);
        }
      });
  });

  email.textContent = "Enter Email Id";
  titleUser.textContent = "Create User Name";
  titlePass.textContent = "Create Password";

  form.append(email, inputEmail, titlePass, inputPass, buttonSingUp);

  section.append(imagen, form, buttonBack);

  return section;
}

export default createAcount;
