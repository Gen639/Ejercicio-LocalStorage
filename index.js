const submitButton = document.getElementById("submitBtn");
const deleteButton = document.getElementById("deleteBtn");

const nameValue = document.getElementById("nameValue");
const emailValue = document.getElementById("emailValue");
const messageValue = document.getElementById("messageValue");

const userCollection = [];

function deleteLocalStorage(e) {
  e.preventDefault();
  localStorage.clear();
}

function eventSubmit(e) {
  e.preventDefault();

  const newUser = {
    userName: nameValue.value,
    userEmail: emailValue.value,
    userMessage: messageValue.value,
  };

  localStorage.setItem("user", JSON.stringify(newUser));

  userCollection.push(newUser);
  localStorage.setItem("userCollection", JSON.stringify(userCollection));
}

submitButton.addEventListener("click", eventSubmit);
deleteButton.addEventListener("click", deleteLocalStorage);
