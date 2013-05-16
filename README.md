Shorten
=======

![jquery shorten plugin](http://img.viralpatel.net/2010/12/show-more-link.png "jquery shorten plugin")

A simple jquery plugin that automatically shortens text within an element and add "more" link.

*Read tutorial: [jQuery Shorten](http://viralpatel.net/blogs/dynamically-shortened-text-show-more-link-jquery/).*

Usage
-----
Shortens the text within 'element' and add a 'more' link.

    $(element).shorten();

Add a link with text 'read more' while shortening the content of element.

	$(element).shorten({
		moreText: 'read more'
	});

Change the link text to 'read more' and 'read less' overriding default value 'more' and 'less'.

	$(element).shorten({
		moreText: 'read more',
		lessText: 'read less'
	});

Override default display 100 characters and hide text above 50 characters.

	$(element).shorten({
		showChars: '50',
	});

Parameters
----------
You can change the behaviour by changing following js variables.

* `showChar`: Total characters to show to user. If the content is more then showChar, it will be split into two halves and first one will be showed to user.
* `ellipsesText`: The text displayed before “more” link. Default is “…”
* `moreText`: The text shown in more link. Default is “more”. You can change to ">>" or "read more"
* `lessText`: The text shown in less link. Default is “less”. You can change to "<<" or "read less"


Licence
-------

	Copyright 2013 Viral Patel and other contributors
	http://viralpatel.net

	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:

	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.