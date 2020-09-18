window.addEventListener("DOMContentLoaded", function () {
    let btn = document.createElement("button");
    btn.innerHTML = "Click Button";
    document.body.appendChild(btn);

    let container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);

    btn.addEventListener("click", function (){
      let div = document.createElement ("div")
    div.classList.add("square")

    container.appendChild(div)



  
    })

    
    
})
