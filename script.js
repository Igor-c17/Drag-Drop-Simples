const boxes = document.querySelectorAll(".box")
const image = document.querySelector(".image");

//Loop trough each boxes element 
boxes.forEach(box => {
  //whhen a dragrable element dragged over a box element
  box.addEventListener("dragover", (e) => {
    e.preventDefault(); //Prevent default behavior
    box.classList.add("hovered");
  });

  //whhen a dragrable element leaves box element
  box.addEventListener("dragleave", () => {
    box.classList.remove("hovered");
  });

  //whhen a dragrable element is dropped on a box element
  box.addEventListener("drop", () => {
    box.appendChild(image);
    box.classList.remove("hovered")
  })
})