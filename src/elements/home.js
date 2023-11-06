import { addPost, paintRealTime } from '../lib/index.js';

export function home(navigateTo) {
  const section = document.createElement('section');

  const title = document.createElement('h2');
  title.setAttribute('class', 'postitle');
  title.textContent = 'Bienvenida a MUJER SPACE';
  const buttonExit = document.createElement('button');
  buttonExit.setAttribute('type', 'submit');
  buttonExit.setAttribute('class', 'buttonexit');
  buttonExit.textContent = 'Salir';
  buttonExit.addEventListener('click', () => {
    navigateTo('/login');
  });
  // const imgMujeres1 = document.createElement('img');
  // imgMujeres1.setAttribute('alt', 'mujer1');
  // imgMujeres1.setAttribute('class', 'image2');
  // imgMujeres1.src = 'img/MUJERES1.png';

  const imgMujeres = document.createElement('img');
  imgMujeres.setAttribute('alt', 'mujer');
  imgMujeres.setAttribute('class', 'image2');
  imgMujeres.src = 'img/Mujer -Space_-2.png';

  const postContainer = document.createElement('div');
  postContainer.setAttribute('class', 'post-container');
  
  const postTitle = document.createElement('input');
  postTitle.setAttribute('type', 'text');
  postTitle.setAttribute('class', 'post-title');
  postTitle.setAttribute('id', 'postTitle');
  postTitle.setAttribute('placeholder', '¿Qué nos quieres compartir hoy?');

  const postButton = document.createElement('button');
  postButton.setAttribute('class', 'post-button');
  postButton.textContent = 'Publicar';
  postButton.addEventListener('click', () => {
    const comment = postTitle.value;
    addPost(comment);
    postTitle.value= '';
  });

  const publicationPost = document.createElement('article');
  publicationPost.setAttribute('class', 'post-section');
  paintRealTime((querySnapshot) => {
    publicationPost.textContent = '';
    querySnapshot.forEach((doc, home) => {
      const post = document.createElement('div');
      post.classList.add('post-container-in');
      
      post.innerHTML = `
      <div class="post-container1">
        <p class="post-title">${doc.data().comment}</p>
        <img class="delete" src="/img/eliminar.png" alt="Eliminar">
        <img class="like-icon" src="/img/like.png" alt="Like">
        <button class="post-edit">Editar</button>
      </div>
      `;
      publicationPost.append(post);
    });
  });

  //Icono de Eliminar
  const deleteIcon = document.createElement('img');
  deleteIcon.classList.add('delete-icon');
  deleteIcon.src = '/img/eliminar.png';
  deleteIcon.addEventListener('click', () => {
    //Lógica para eliminar la publicación
  });

  // // Icono de Like
  // const likeIcon = document.createElement('img');
  // likeIcon.classList.add('like-icon');
  // likeIcon.src = '/img/like.png';
  // likeIcon.addEventListener('click', () => {
  // });

  // // Botón de Editar
  // const editButton = document.createElement('button');
  // editButton.setAttribute('class', 'post-edit');
  // editButton.textContent = 'Editar';
  // editButton.addEventListener('click', () => {
  //   // Lógica para editar la publicación
  // });

  const postContainerInner = document.createElement('div');
  postContainerInner.setAttribute('class', 'post-container-inner');
  postContainerInner.append(postTitle, postButton);

  postContainer.append(postContainerInner);

  section.append(title, buttonExit, imgMujeres,  postContainer, publicationPost);

  return section;
}
