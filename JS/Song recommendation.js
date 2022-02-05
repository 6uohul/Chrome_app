const songs = [
    {
        title: "abcdefu",
        singer: "GAYLE",
    },
    {
        title: "기억소각",
        singer: "다운 (feat.기리보이)",
    },
    {
        title: "우리 사랑은",
        singer: "찰리빈웍스",
    },
    {
        title:"캥거루",
        singer:"원슈타인",
    },
    {
        title:"I'll be your family!",
        singer:"백예린",
    },
    {
        title:"안녕",
        singer:"조이",
    },
    {
        title:"Baby Blue",
        singer:"Luke Hemmings",
    },
    {
        title:"고양이",
        singer:"선우정아 (feat. 아이유)"
    },
]

const song = document.querySelector("#songs span:first-child");
const author = document.querySelector("#songs span:last-child");
const todaysSong = songs[Math.floor(Math.random() * songs.length)]

song.innerText = todaysSong.title;
author.innerText = todaysSong.singer;