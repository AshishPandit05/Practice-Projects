let form = document.querySelector("form");
let userName = document.querySelector("#name");
let userEmail = document.querySelector("#email");
let users = document.querySelector(".users");
let userUrl = document.querySelector("#url");

let usersData = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzPJpfpDLrmdksXc8DgohJ7kfg__yOMraxQ&s",
    dob: "1998-05-14",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    imageURL: "https://randomuser.me/api/portraits/women/45.jpg",
    dob: "2000-11-22",
  },
  {
    id: 3,
    name: "Rohan Gupta",
    email: "rohan.gupta@example.com",
    imageURL: "https://randomuser.me/api/portraits/men/18.jpg",
    dob: "1997-08-09",
  },
  {
    id: 4,
    name: "Sneha Patel",
    email: "sneha.patel@example.com",
    imageURL: "https://randomuser.me/api/portraits/women/67.jpg",
    dob: "2001-03-30",
  },
  {
    id: 5,
    name: "Kabir Singh",
    email: "kabir.singh@example.com",
    imageURL: "https://randomuser.me/api/portraits/men/54.jpg",
    dob: "1999-12-17",
  },
];
let ui = () => {
  users.innerHTML = "";
  usersData.forEach((elem, index) => {
    users.innerHTML += `<div class="user_card">
        <div class="img_box">
        <img
          src=${elem.imageURL}
          alt="image"
        />
        </div>
        <div class="text">
            <h4>Name - ${elem.name}</h4>
            <p>Email - ${elem.email}</p>
            <p>DOB - ${elem.dob}</p>
            <div class="edit_delete">
            <button class="edit">Edit</button>
            <button class="delete" onclick="deleteCard(${index})" >Delete</button>
        </div>  

        </div>
      </div>`;
  });
};
ui();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = userName.value;
  let email = userEmail.value;
  let imageURL = userUrl.value;
  usersData.push({
    name,
    email,
    imageURL,
  });
  ui();
  form.reset();
});

let deleteCard = (index) => {
  usersData.splice(index, 1);
  ui();
};
