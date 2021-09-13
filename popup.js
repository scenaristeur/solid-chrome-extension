// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log("tab", tab)
  console.log("chrome", chrome)
  console.log("click")
  //https://stackoverflow.com/questions/65476451/cannot-read-property-executescript-of-undefined

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  console.log("page bg")
  chrome.storage.sync.get("color", ({ color }) => {
    console.log("color", color)
    document.body.style.backgroundColor = color;
  //  document.body.style.color = color;
    console.log("document", document)
  });
}
