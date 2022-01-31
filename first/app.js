const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const removeButton = document.querySelector("#removing");

const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerText = "Hello " + username;
    Greetings(username);
}

function Greetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    removeButton.classList.remove(HIDDEN_CLASSNAME);
}

function removingStorage(){
    alert("Successfully removed!");
    localStorage.removeItem("username");
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    removeButton.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
}

const localStUsername = localStorage.getItem(USERNAME_KEY);

if(localStUsername === null){   //user정보가 없을 때
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    Greetings(localStUsername);
    removeButton.addEventListener("click", removingStorage);    
}