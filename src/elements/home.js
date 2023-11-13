// import { async } from 'regenerator-runtime';
import {
  addPost, 
  paintRealTime, 
  deletePost, 
  editpost, 
  likePost,
  //removeLike
} from '../lib/index.js';

import { auth } from '../auth.js';

let editingPostId = null;

export function home(navigateTo) {
  const section = document.createElement('section');

  const title = document.createElement('h2');
  title.setAttribute('class', 'postitle');
  title.textContent = 'Bienvenida a MUJER SPACE'
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
  postTitle.setAttribute('for', 'title');
  postTitle.setAttribute('class', 'post-title');
  postTitle.setAttribute('id', 'postTitle');
  postTitle.setAttribute('placeholder', '¿Qué nos quieres compartir hoy?');


const postButton = document.createElement('button');
postButton.setAttribute('class', 'post-button');
postButton.textContent = 'Publicar';
postButton.addEventListener('click', async () => {
  const comment = postTitle.value;

  if (editingPostId) {
    try {
      await editpost(editingPostId, comment);
      console.log('Post editado correctamente');
      paintRealTime((querySnapshot) => {
        editingPostId = null;
      });
    } catch (error) {
      console.error('Error al editar el post', error);
    }
  } else {
    try {
      await addPost(comment, auth.currentUser.email);
      console.log('Post agregado correctamente');
      paintRealTime((querySnapshot) => {
      });
    } catch (error) {
      console.error('Error al agregar el post', error);
    }
  }
  postTitle.value = '';
});

  const publicationPost = document.createElement('article');
  publicationPost.setAttribute('class', 'post-section');
  paintRealTime((querySnapshot) => {
    publicationPost.textContent = '';
    querySnapshot.forEach((doc) => {
      const post = document.createElement('div');
      post.classList.add('post-container-in');

      post.innerHTML = `
      <div class="post-container1">
        <p class="post-title">${doc.data().comment}</p>
        <img class="edit-icon" src="/img/editar.png" data-id="${doc.id}" alt="Edit">
        <img class="delete-icon" src="/img/eliminar.png" data-id="${doc.id}" alt="Delete">
        <span class="count-like" id="likes-count-${doc.id}">${doc.data().likes.length}</span>
        <img class="like-icon" src="/img/like.png" data-id="${doc.id}" alt="Like">
        <p class="post-author">Compartido por: ${doc.data().user}</p>
      </div>
      `;
      publicationPost.append(post);
        
      //Este codigo es para que se elimine el post
      const btnDelete = publicationPost.querySelectorAll('.delete-icon');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          if (doc.data().user === auth.currentUser.email)  {
            // if (window.confirm('¿Estas segura de eliminar esta publicación?')) {
            deletePost(dataset.id);
          } else {
            console.log('este post no es tuyo');
            // alert ("No es posible eliminar este Post")
          // }
         }
         });
       });
     });
        //Aqui debemos crear el codigo para editar la publicacióm
       const btnEdit = publicationPost.querySelectorAll('.edit-icon');
       btnEdit.forEach((btn) => {
       btn.addEventListener('click', async (e) => {
       editingPostId = e.target.dataset.id;

    try {
      const tarea = await editpost(editingPostId);
      console.log(editingPostId);
      const postTitleElement = document.getElementById('postTitle');
      postTitleElement.value = tarea.comment; 
    } catch (error) {
      console.error('Error al obtener el post', error);
    }
    });
     });
        
     //este codigo es  para dar el like en el icono y q sea 1 por usuaria
      const btnLike = publicationPost.querySelectorAll('.like-icon');
      btnLike.forEach((btn) => {
      btn.addEventListener('click', async ({ target: { dataset } }) => {
      const postId = dataset.id;
      await likePost(postId, auth.currentUser.email);
     
       });
    });
     // Actualizar la cantidad de likes en tiempo real en interfazz y en data
        // Agrega un listener para escuchar el evento 'likeAdded'
          document.addEventListener('likeAdded', () => {
          const countLikes = publicationPost.querySelector(`#likes-count-${doc.id}`);
          countLikes.textContent = doc.data().likes.length;
        });     
      });
    


  const postContainerInner = document.createElement('div');
  postContainerInner.setAttribute('class', 'post-container-inner');
  postContainerInner.append(postTitle, postButton);

  postContainer.append(postContainerInner);

  section.append(title, buttonExit, imgMujeres, postContainer, publicationPost);

  return section;
}
