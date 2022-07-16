// Calculating Likes
const like_btn = document.getElementById("like_btn");
let likes = 0;

like_btn.addEventListener("click", function() {
    // Adds a like
    likes = likes + 1;
    // FIX - to show this later in frontend
    display();
    calcPercentLikes(likes, dislikes)
});

const dislike_btn = document.getElementById("dislike_btn");
let dislikes = 0;

dislike_btn.addEventListener("click", function() {
    // Adds a dislike
    dislikes = dislikes + 1;
    // FIX - to show this later in frontend
    display();
    calcPercentLikes(likes, dislikes);
});

back_button_statistics.addEventListener("click", function() {
    document.getElementById("like_interface").style.display = "block";
    document.getElementById("statistics_interface").style.display = "none";
});

// Calculating percentage for likes
function calcPercentLikes() {
    percent_likes = likes / (likes + dislikes) * 100;
    percent_dislikes = dislikes / (likes + dislikes) * 100;
    return percent_likes;
}


function display() {
    document.getElementById("like_interface").style.display = "none";
    document.getElementById("statistics_interface").style.display = "block";
    document.getElementById("like_count").innerHTML = likes;
    document.getElementById("dislike_count").innerHTML = dislikes;
    alert(calcPercentLikes().toString());
    document.getElementById("like_ratio_1").setAttribute("offset", calcPercentLikes().toString());
    document.getElementById("like_ratio_2").setAttribute("offset", calcPercentLikes().toString());

}
