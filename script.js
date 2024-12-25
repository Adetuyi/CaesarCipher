const encodeBtn = document.querySelector('#encodeBtn');
const decodeBtn = document.querySelector('#decodeBtn');

encodeBtn.addEventListener('click', () => {
	encode();
});
decodeBtn.addEventListener('click', () => {
	decode();
});

function encode() {
	const inputText = document.getElementById('inputText').value;
	const key = parseInt(document.getElementById('key').value);
	let outputText = '';

	for (let i = 0; i < inputText.length; i++) {
		const charCode = inputText.charCodeAt(i);

		if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
			// Letters
			let shiftedCharCode = charCode + key;
			if ((shiftedCharCode > 90 && shiftedCharCode < 97) || shiftedCharCode > 122) {
				shiftedCharCode -= 26;
			}
			outputText += String.fromCharCode(shiftedCharCode);
		} else if (charCode >= 48 && charCode <= 57) {
			// Numbers
			let shiftedCharCode = charCode + key;
			if (shiftedCharCode > 57) {
				shiftedCharCode -= 10;
			}
			outputText += String.fromCharCode(shiftedCharCode);
		} else {
			// Non-alphanumeric characters
			outputText += inputText.charAt(i);
		}
	}

	document.getElementById('outputText').value = outputText;
}

function decode() {
	const inputText = document.getElementById('inputText').value;
	const key = parseInt(document.getElementById('key').value);
	let outputText = '';

	for (let i = 0; i < inputText.length; i++) {
		const charCode = inputText.charCodeAt(i);

		if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
			// Letters
			let shiftedCharCode = charCode - key;
			if (shiftedCharCode < 65 || (shiftedCharCode > 90 && shiftedCharCode < 97)) {
				shiftedCharCode += 26;
			}
			outputText += String.fromCharCode(shiftedCharCode);
		} else if (charCode >= 48 && charCode <= 57) {
			// Numbers
			let shiftedCharCode = charCode - key;
			if (shiftedCharCode < 48) {
				shiftedCharCode += 10;
			}
			outputText += String.fromCharCode(shiftedCharCode);
		} else {
			// Non-alphanumeric characters
			outputText += inputText.charAt(i);
		}
	}

	document.getElementById('outputText').value = outputText;
}
