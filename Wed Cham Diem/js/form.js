const URL_USER = "https://63a06c8d24d74f9fe837d721.mockapi.io/users";

let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");

if (id) {
  getUser()
}

function getUser() {
  fetch(`${URL_USER}/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let elmCoffe = document.getElementById("inputCoffe");
      let elmloai1 = document.getElementById("inputloai1");
      let elmloai2 = document.getElementById("inputloai2");
      let elmloai3 = document.getElementById("inputloai3");
      let elmloai4 = document.getElementById("inputloai4");

      elmCoffe.value = data.Coffe;
      elmloai1.value = data.loai1;
      elmloai2.value = data.loai2;
      elmloai3.value = data.loai3;
      elmloai4.value = data.loai4;

    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function handleSubit() {
  let elmCoffe = document.getElementById("inputCoffe");
      let elmloai1 = document.getElementById("inputloai1");
    let elmloai2 = document.getElementById("inputloai2");
    let elmloai3 = document.getElementById("inputloai3");
    let elmloai4 = document.getElementById("inputloai4");

  let user = {
    Coffe: elmCoffe.value,
    loai1: elmloai1.value,
    loai2: elmloai2.value,
    loai3: elmloai3.value,
    loai4: elmloai4.value,

  };
  if (id) {
    updateUser(user)
  }else{
    postUser(user);
  }
 
}

function postUser(user) {
  console.log('postUser');
  fetch(URL_USER, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function updateUser(user) {
  fetch(`${URL_USER}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}