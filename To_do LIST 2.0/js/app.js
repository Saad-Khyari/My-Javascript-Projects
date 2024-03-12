const todos = [
  {
    tag: "Shopping",
    text: "Go to grocery store to pick items.",
    time: "12:30pm",
    status: "Complete",
  },
  {
    tag: "Sports",
    text: "Go for a quick 5k run.",
    time: "1:30pm",
    status: "Incomplete",
  },
  {
    tag: "Education",
    text: "Study for my midterm exam.",
    time: "2:30pm",
    status: "Incomplete",
  },
  {
    tag: "Food",
    text: "Get a quick slice of pizza.",
    time: "3:30pm",
    status: "Incomplete",
  },
  {
    tag: "Party",
    text: "Go to club for claras party.",
    time: "8:30pm",
    status: "Incomplete",
  },
  {
    tag: "Game",
    text: "Play xbox with james later.",
    time: "12:30pm",
    status: "Incomplete",
  },
  {
    tag: "Sports",
    text: "Go for a quick sparring session.",
    time: "12:30pm",
    status: "Incomplete",
  },
  {
    tag: "Hygiene",
    text: "Brush my teeth and take my shower.",
    time: "12:30pm",
    status: "Incomplete",
  },
];

const tagsColor = (tags) => {
  let color = null;

  switch (tags) {
    case "Shopping":
      color = "clI";
      break;
    case "Sports":
      color = "clII";
      break;
    case "Education":
      color = "clIII";
      break;
    case "Food":
      color = "clIV";
      break;
    case "Flower":
      color = "clI";
      break;
    case "Hygiene":
      color = "clIII";
      break;

    default:
      color = "clV";
      break;
  }

  return color;
};

const tagsBg = (tags) => {
  let bg = null;

  switch (tags) {
    case "Shopping":
      bg = "bgI";
      break;
    case "Sports":
      bg = "bgII";
      break;
    case "Education":
      bg = "bgIII";
      break;
    case "Food":
      bg = "bgIV";
      break;
    case "Flower":
      bg = "bgI";
      break;
    case "Hygiene":
      bg = "bgIII";
      break;

    default:
      bg = "bgV";
      break;
  }

  return bg;
};

const tagsIcon = (tags) => {
  let tag = null;

  switch (tags) {
    case "Shopping":
      tag = ` <svg
      xmlns="http://www.w3.org/2000/svg"
      class="row__svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2"
      />
    </svg>`;
      break;
    case "Sports":
      tag = `<svg xmlns="http://www.w3.org/2000/svg" class="row__svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4"><path d="M36 15a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"/><path stroke-linecap="round" stroke-linejoin="round" d="m12 16.77l8.003-2.772L31 19.247l-10.997 8.197L31 34.684l-6.992 9.314M35.32 21.643l2.682 1.459L44 17.466M16.849 31.545l-2.97 3.912l-9.875 5.54"/></g></svg>`;
      break;
    case "Education":
      tag = `<svg xmlns="http://www.w3.org/2000/svg" class="row__svg" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="m3.096.577l5.91-.003v2.303l-5.91.003a1.25 1.25 0 0 1-.742-.243l-.958-.707a.25.25 0 0 1 0-.402L2.355.82a1.25 1.25 0 0 1 .74-.244Zm8.343 2.298l-1.183.001V.573h1.187c.634.01 1.119.573 1.119 1.15c0 .578-.485 1.142-1.119 1.152zm-5.931 2.31c.335.134.62.281.867.427V14a5.47 5.47 0 0 0-1.24-.7c-.735-.294-1.795-.537-3.412-.537a.5.5 0 0 1-.5-.5V5.075a.5.5 0 0 1 .5-.5c1.72 0 2.91.259 3.785.61M8.864 13.3c-.54.217-.919.466-1.24.699V5.612c.247-.146.533-.293.868-.427c.875-.351 2.065-.61 3.785-.61a.5.5 0 0 1 .5.5v7.188a.5.5 0 0 1-.5.5c-1.617 0-2.677.243-3.413.538Z" clip-rule="evenodd"/></svg>`;
      break;
    case "Food":
      tag = `<svg xmlns="http://www.w3.org/2000/svg" class="row__svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.51 12.48a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-4.48a1 1 0 1 0 1 1a1 1 0 0 0-1-1M12 10a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1m8.5-1.43a3 3 0 0 0-2.3-.29a2.9 2.9 0 0 0-1.09.56L5.51 2.13a1 1 0 0 0-1 0A1 1 0 0 0 4 3v13.17A2.94 2.94 0 0 0 2 19a3 3 0 0 0 2.92 3h.58a18.57 18.57 0 0 0 16.11-9.41a3 3 0 0 0-1.1-4.02ZM6 4.73l9.89 5.71A12.57 12.57 0 0 1 6 16Zm13.87 6.88A16.58 16.58 0 0 1 5 20a1 1 0 0 1-1-1a1 1 0 0 1 .3-.72A1 1 0 0 1 5 18h.51a14.5 14.5 0 0 0 12.62-7.37a.9.9 0 0 1 .58-.44a1 1 0 0 1 .75.09a1 1 0 0 1 .42 1.33Z"/></svg>`;
      break;
    case "Game":
      tag = `<svg xmlns="http://www.w3.org/2000/svg" class="row__svg" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M19.444 9.361c-.882-4.926-2.854-6.379-3.903-6.379c-1.637 0-2.057 1.217-5.541 1.258c-3.484-.041-3.904-1.258-5.541-1.258c-1.049 0-3.022 1.453-3.904 6.379c-.503 2.812-1.049 7.01.252 7.514c1.619.627 2.168-.941 3.946-2.266C6.558 13.266 7.424 12.95 10 12.95s3.442.316 5.247 1.659c1.778 1.324 2.327 2.893 3.946 2.266c1.301-.504.755-4.701.251-7.514M6 10a2 2 0 1 1 0-4a2 2 0 0 1 0 4m7 0a1 1 0 1 1 0-2a1 1 0 1 1 0 2m2-2a1 1 0 1 1 0-2a1 1 0 1 1 0 2" clip-rule="evenodd"/></svg>`;
      break;
    case "Hygiene":
      tag = `<svg xmlns="http://www.w3.org/2000/svg" class="row__svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M9.928 7.272H4.89a3.358 3.358 0 0 0-3.358 3.358v9.236a3.358 3.358 0 0 0 3.358 3.358h5.038a3.358 3.358 0 0 0 3.359-3.358V10.63a3.358 3.358 0 0 0-3.359-3.358"/><path d="M16.488 14.572a2.992 2.992 0 0 0 3.085-4.962a4.967 4.967 0 0 0-7.215-6.698a2.983 2.983 0 0 0-5.844.863m13.961 18.452a1.994 1.994 0 1 0 0-3.987a1.994 1.994 0 0 0 0 3.987M7.514 13.254v3.988M5.52 15.249h3.988"/></g></svg>`;
      break;
    default:
      tag = `<svg xmlns="http://www.w3.org/2000/svg" class="row__svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m15.91 4.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.11 0-2 .89-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59c.55 0 1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41c0-.56-.23-1.06-.59-1.42"/></svg>`;
      break;
  }

  return tag;
};

const gridCard = (tag, text, time) => {
  const color = tagsColor(tag);
  const icon = status ==="Incomplete" ? `<i class="fa fa-check-circle-o" aria-hidden="true"></i>`
  :`<i class="fa fa-circle-o" aria-hidden="true"></i>`

  return `<div class="row__card ${color}">
  <p class="icon__area">
    <i class="fa fa-minus-circle" aria-hidden="true"></i>
    <i class="fa fa-check-circle" aria-hidden="true"></i>
  </p>
  <div class="row__tag">
    ${tagsIcon(tag)}
  </div>
  <div class="row__text">
    ${text}
  </div>
  <p class="row__time">${time}</p>
</div>`;
};

const colCard = (tag, text, time) => {
  const color = tagsBg(tag);

  return `<div class="col__card">
  <div class="col__tag ${color}">
    ${tagsIcon(tag)}
  </div>
  <div class="col__text">${text}</div>
  <div class="col__time">${time}</div>
  <p class="icon__area">
    <i class="fa fa-minus-circle" aria-hidden="true"></i>
    <i class="fa fa-check-circle" aria-hidden="true"></i>
  </p>
</div>`;
};

const toggleGrid = () => {
  const ROW__ITEMS = document.querySelector(".row__items");
  ROW__ITEMS.innerHTML = "";
  ROW__ITEMS.style.flexDirection = "row";
  ROW__ITEMS.style.alignItems = "center";

  todos.map(
    (todo) => (ROW__ITEMS.innerHTML += gridCard(todo.tag, todo.text, todo.time))
  );
};

const toggleList = () => {
  const ROW__ITEMS = document.querySelector(".row__items");
  ROW__ITEMS.innerHTML = "";
  ROW__ITEMS.style.flexDirection = "column";
  ROW__ITEMS.style.alignItems = "unset";

  todos.map(
    (todo) => (ROW__ITEMS.innerHTML += colCard(todo.tag, todo.text, todo.time))
  );
};

const toggleForm = () => {
  const FLOAT__CARD = document.querySelector(".float__card");
  const BODY = document.body;
  FLOAT__CARD.style.display = "flex";
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  BODY.style.overflow = "hidden";
};

const closeForm = () => {
  const FLOAT__CARD = document.querySelector(".float__card");
  const BODY = document.body;
  FLOAT__CARD.style.display = "none";
  BODY.style.overflow = "unset";
};

const toggleMode = () => {
  const mode = localStorage.getItem("mode");
  if (mode === null || mode === undefined || mode === "light") {
    localStorage.setItem("mode", "dark");
    document.documentElement.style.setProperty("--cl-black", "#fff");
    document.documentElement.style.setProperty("--cl-white", "#000");
    document.documentElement.style.setProperty(
      "--cl-grey",
      "rgba(0, 0, 0, 92%)"
    );
    document.documentElement.style.setProperty("--cl-gray", "#333");
  } else {
    localStorage.setItem("mode", "light");
    document.documentElement.style.setProperty("--cl-black", "#000");
    document.documentElement.style.setProperty("--cl-white", "#fff");
    document.documentElement.style.setProperty(
      "--cl-grey",
      "rgba(255, 255, 255, 92%)"
    );
    document.documentElement.style.setProperty("--cl-gray", "#eee");
  }
};

window.addEventListener("load", () => {
  console.log("Documents loaded");

  const ROW__ITEMS = document.querySelector(".row__items");

  todos.map(
    (todo) => (ROW__ITEMS.innerHTML += gridCard(todo.tag, todo.text, todo.time))
  );
});
