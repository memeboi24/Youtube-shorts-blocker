function checkAndRedirect() {
  if (window.location.href.includes("https://www.youtube.com/shorts")) {
    chrome.runtime.sendMessage({ message: "showPopup" });
    setTimeout(() => {
      window.location.href = "https://www.youtube.com";
    }, 3000);
  }
}

// Check and redirect initially
checkAndRedirect();

// Set up a timer to check and redirect every 10 seconds
setInterval(checkAndRedirect, 10000);
