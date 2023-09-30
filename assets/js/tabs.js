let tabcontent = document.getElementsByClassName("blanktabcontent");
let tablinks = document.getElementsByClassName("tablinks");

function openTab(evt, tabName) {
	let element;

	for (element of tabcontent) {
		element.style.display = "none";
	}

	for (element of tablinks) {
		element.className = element.className.replace("btn--primary", "btn--info");
		if (!element.className.includes('btn--info'))
			element.className += " btn--info";
	}

	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className = evt.currentTarget.className.replace("btn--info", "btn--primary");
}

// Remove links from tab buttons
for(a of tablinks) {
	a.href = "javascript:void(0);";
}

// Open the tab for the current OS
if(navigator.platform.includes("Win")) {
	if(document.getElementById("windows"))
		document.getElementById("windows").click();
	else
		document.getElementById("other").click();

} else if(navigator.platform.includes("Mac")) {
	if(document.getElementById("macos"))
		document.getElementById("macos").click();
	else
		document.getElementById("other").click();
} else {
	document.getElementById("other").click();
}
