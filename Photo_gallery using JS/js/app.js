const categories = [
  {
    id: 1,
    title: "Nature",
    src: "./imgs/1.jpg",
    action: "more photos",
  },
  {
    id: 2,
    title: "People",
    src: "./imgs/7.jpg",
    action: "more photos",
  },
  {
    id: 3,
    title: "Portraits",
    src: "./imgs/5.jpg",
    action: "more photos",
  },
  {
    id: 4,
    title: "Animal",
    src: "./imgs/6.jpg",
    action: "more photos",
  },
  {
    id: 5,
    title: "Sports",
    src: "./imgs/8.jpg",
    action: "more photos",
  },
  {
    id: 6,
    title: "Technology",
    src: "./imgs/9.jpg",
    action: "more photos",
  },
  {
    id: 7,
    title: "Travel",
    src: "./imgs/4.jpg",
    action: "more photos",
  },
  {
    id: 8,
    title: "Architecture",
    src: "./imgs/2.jpg",
    action: "more photos",
  },
  {
    id: 9,
    title: "People",
    src: "./imgs/5.jpg",
    action: "more photos",
  },
];

let index = 1;
const modalCard = (title, src) => {
  // the statement below temporarily stops the page from scrolling
  document.body.style.overflow = "hidden";
  //   the statement below allows the page to scroll back up so as to see the modal pop up
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   the variable below stores out modal html elements
  const modal = `<div class="content__float">
    <div class="content__slider">
      <h1 class="content__title">${title}
      <span class="close" title="close">&#x2715;</span>
      </h1>
      <div class="slider__imgs">
      
      </div>
      <button class="f-btn float next">>></button>
      <button class="f-btn float prev"><<</button>
    </div>
  </div>`;
  //   the statements below places the modal variable that holds the modal html elements inside the body before the closing tag of the body. if you use innerHTML for this, it works only one time and after that, all events in the page wont work anymore, unless the page is refreshed.
  document.body.insertAdjacentHTML("beforeend", modal);
  const float = document.querySelector(".content__float");
  const close = document.querySelector(".close");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");
  embedImages(src);

  next.addEventListener("click", () => {
    change((index += 1));
  });

  prev.addEventListener("click", () => {
    change((index -= 1));
  });

  if (close)
    close.addEventListener("click", () => {
      float.remove();
      document.body.style.overflow = "unset";
    });
};

const change = (i) => {
  const slides = document.querySelectorAll(".photo__items");
  if (i > slides.length) {
    index = 1;
  }
  if (i < 1) {
    index = slides.length;
  }

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index - 1].classList.add("active");
};

const embedImages = (src) => {
  const imgs = document.querySelector(".slider__imgs");
  [
    ...categories.filter((category) => category.src === src),
    ...categories.filter((category) => category.src !== src),
  ].map((cat) => {
    const img = document.createElement("img");
    img.src = cat.src;
    img.alt = `${cat.title} bg`;
    img.classList.add("photo__items");
    imgs.append(img);
  });
  const photo = document.querySelector(".photo__items");
  photo.classList.add("active");
};

// // method one as ffor displaying contents

// // function that returns html elements
// const cardTemplate = (title, src, action) => {
//   return `<div class="card__wrapper">
//     <img src=${src} alt="${title} bg" class="back__ground" />
//     <div class="card__content">
//       <h2>${title}</h2>
//       <button class="card__btn">${action}</button>
//     </div>
//   </div>`;
// };

// window.addEventListener("load", () => {
//   // get a reference to the parent element
//   const contentItems = document.querySelector(".content__items");
//   console.log("Page loaded.. Proceed to displaying contents.");
//   // displaying content via method one
//   //   map the array of objects and for every item, supply the args to function then add
//   // to innerHTML of the parent
//   categories.map(
//     (category) =>
//       (contentItems.innerHTML += cardTemplate(
//         category.title,
//         category.src,
//         category.action
//       ))
//   );
// });

// another method
window.addEventListener("load", () => {
  // get reference to the parent elements and store in a variable
  const contentItems = document.querySelector(".content__items");
  console.log("Page loaded.. Proceed to displaying contents.");
  // map the array of objects and for each item, create neccessary element
  categories.map((category) => {
    // create div for card__wrapper
    const cardWrapper = document.createElement("div");
    // add classname to the new div. class name is card__wrapper as declared in the css
    cardWrapper.classList.add("card__wrapper");
    // create an img element
    const img = document.createElement("img");
    // add the src. the src is available from the item that is currently being looped
    img.src = category.src;
    // add the alt attrubute by concatenating the title and bg
    img.alt = `${category.title} bg`;
    // add the class so that the css can take effect
    img.classList.add("back__ground");
    // then create another div as shown in the card template.
    const cardContent = document.createElement("div");
    // the class of the div is card__content as labelled
    cardContent.classList.add("card__content");
    // then create an h2 element fot the title
    const h2 = document.createElement("h2");
    // add the title from the current category in the loop
    h2.textContent = category.title;
    // create a button element
    const button = document.createElement("button");
    // add a class to the btn as described
    button.classList.add("card__btn");
    // display the text that will appear on the button
    button.textContent = category.action;
    // addd event listener to the button created, so that when the user clicks, the modal is displayed
    button.addEventListener("click", () => {
      modalCard(category.title, category.src);
    });

    // append
    cardContent.append(h2, button);
    cardWrapper.append(img, cardContent);
    contentItems.append(cardWrapper);
  });
});
