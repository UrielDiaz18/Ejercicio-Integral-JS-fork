const likeBtn = document.getElementById("likeBtn");
const likecounter = document.getElementById("likeCounter");
let count=0;

export function countlikes(){
    likeBtn.addEventListener("click", () => {
        count++;
        likecounter.textContent = count;
    });
}