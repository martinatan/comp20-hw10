var request = new XMLHttpRequest();

request.open('GET',"https://www.rijksmuseum.nl/api/nl/collection?key=b5GMxwfd&involvedMaker=Vincent+van+Gogh");

request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
	console.log(parsedData);

	for (i = 0; i < parsedData.artObjects.length; i++) {
		var work = document.createElement('div');
		work.setAttribute('id', i);

		document.getElementById('works').appendChild(work);

		var titleOfWork = parsedData.artObjects[i].longTitle;
		var paintings = document.createElement('li');

		var imgUrl = parsedData.artObjects[i].webImage.url;
		var images = document.createElement('img');

		paintings.innerHTML = titleOfWork

		images.setAttribute('src', imgUrl);

		document.getElementById(i).appendChild(images);

		document.getElementById(i).appendChild(paintings);
	}

}

request.send();