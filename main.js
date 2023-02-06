let Lis = document.querySelectorAll("li");
let imgs = document.querySelectorAll("img");


Lis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImages);
});

function removeActive() {
    Lis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

function manageImages() {
    imgs.forEach((img) => {
        img.style.display = "none"
    })

    document.querySelectorAll(this.dataset.work).forEach((element) => {
        element.style.display = "block";
    });
}