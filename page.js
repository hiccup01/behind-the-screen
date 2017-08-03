var FactBubble = require("./FactBubble.svelte");
var testbubble = new FactBubble({
	target: document.querySelector('test'),
	data: {
		content: "maybe"
	}
})