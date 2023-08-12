const noteCon= document.querySelector(".notes-container");
const createBtn= document.querySelector(".btn");
let notes= document.querySelectorAll(".input-box");

function showNotes(){
    noteCon.innerHTML=localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes",noteCon.innerHTML);
}


createBtn.addEventListener("click", ()=>{
    let inputBox= document.createElement("p");
    let img = document.createElement("img");
    inputBox.className= "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src= "img/delete-file.png";
    noteCon.appendChild(inputBox).appendChild(img);

})
noteCon.addEventListener("click", function(e){
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})