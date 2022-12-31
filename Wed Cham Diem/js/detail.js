let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);

const URL = "https://63a06c8d24d74f9fe837d721.mockapi.io/users/" + id;

fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    _renderInfoUser(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function _renderInfoUser(user) {
  let elm = document.getElementById("info__user");
  elm.innerHTML = `
           
   <form class="row g-3 w-50 m-auto my-3" onsubmit="return false">
      <div class="col-12">
        <label for="inputCoffe" class="form-label">id</label>
        <input type="text" class="form-control" placeholder="${user.id}" />
      </div>
      <div class="col-12">
        <label for="inputloai1" class="form-label">Coffe</label>
        <input type="text" class="form-control" placeholder="${user.Coffe}" />
      </div>
      <div class="col-12">
        <label for="inputloai1" class="form-label">loai1</label>
        <input type="text" class="form-control" placeholder="${user.loai1}" />
      </div>
      <div class="col-12">
        <label for="inputloai2" class="form-label">loai2</label>
        <input type="text" class="form-control" placeholder="${user.loai2}" />
      </div>
      <div class="col-12"
      <label for="inputloai3" class="form-label">loai3</label>

        <input
          type="text"
          class="form-control"
          placeholder="${user.loai3}"
          
        />
        <div class="col-12">
        <label for="inputloai4" class="form-label">loai4</label>
        <input type="text" class="form-control" placeholder="${user.loai4}" />
      </div>
    `;
}


      