const inputList = document.querySelector(".input");
const tags = document.querySelectorAll(".tag");
const dropZone = document.querySelector(".drop-zone");

tags.forEach((tag) => {
  tag.addEventListener("dragstart",(event)=>{
    tag.classList.add("drag");
    event.dateTransfer.setDate("text",event.target.id);
  });
  tag.addEventListener("dragend",(event)=>{
    tag.classList.remove("drag");
  });
});

dropZone.addEventListener("dragover",(event) => {
  event.preventDefault();
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();

  const draggedElement = document.querySelector(".drag");

  if (draggedElement) {
    dragZone.appendChild(draggedElement);
  }
});


