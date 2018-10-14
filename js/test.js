let myBlog = [{
  name: "first",
  imgUrl: "img/labs-img2.jpg",
  altName: "alt name",
  titleText: "Lorem ipsum dolor sit amet.",
  discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  btnText: "show more",
  fullImg: "img/home-work1-large.png",
  fullText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias illum dolorum labore sunt doloremque dolores, laudantium amet accusamus ipsam quaerat, veniam, inventore, hic expedita consectetur quibusdam! Praesentium assumenda architecto officia cumque voluptate nesciunt consectetur, veniam quas laborum optio blanditiis adipisci quod aspernatur quam, necessitatibus explicabo ad ex. Molestias, veritatis, qui."
},
{
  name: "second",
  imgUrl: "img/labs-img2.jpg",
  altName: "alt name",
  titleText: "Lorem ipsum dolor sit amet.",
  discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  btnText: "show more",
  fullImg: "img/home-work1-large.png",
  fullText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias illum dolorum labore sunt doloremque dolores, laudantium amet accusamus ipsam quaerat, veniam, inventore, hic expedita consectetur quibusdam! Praesentium assumenda architecto officia cumque voluptate nesciunt consectetur, veniam quas laborum optio blanditiis adipisci quod aspernatur quam, necessitatibus explicabo ad ex. Molestias, veritatis, qui."
},
{
  name: "three",
  imgUrl: "img/labs-img2.jpg",
  altName: "alt name",
  titleText: "Lorem ipsum dolor sit amet.",
  discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  btnText: "show more",
  fullImg: "img/home-work1-large.png",
  fullText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias illum dolorum labore sunt doloremque dolores, laudantium amet accusamus ipsam quaerat, veniam, inventore, hic expedita consectetur quibusdam! Praesentium assumenda architecto officia cumque voluptate nesciunt consectetur, veniam quas laborum optio blanditiis adipisci quod aspernatur quam, necessitatibus explicabo ad ex. Molestias, veritatis, qui."
},
{
  name: "fore",
  imgUrl: "img/labs-img2.jpg",
  altName: "alt name",
  titleText: "Lorem ipsum dolor sit amet.",
  discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  btnText: "show more",
  fullImg: "img/home-work1-large.png",
  fullText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias illum dolorum labore sunt doloremque dolores, laudantium amet accusamus ipsam quaerat, veniam, inventore, hic expedita consectetur quibusdam! Praesentium assumenda architecto officia cumque voluptate nesciunt consectetur, veniam quas laborum optio blanditiis adipisci quod aspernatur quam, necessitatibus explicabo ad ex. Molestias, veritatis, qui."
},
{
  name: "five",
  imgUrl: "img/labs-img2.jpg",
  altName: "alt name",
  titleText: "Lorem ipsum dolor sit amet.",
  discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  btnText: "show more",
  fullImg: "img/home-work1-large.png",
  fullText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias illum dolorum labore sunt doloremque dolores, laudantium amet accusamus ipsam quaerat, veniam, inventore, hic expedita consectetur quibusdam! Praesentium assumenda architecto officia cumque voluptate nesciunt consectetur, veniam quas laborum optio blanditiis adipisci quod aspernatur quam, necessitatibus explicabo ad ex. Molestias, veritatis, qui."
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
    newBtn.value = i;
    newel.appendChild(newBtn);
    console.log(newel);
    document.getElementsByClassName("labs-gallery")[0].appendChild(newel);
  };
}
window.onload = pageLoad;

function fullContent(event) {
  let newEl = document.createElement("div");
  newEl.classList.add("bg-body");
  let newBlog = document.createElement("div");
  newBlog.classList.add("blog-content");
  newEl.appendChild(newBlog);

  let newBlogCtr = document.createElement("div");
  newBlogCtr.classList.add("blog-content__container");
  newBlog.appendChild(newBlogCtr);

  let newBlogImg = document.createElement("img");
  newBlogImg.classList.add("blog-content__img");
  newBlogImg.src = myBlog[event.currentTarget.value]["fullImg"];
  newBlogImg.alt = myBlog[event.currentTarget.value]["altName"];
  newBlogCtr.appendChild(newBlogImg);

  let newBlogWrap = document.createElement("div");
  newBlogWrap.classList.add("blog-content__wrap");
  newBlogCtr.appendChild(newBlogWrap);


  let newBlogTitle = document.createElement("h1");
  newBlogTitle.classList.add("blog-content__title");
  newBlogTitle.innerHTML = myBlog[event.currentTarget.value]["titleText"];
  newBlogWrap.appendChild(newBlogTitle);

  let newBlogText = document.createElement("p");
  newBlogText.classList.add("blog-content__text");
  newBlogText.innerHTML = myBlog[event.currentTarget.value]["fullText"];
  newBlogWrap.appendChild(newBlogText);


  let newBtn = document.createElement("button");
  newBtn.classList.add("blog-content__btn");
  newBtn.innerHTML = "X";
  newBtn.value = event.currentTarget.value;
  newBtn.onclick = closeContent;
  newBlog.appendChild(newBtn);
  document.getElementsByTagName("body")[0].appendChild(newEl);
};


function closeContent (event){
  let findEl = document.getElementsByClassName("bg-body")[0];
  findEl.remove(findEl)

  // let removeContent = document.getElementsByTagName("body");
  // removeContent.remove();
}

// for (var i = Things.length - 1; i >= 0; i--) {
//   let img = createImg(myBlog[i]);
// };
// function createImg (props){
//   let newBlogImg = document.createElement("img");
//   newBlogImg.src = props.src;
//   return newBlogImg;
// }
// let newBlogImg = document.createElement("img");
// newBlogImg.classList.add("blog-content__img")
// newBlogImg.alt = myBlog[event.currentTarget.value]["altName"];
// newBlogCtr.appendChild(newBlogImg);










