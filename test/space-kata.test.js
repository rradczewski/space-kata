var should = require('chai').should();

describe('the line wrapping algorithm', function() {
	it('should return a one-element array for a single line', function() {
		// Given a single line
		var singleLine = "Hello World";
		
		// When
		var wrappedLines = wrap(singleLine, 80);
		
		// Expect
		wrappedLines.should.have.length(1);
	});

	it('should split a text with length exceeding the line width into parts', function() {
		// Given a long line with a break exactly at a space
		var twoLines = "Hello World, how are you?";
		
		// When
		var wrappedLines = wrap(twoLines, 14);

		// Expect
		wrappedLines.should.have.length(2);
		wrappedLines[0].should.equal('Hello World,');
		wrappedLines[1].should.equal('how are you?');
		
	});
});

function wrap(text, width) {
	if(text.length < width) 
		return [text];
	var lastSpace = text.lastIndexOf(' ', width);
	return [text.left(lastSpace)].concat(wrap(text.right(lastSpace+1), width));
}


describe('The string extensions', function() {
	it('should have a method left(length) returning the left potion of a string', function() {
		'Hello World'.left(5).should.equal('Hello');	
	});
	it('should have a method right(length) returning the right portion of a string', function() {
		'Hello World'.right(5).should.equal(' World');
	});

});

String.prototype.left = function left(width) {
	return this.substring(0, width);
}

String.prototype.right = function right(offset) {
	return this.substring(offset);
}


