const editProfileOpenBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const newPostBtn = document.querySelector(".profile__add-btn");

editProfileOpenBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_opened");
});
