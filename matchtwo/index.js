function init() {
    let root = document.getElementById("root");
    
    let grid = document.createElement("div");
    grid.className="grid";

    root.appendChild(grid);

    let containers = [];

    for (var i = 0; i < 64; i++) {
        let container = document.createElement("div");
        container.className = "container";
        containers.push(container);
        
        let front = document.createElement("div");
        let back = document.createElement("div");
        container.appendChild(front);
        container.appendChild(back);

        front.textContent = "X";
        front.className = "tile";

        back.textContent = "Y";
        back.className = "tile-back";
        grid.appendChild(container);

        container.addEventListener("click", ((c) => 
            (e) => {
                if (c.style.transform == "rotateY(180deg)") {
                    c.style.transform = "rotateY(0deg)";
                } else {
                    c.style.transform = "rotateY(180deg)";
                }
        })(container));
    }
}

init();