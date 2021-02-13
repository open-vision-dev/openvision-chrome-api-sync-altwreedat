chrome.runtime.onInstalled.addListener(function() {
    window.alert("Open  Vision Updater installed successfully");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'localhost:8000/'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });