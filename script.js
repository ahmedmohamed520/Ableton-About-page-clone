"use strict";
const btn = document.querySelector(".nav-opener");
const menu = document.querySelector(".collapse-md");
const logo = document.querySelector(".logo");
// video
const poster = document.querySelector(".poster");
const playBtn = document.querySelector(".playBtn");
const video = document.querySelector(".iframe");
const removeThumbnail = function (e) {
    poster.style.display = "none";
    playBtn.style.display = "none";
    video.src += "?autoplay=1";
    e.preventDefault();
};

btn.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.toggle("open-menu");
    btn.classList.toggle("white-opener");
    logo.classList.toggle("bg-white");
});
playBtn.addEventListener("click", removeThumbnail);

poster.addEventListener("click", removeThumbnail);
