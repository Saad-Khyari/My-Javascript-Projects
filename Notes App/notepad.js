const noteCon= document.querySelector(".notes-container");
const createBtn= document.querySelector(".btn");
let notes= document.querySelectorAll(".input-box");
//this function allow user to display the notes after saving it
function showNotes(){
    noteCon.innerHTML=localStorage.getItem("notes");
}
showNotes();
//this function allow user to update notes
function updateStorage(){
    localStorage.setItem("notes",noteCon.innerHTML);
}

//will clicking on the button this event allow to create a paragraph which is content editable
createBtn.addEventListener("click", ()=>{
    let inputBox= document.createElement("p");
    let img = document.createElement("img");
    inputBox.className= "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src= "img/delete-file.png";
    noteCon.appendChild(inputBox).appendChild(img);

})
//this event allow us to delete the content by clicking on the delete icon inside the paragraph box
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
