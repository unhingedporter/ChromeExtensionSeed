var gotMessage = function (message, sender, sendResponse) {

  console.log(message + sender + sendResponse);

};

chrome.runtime.onMessage.addListener(gotMessage);


var listTable = function () {

  var allTables = $('table');

  if (allTables.length > 0) {

    jQuery.each(allTables, function (index, key) {
      console.log(jQuery(key).tableToJSON());
    });
  }

};
setInterval(listTable, 1500);
