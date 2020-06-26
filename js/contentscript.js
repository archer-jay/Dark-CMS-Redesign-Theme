const styleReset = document.createElement('link')
styleReset.rel = "stylesheet"
styleReset.type = "text/css"
styleReset.href = chrome.runtime.getURL('normalize.css');

const styleBulk = document.createElement('link')
styleBulk.rel = "stylesheet"
styleBulk.type = "text/css"
styleBulk.href = chrome.runtime.getURL('dark-nord-theme-bulk-updater.css');

const style = document.createElement('link')
style.rel = "stylesheet"
style.type = "text/css"
style.href = chrome.runtime.getURL('NordDark.css');

console.log(style.href);
document.body.appendChild(styleReset);
document.body.appendChild(styleBulk);
document.body.appendChild(style);