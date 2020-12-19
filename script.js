const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEL = document.getElementById("website-name");
const websiteUrlEL = document.getElementById("website-url");
const bookmarksContainer = document.getElementById("bookmarks-container");

// Show Modal, Focus on input
function showModal() {
  modal.classList.add("show-modal");
  websiteNameEL.focus();
}

// Event Listners
modalShow.addEventListener("click", showModal);
modalClose.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});
window.addEventListener("click", (e) => {
  e.target == modal ? modal.classList.remove("show-modal") : false;
});
