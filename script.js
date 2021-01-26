
const contents = document.querySelector(".contents");
const more = document.querySelector("#more");
const less = document.querySelector("#less")

// Event listeners
more.addEventListener("click", first);
less.addEventListener('click', second);

// Event handlers
function first(){
    this.style.display = "none";
    less.style.display = "inline";
    contents.classList.add("show");
}
function second(){
    this.style.display = "none";
    more.style.display = "inline";
    contents.classList.remove("show");
}

