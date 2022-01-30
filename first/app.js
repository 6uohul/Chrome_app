const h1 = document.querySelector(".hello h1");

function handleTitleClick(){
    h1.style.color = "blue";
}

function handleMouseenter(){
    h1.innerText = "Mouse is here!"
}

function handleMouseleave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("Successfully Copied!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOffline(){
    alert("WIFI connected");
}

h1.addEventListener("click", handleTitleClick);  //괄호 금지!!
h1.addEventListener("mouseenter", handleMouseenter);
h1.addEventListener("mouseleave", handleMouseleave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
