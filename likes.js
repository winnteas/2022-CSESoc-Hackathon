// Calculating Likes
const likeBtn = document.getElementById("likeBtn");
let likes = 0;

likeBtn.addEventListener("click", function() {
    // Adds a like
    likes = likes + 1;
    // FIX - to show this later in frontend
    alert(likes)
    calcPercentLikes(likes, dislikes)
});

const dislikeBtn = document.getElementById("dislikeBtn");
let dislikes = 0;

dislikeBtn.addEventListener("click", function() {
    // Adds a dislike
    dislikes = dislikes + 1;
    // FIX - to show this later in frontend
    alert(dislikes);
    calcPercentLikes(likes, dislikes);
});

// Calculating percentage for likes
function calcPercentLikes(likes, dislikes) {
    percent_likes = likes / (likes + dislikes) * 100;
    percent_dislikes = dislikes / (likes + dislikes) * 100;
    alert("The percentage of likes is: " + percent_likes + ".\nThe percentage of dislikes is: " + percent_dislikes + ".")
}