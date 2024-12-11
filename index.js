let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let submitBtn = document.getElementById("submitBtn");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");

function addBookMark() {
    let sitename = siteNameInput.value;
    let siteurl = siteUrlInput.value;
    let items = document.createElement("li");
    bookmarksList.appendChild(items);
    let bookmarkname = document.createElement("p");
    let bookmarkurl = document.createElement("a");
    bookmarkname.textContent = sitename;
    bookmarkurl.textContent = siteurl;
    bookmarkurl.href = siteurl;
    bookmarkurl.setAttribute("target", "_blank");
    bookmarksList.classList.toggle("d-none");
    items.appendChild(bookmarkname);
    items.appendChild(bookmarkurl);
}
siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
})
siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
})
bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addBookMark();
})