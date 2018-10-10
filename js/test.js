let myBlog = [{
  name: "first",
  imgUrl: "img/labs-img2.jpg",
  altName: "Name img",
  titleText: "Blog pro to to to..",
  discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  btnText: "show more",
  fullImg: "../img/bg.jpg",
  fullText: "",
  numberBlog: "1"

}, {
  name: "first",
  imgUrl: "img/labs-img2.jpg",
  altName: "Name img",
  titleText: "Blog pro to to to..",
  discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  btnText: "show more",
  fullImg: "",
  fullText: "",
  numberBlog: "2"
}, {
  name: "first",
  imgUrl: "img/labs-img2.jpg",
  altName: "Name img",
  titleText: "Blog pro to to to..",
  discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  btnText: "show more",
  fullImg: "",
  fullText: "",
  numberBlog: "3"
}, {
  name: "first",
  imgUrl: "img/labs-img2.jpg",
  altName: "Name img",
  titleText: "Blog pro to to to..",
  discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  btnText: "show more",
  fullImg: "",
  fullText: "",
  numberBlog: "4"
}, {
  name: "first",
  imgUrl: "img/labs-img2.jpg",
  altName: "Name img",
  titleText: "Blog pro to to to..",
  discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  btnText: "show more",
  fullImg: "",
  fullText: "",
  numberBlog: "5"
}];

function pageLoad() {
  const labsGalleryItem = [];
  for (var i = 0; i < myBlog.length; i++) {
    let newel = document.createElement("div");
    newel.classList.add("labs-gallery__item");

    let newImg = document.createElement("img");
    newImg.classList.add("labs-gallery__img");
    newImg.src = myBlog[i]["imgUrl"];
    newImg.alt = myBlog[i]["altName"];

    newel.appendChild(newImg);

    let newTitle = document.createElement("h2");
    newTitle.classList.add("labs-gallery__title");
    newTitle.innerHTML = myBlog[i]["titleText"];
    newel.appendChild(newTitle);

    let newDiscp = document.createElement("p");
    newDiscp.classList.add("labs-gallery__text");
    newDiscp.innerHTML = myBlog[i]["discription"];
    newel.appendChild(newDiscp);

    let newBtn = document.createElement("button");
    newBtn.classList.add("labs-gallery__btn", "btn");
    newBtn.innerHTML = myBlog[i]["btnText"]
    newBtn.onclick = fullContent;
    newel.appendChild(newBtn);
    console.log(newel);
    document.getElementsByClassName("labs-gallery")[0].appendChild(newel);
  };
}
window.onload = pageLoad;


let createFullContent = document.getElementsByClassName("blog-content__container");
createFullContent[0].addEventListener("click", fullContent, false);
createFullContent[0].addEventListener("click", fullContent, true);

function fullContent(value) {
  let newEl = document.createElement("div");
  newEl.classList.add("bg-body");
  let newBlog = document.createElement("div");
  newBlog.classList.add("blog-content");
  newEl.appendChild(newBlog);

  let newBlogCtr = document.createElement("div");
  newBlogCtr.classList.add("blog-content__container");
  newBlog.appendChild(newBlogCtr);

  // let newBlogImg = document.createElement("img");
  // newBlogImg.classList.add("blog-content__img");
  // newBlogImg.src = myBlog[event.target.src]["fullImg"];
  // newBlogImg.alt = myBlog[event.currentTarget.value]["altName"];
  // newBlogCtr.appendChild(newBlogImg);

  let newBlogWrap = document.createElement("div");
  newBlogWrap.classList.add("blog-content__wrap");
  newBlogCtr.appendChild(newBlogWrap);

  let newBtn = document.createElement("button");
  newBtn.classList.add("blog-content__btn");
  newBtn.innerHTML = "X";
  newBtn.value = event.currentTarget.value;
  newBlog.appendChild(newBtn);
  document.getElementsByTagName("body")[0].appendChild(newEl);
};



// let newBlogImg = document.createElement("img");
// newBlogImg.classList.add("blog-content__img");
// newBlogImg.src = myBlog[event.currentTarget.value]["fullImg"];
// newBlogImg.alt = myBlog[event.currentTarget.value]["altName"];
// newBlogCtr.appendChild(newBlogImg);

//  let newBlogTitle = document.createElement("h1");
//  newBlogTitle.classList.add("blog-content__title");
//  newBlogTitle.innerHTML = myBlog[event.currentTarget.value]["titleText"];
//  newBlogWrap.appendChild(newBlogTitle);

//  let newBlogText = document.createElement("p");
//  newBlogText.classList.add("blog-content__text");
//  newBlogText.innerHTML = myBlog[event.currentTarget.value]["fullText"];
//  newBlogWrap.appendChild(newBlogText);
//  document.getElementsByClassName("blog-content__container")[0].appendChild(newBlogImg);
// }