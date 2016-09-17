function createCORSRequest(method, url) {
	
	var xhr = new XMLHttpRequest();
	
	if ("withCredentials" in xhr) {
	    // XHR for Chrome/Firefox/Opera/Safari.
	    xhr.open(method, url, true);
	} else if (typeof XDomainRequest != "undefined") {
	    // XDomainRequest for IE.
	    xhr = new XDomainRequest();
	    xhr.open(method, url);
	} else {
	    // CORS not supported.
	    xhr = null;
	}
	  return xhr;
}

function getJsonDataFromUrl(finalUrl, fn_success, fn_error) {
	
	// This is a sample server that supports CORS.
	var xhr = createCORSRequest('GET', finalUrl);
	if (!xhr) {
	    alertify.error('CORS not supported');
	    return;
	}

	xhr.onload = function(data) {
	    var jsonData = JSON.parse(xhr.responseText);
	    fn_success(jsonData);
	  };

	xhr.onerror = function(data) {
	    alertify.error(error);
	};

	xhr.send();
}