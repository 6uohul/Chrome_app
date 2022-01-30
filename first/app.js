const title = document.querySelector(".hello h1");

function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseenter(){
    title.innerText = "Mouse is here!"
}

function handleMouseleave(){
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);  //괄호 금지!!
title.addEventListener("mouseenter", handleMouseenter);
title.addEventListener("mouseleave", handleMouseleave);