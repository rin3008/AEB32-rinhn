var dsdm = [];

function add() {
    var item_id = document.getElementById("id").value;
    var item_name = document.getElementById("name").value;
    var item_age = document.getElementById("age").value;
    var item_phone = document.getElementById("phone").value;
    var item_adress = document.getElementById("adress").value;
    var item_mail = document.getElementById("mail").value;

    var item = {
        Id: item_id,
        Name: item_name,
        Age: item_age,
        Phone: item_phone,
        Adress: item_adress,
        Mail: item_mail,
    }

    let index = dsdm.findIndex((c) => c.Id == item.Id);
    if(index >=0){
        dsdm.splice(index, 1, item);
    }else{
        dsdm.push(item);
    }
    
    show();
}

function show() {
    table = `<tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Phone</th>
        <th>Adress</th>
        <th>Mail</th>
        <th>Average</th>
        </tr>`;

    for (let i = 0; i < dsdm.length; i++) {
        table += `<tr> 
            <td>${dsdm[i].Id}</td>
            <td>${dsdm[i].Name}</td>
            <td>${dsdm[i].Age}</td>
            <td>${dsdm[i].Phone}</td>
            <td>${dsdm[i].Adress}</td>
            <td>${dsdm[i].Mail}</td>
            <th> 
                <button onclick = "deleteItem(${dsdm[i].Id})">Delete</button>
                <button onclick = "editItem(${dsdm[i].Id})">Edit</button>
            </th>
         </tr>`;
    }
    document.getElementById("show").innerHTML = table;
}


function deleteItem(a) {
    for (let i = 0; i < dsdm.length; i++) {
        if (dsdm[i].Id == a) {
            dsdm.splice(i, 1);
            show();
        }
    }
}

function editItem(a) {
    for (let i = 0; i < dsdm.length; i++) {
        if (dsdm[i].Id == a) {
            document.getElementById("id").value = dsdm[i].Id;
            document.getElementById("name").value = dsdm[i].Name;
            document.getElementById("age").value = dsdm[i].Age;
            document.getElementById("phone").value = dsdm[i].Phone;
            document.getElementById("adress").value = dsdm[i].Adress;
            document.getElementById("mail").value = dsdm[i].Mail;
        }
    }
}