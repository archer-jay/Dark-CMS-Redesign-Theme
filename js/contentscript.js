const styleBulk = document.createElement('link')
styleBulk.rel = "stylesheet"
styleBulk.type = "text/css"
styleBulk.href = chrome.runtime.getURL('dark-nord-theme-bulk-updater.css');

const style = document.createElement('link')
style.rel = "stylesheet"
style.type = "text/css"
style.href = chrome.runtime.getURL('NordDark.css');

console.log(style.href);
document.body.appendChild(styleBulk);
document.body.appendChild(style);