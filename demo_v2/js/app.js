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
const cardTemplate = (title, src, action)=>{
  return`<div class= "card__wrapper">
      <img src=${src} alt="nature bg" class= "back__ground" />
        <div class="card__content">
          <h2>${title}</h2>
           <button class="crad__btn">${action}</button>
        </div>
  </div>`};

  const Slider= (title, src) =>{
 return  `
 <div class="content__slider">
 <h1 class="content__title">${title}</h1>
 <span class="close" title="close">&#x2715;</span>
 <div class="slider__imgs">
   <img src="${src}" alt="${title}" class="photo__items active" />
 </div>
 <button class="f-btn float next">>></button>
 <button class="f-btn float prev"><<</button>
</div>`
  };
window.addEventListener("load", () => {

  const content = document.querySelector(".content__items");
for(var i = 0 ; i<=categories.length;i++){
  
  content.innerHTML += cardTemplate(categories[i].title, categories[i].src, categories[i].action);

}

});

window.addEventListener("click", (btn) => {

  
    const images = sliderElement.querySelectorAll('.slider__imgs img');
    let currentIndex = 0;
  
    const showImage = (index) => {
      images.forEach((image, i) => {
        if (i === index) {
          image.classList.add('active');
        } else {
          image.classList.remove('active');
        }
      });
    };
  
    const nextImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    };
  
    const prevImage = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    };
  
    const closeButton = sliderElement.querySelector('.close');
    closeButton.addEventListener('click', () => {
      sliderElement.parentElement.removeChild(sliderElement);
    });
  
    const nextButton = sliderElement.querySelector('.next');
    nextButton.addEventListener('click', nextImage);
  
    const prevButton = sliderElement.querySelector('.prev');
    prevButton.addEventListener('click', prevImage);
  
    showImage(currentIndex);
  
    return sliderElement;
  });
  

