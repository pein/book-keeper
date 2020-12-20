const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEL = document.getElementById("website-name");
const websiteUrlEL = document.getElementById("website-url");
const bookmarksContainer = document.getElementById("bookmarks-container");

let bookmarks = [];
// Show Modal, Focus on input
function showModal() {
  modal.classList.add("show-modal");
}

// Validate form
function validate(nameValue, urlValue) {
  const expresion = /(?:http[s]?\/\/)?(?:[\w\-]+(?::[\w\-]+)?@)?(?:[\w\-]+\.)+(?:[a-z]{2,4})(?::[0-9]+)?(?:\/[\w\-\.%]+)*(?:\?(?:[\w\-\.%]+=[\w\-\.%!]+&?)+)?(#\w+\-\.%!)?/g;
  const regex = new RegExp(expresion);
  if (!nameValue || !urlValue) {
    alert("Please submit valid vlues for both fields");
    return false;
  }
  if (!urlValue.match(regex)) {
    alert("Enter  a valid url");
    return false;
  }

  return true;
}

// Fetch bookmarks fro; localStorage
function fetchBookmarks() {
  if (localStorage.getItem("bookmarks")) {
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    console.log("local storage 333", localStorage.getItem("bookmarks"));
  } else {
    bookmarks = [{ name: "Zero toMastery", url: "http://werotomastery.io" }];
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    console.log("local storage 2222", localStorage.getItem("bookmarks"));
  }
}
// Handel Data from form
function storebookmark(e) {
  e.preventDefault();
  const nameValue = websiteNameEL.value;
  let urlValue = websiteUrlEL.value;
  if (!urlValue.includes("http://", "https://")) {
    urlValue = `https://${urlValue}`;
  }
  if (!validate(nameValue, urlValue)) {
    return false;
  }

  const bookmark = {
    name: nameValue,
    url: urlValue,
  };

  bookmarks.push(bookmark);
  console.log(bookmarks);
  fetchBookmarks();
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  bookmarkForm.reset();
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

bookmarkForm.addEventListener("submit", storebookmark);

// On Load
fetchBookmarks();
