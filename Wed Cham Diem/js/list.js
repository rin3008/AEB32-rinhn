const URL = "https://63a06c8d24d74f9fe837d721.mockapi.io/users";


getListUser();

// (users : Array<object>) => void
function _renderUI(users) {
  let elmBody = document.getElementById("tbody__user");

  function formatRow(user) {
    return `
    <tr>
      
      <td>${user.Coffe}</td>
      <td>${user.loai1}</td>
      <td>${user.loai2}</td>
      <td>${user.loai3}</td>
      <td>${user.loai4}</td>

      <td>
        <button class="btn btn-success" onclick="goToDetail(${user.id})">Detail</button>
        <button class="btn btn-danger" onclick="EditUser(${user.id})">Edit</button>
        <button class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button>

      </td>
    </tr>
    `;
  }

  let bodyTable = "";

  for (let index = 0; index < users.length; index++) {
    bodyTable += formatRow(users[index]);
  }

  elmBody.innerHTML = bodyTable;
}

function getListUser() {
  fetch(URL, {
      method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // dam bao users no co data
      _renderUI(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function goToDetail(userId) {
  console.log("goToDetail", userId);
  window.location.href = `./detail.html?id=${userId}`;
}

function deleteUser(userId) {
  console.log("deleteUser");
  let user_delete = URL + "/" + userId;
  fetch(user_delete, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then((data) => {
      getListUser();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function EditUser(userId) {
  console.log("EditUser", userId)
  window.location.href = `./form.html?id=${userId}`;
}