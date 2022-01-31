const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const removeButton = document.querySelector("#removing");

const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const localStUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    //greeting.innerText = "Hello " + username;
    Greetings();
}

function Greetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username} !`;
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

if(localStUsername === null){   //user정보가 없을 때
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    Greetings();
    removeButton.addEventListener("click", removingStorage);    
}