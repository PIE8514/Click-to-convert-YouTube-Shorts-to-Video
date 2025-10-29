chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.includes("youtube.com/shorts/")) {
    const videoId = tab.url.split("/shorts/")[1].split("?")[0];
    const newUrl = `https://www.youtube.com/watch?v=${videoId}`;
    chrome.tabs.update(tab.id, { url: newUrl });
  } else {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => alert("This is not a Shorts URL.")
    });
  }
});