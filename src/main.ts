import data from './links';

let keysToUrls: { [key: string]: string } = {};
let match = "";

// Create HTML structure
let mainContainer = document.createElement("div");
mainContainer.className = "container";

for (let category_key in data) {
	let categoryContainer = document.createElement("div");
	let title = document.createElement("h2");
	title.className = 'title';
	let node = document.createTextNode(category_key);
	title.appendChild(node);
	categoryContainer.appendChild(title);

	let elementList = document.createElement("ul");
	categoryContainer.appendChild(elementList);

	for (let element_key in data[category_key]) {
		let element = document.createElement("li");

		let _el = data[category_key][element_key]
		let a = document.createElement("a");
		a.href = _el.url;
		a.target = "_blank";
		a.rel = "noopener";
		let key = document.createElement("span");
		key.innerHTML = element_key;
		key.className = "key";
		key.id = element_key;
		a.appendChild(key);
		let span = document.createElement("span");
		span.innerHTML = _el.name;
		span.className = "link";
		a.appendChild(span);
		element.appendChild(a);
		elementList.appendChild(element);

		if (keysToUrls[element_key]) {
			console.log("Duplicated key : " + element_key);
		}
		keysToUrls[element_key] = _el.url;
	}
	mainContainer.appendChild(categoryContainer);
}

document.body.appendChild(mainContainer);

// Shortcuts code
document.addEventListener("keypress", function onPress(event) {
	let pressed = event.key;
	let code = event.charCode;
	if (pressed === "Enter") {
		if (keysToUrls[match]) {
			// Ensure we don't open focused element
			document.getElementsByTagName("body")[0].focus();
			window.open(keysToUrls[match]);
		}
		match = "";
	} else if ((code > 47 && code < 58) ||
	           (code > 64 && code < 91) ||
	           (code > 96 && code < 123)) {
		match = match.concat(event.key.toLowerCase());
		console.log(match);
		if (keysToUrls[match]) {

		}
	}
});
