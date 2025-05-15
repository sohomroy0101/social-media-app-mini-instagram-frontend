function likePost(button) {
  if (button.textContent === "Like") {
    button.textContent = "Liked";
    button.style.color = "red";
  } else {
    button.textContent = "Like";
    button.style.color = "black";
  }
}

function postComment(button) {
  const commentBox = button.previousElementSibling;
  const commentText = commentBox.value.trim();
  const commentsDiv = button.nextElementSibling;

  if (commentText !== "") {
    const commentElement = document.createElement("p");
    commentElement.textContent = commentText;
    commentsDiv.appendChild(commentElement);
    commentBox.value = "";
  } else {
    alert("Please enter a comment.");
  }
}