function wrap(text, width) {
	if(text.length < width) 
		return [text];
	var lastSpace = text.lastIndexOf(' ', width);
	var lastDash = text.lastIndexOf('-', width-1);

	var leftPart, rightPart;

	if(lastSpace > lastDash) {
		leftPart = text.left(lastSpace);
		rightPart = text.right(lastSpace+1);
	} else {
		leftPart = text.left(lastDash)+'-';
		rightPart = text.right(lastDash+1);
	}

	return [leftPart].concat(wrap(rightPart, width));
}


String.prototype.left = function left(width) {
	return this.substring(0, width);
}

String.prototype.right = function right(offset) {
	return this.substring(offset);
}

module.exports = wrap;