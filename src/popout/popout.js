
console.log("background js is running");


var btnClicked = (tab) => {
  console.log("button clicked");
  console.log("Tab entered" + tab);
  console.log("event " + event);
};


chrome.browserAction.onClicked.addListener(btnClicked);