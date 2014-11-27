var should = require('chai').should();
var wrap = require('../lib/wrap');

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
		// Given a long text with a break exactly at a space
		var twoLines = "Hello World, how are you?";
		
		// When
		var wrappedLines = wrap(twoLines, 14);

		// Expect
		wrappedLines.should.have.length(2);
		wrappedLines[0].should.equal('Hello World,');
		wrappedLines[1].should.equal('how are you?');
	});


	it('a word should not be broken into chunks. Instead move it to the next line', function() {
		// Given a long text with a break in a word
		var twoLines = "Hello World, how are you?";
		
		// When
		var wrappedLines = wrap(twoLines, 8);

		// Expect
		wrappedLines.forEach(function(line) { line.should.have.length.below(9); })
		
		wrappedLines[0].should.equal('Hello');
		wrappedLines[1].should.equal('World,');
		wrappedLines[2].should.equal('how are');
		wrappedLines[3].should.equal('you?');
	});

	it('a word with a dash can be broken into two parts with the dash staying intact', function() {
		// Given a long text with a word before break with a dash
		var twoLines = "Hello So-called-world, how are you?";

		// When
		var wrappedLines = wrap(twoLines, 18);

		// Expect
		wrappedLines.forEach(function(line) { line.should.have.length.below(18); });

		wrappedLines[0].should.equal('Hello So-called-');
		wrappedLines[1].should.equal('world, how are');
		wrappedLines[2].should.equal('you?');
	});
});








describe('The string extensions', function() {
	it('should have a method left(length) returning the left potion of a string', function() {
		'Hello World'.left(5).should.equal('Hello');	
	});
	it('should have a method right(length) returning the right portion of a string', function() {
		'Hello World'.right(5).should.equal(' World');
	});

});
