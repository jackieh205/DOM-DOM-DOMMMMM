window.addEventListener("DOMContentLoaded", function () {
  let btn = document.createElement("button");
  btn.innerHTML = "Add Square";
  document.body.appendChild(btn);

let squareCounter=1  

  let container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  btn.addEventListener("click", function () {
    let div = document.createElement("div")
    div.classList.add("square")
    div.style.display = "inline-block"
    
  div.id= squareCounter
  squareCounter ++

  div.innerHTML = div.id
    
    container.appendChild(div)

    
    

  
    })

    

})
