// VARIABLES
const btnElement = document.getElementById("btnElement");
const btnPost = document.getElementById("btnPost");
const url = "https://jsonplaceholder.typicode.com/users";
const url2 = "https://jsonplaceholder.typicode.com/posts";

// LISTENERS
btnElement.addEventListener("click", readUsersWithPromises);
//btnElement.addEventListener("click", readUsersWithAsync);
btnPost.addEventListener("click", getPostsWithPromises);
//btnPost.addEventListener("click", getPostsWithAsync);

//FUNCIONES FETCH - PROMISES
function readUsersWithPromises() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      printUsers(data);
    })
    .catch((e) => {
      console.log("error", e);
    });
}

async function readUsersWithAsync() {
  try {
    const request = await fetch(url);
    const response = await request.json();
    console.log(response);
    printUsers(response);
  } catch (error) {
    console.log(error);
  }
}

function getPostsWithPromises() {
  fetch(url2)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      printPost(data);
      console.log(data);
    })
    .catch((e) => {
      console.log("error", e);
    });
}

async function getPostsWithAsync() {
  try {
    const request = await fetch(url2);
    const response = await request.json();
    console.log(response);
    printPost(response);
  } catch (error) {
    console.log(error);
  }
}

function printUsers(response) {
    response.forEach((user) => {
      const users = document.getElementById("users");
      const card = document.createElement("div");
      card.innerHTML = `
      <span>id: ${user.id}</span>
      <span>title: ${user.name}</span>
      <span>body: ${user.username}</span>
      <span>email: ${user.email}</span>
      <span>address: ${user.address.street}</span>
      `;
      users.appendChild(card);
    });
  }

function printPost(response) {
  response.forEach((post) => {
    const posts = document.getElementById("posts");
    const card = document.createElement("div");
    card.innerHTML = `
    <span>id: ${post.id}</span>
    <span>title: ${post.title}</span>
    <span>body: ${post.body}</span>
    `;
    posts.appendChild(card);
  });
}
