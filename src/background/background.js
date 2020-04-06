console.log("background js is running");


var btnClicked = function (tab) {
    chrome.tabs.sendMessage(tab.id, { "msg": "hello world" });
    console.log("button clicked");
    console.log("Tab entered" + tab);

};


chrome.browserAction.onClicked.addListener(btnClicked);