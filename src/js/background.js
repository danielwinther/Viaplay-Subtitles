chrome.runtime.onInstalled.addListener(function(details) {
	if(details.reason == 'install'){
		chrome.storage.sync.set({'spectrum_background': 'black', 'spectrum_text': 'white'});
	}
});