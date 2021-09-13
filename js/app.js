document.querySelectorAll(".box").forEach(box =>
  box.addEventListener("click", () => {
    box.classList.toggle("red")
    chrome.tabs.create({url: 'https://www.youtube.com'})
  })
)

$('click').click(function(){
  console.log("clic")
    chrome.tabs.create({url: 'https://www.youtube.com'})
  });
