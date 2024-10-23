document.getElementById("submitBtn").addEventListener("click", function () {
  const nameInput = document.getElementById("name");
  const commentInput = document.getElementById("comment");
  let valid = true;

  nameInput.classList.remove("error");
  commentInput.classList.remove("error");

  if (nameInput.value.trim() === "") {
    nameInput.classList.add("error");
    valid = false;
  }

  if (commentInput.value.trim() === "") {
    commentInput.classList.add("error");
    valid = false;
  }

  if (valid) {
    document.getElementById("commentForm").style.display = "none";
    document.getElementById("success-message").style.display = "block";
  }
});
