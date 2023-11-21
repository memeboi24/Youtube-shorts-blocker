// background.js

let popupWindowId;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "showPopup") {
    chrome.windows.create(
      {
        url: "popup.html",
        type: "popup",
        width: 300,
        height: 150,
      },
      (window) => {
        popupWindowId = window.id;
        setTimeout(() => {
          chrome.windows.remove(popupWindowId);
        }, 3000);
      }
    );
  }
});
