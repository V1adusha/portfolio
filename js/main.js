let myProject = [{
  name: "first",
  imgUrl: "img/home-work.png",
  urlPage: "www.google.com",
  discription: "It my project",
  altName: "nameProject"
}, {
  name: "scecond",
  imgUrl: "img/home-work1.png",
  urlPage: "www.google.com",
  discription: "It my project",
  altName: "nameProject"
}, {
  name: "three",
  imgUrl: "img/home-work2.png",
  urlPage: "www.google.com",
  discription: "It my project",
  altName: "nameProject"
}, {
  name: "four",
  imgUrl: "img/home-work3.png",
  urlPage: "www.google.com",
  discription: "It my project",
  altName: "nameProject"
}, {
  name: "five",
  imgUrl: "img/home-work4.png",
  urlPage: "www.google.com",
  discription: "It my project",
  altName: "nameProject"
}, {
  name: "first",
  imgUrl: "img/home-work.png",
  urlPage: "www.google.com",
  discription: "It my project",
  altName: "nameProject"
}, {
  name: "scecond",
  imgUrl: "img/home-work1.png",
  urlPage: "www.google.com",
  discription: "It my project",
  altName: "nameProject"
}, {
  name: "three",
  imgUrl: "img/home-work2.png",
  urlPage: "www.google.com",
  discription: "It my project",
  altName: "nameProject"
}, {
  name: "four",
  imgUrl: "img/home-work3.png",
  urlPage: "www.google.com",
  discription: "It my project",
  altName: "nameProject"
}, {
  name: "five",
  imgUrl: "img/home-work4.png",
  urlPage: "www.google.com",
  discription: "It my project",
  altName: "nameProject"
}];

function onPageLoad() {
  const galleryItems = [];
  for (var i = 0; i < myProject.length; i++) {
    let newEl = document.createElement("figure");
    newEl.classList.add("gallery__item");

    let newImg = document.createElement("img");
    newImg.classList.add("gallery__img");
    newImg.src = myProject[i]["imgUrl"];
    newImg.alt = myProject[i]["altName"];
    newImg.onclick = onImgClick;

    newEl.appendChild(newImg);

    let newFig = document.createElement("figcaption");
    newFig.classList.add("gallery__text");
    let newLink = document.createElement("a");
    newLink.classList.add("gallery__link");
    newLink.href = myProject[i]["urlPage"];
    newLink.innerHTML = myProject[i]["name"];
    newFig.appendChild(newLink);
    newEl.appendChild(newFig);
    document.getElementsByClassName("gallery")[0].appendChild(newEl);
  };
}
window.onload = onPageLoad;

function onImgClick(event) {
  let zoomedIn = document.getElementsByClassName("bg-body")[0];
  if (!zoomedIn) {
    const newBg = document.createElement("div");
    newBg.classList.add("bg-body");
    newBg.classList.add("bg-open");
    newBg.onclick = closeZoom;
    const newImg = document.createElement("img");
    const url = event.currentTarget.src.split("/").pop().split(".");
    const newUrl = "img/" + url[0] + "-large." + url[1];
    newImg.src = newUrl;
    newImg.classList.add("gallery__img_zoom");
    newBg.appendChild(newImg);
    document.body.appendChild(newBg);
  };
  zoomedIn = true;
}

function closeZoom() {

  let findEl = document.getElementsByClassName("bg-body")[0];
  findEl.classList.remove("bg-open");
  findEl.classList.add("bg-close");
  setTimeout(function() {
    findEl.remove();
  }, 900);
};
// function scrollFix (){
//    const zoomImg = document.getElementsByClassName("bg-body")[0];
//    zoomImg ?
// }