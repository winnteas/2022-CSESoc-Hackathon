// Calculating Likes
const likeBtn = document.getElementById("likeBtn");
let likes = 0;

likeBtn.addEventListener("click", function() {
    // Adds a like
    likes = likes + 1;
    alert(likes)
});

const dislikeBtn = document.getElementById("dislikeBtn");
let dislikes = 0;

dislikeBtn.addEventListener("click", function() {
    // Adds a dislike
    dislikes = dislikes + 1;
    alert(dislikes);
});
