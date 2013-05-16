/*
 * jQuery Shorten plugin 1.0.0
 *
 * Copyright (c) 2013 Viral Patel
 * http://viralpatel.net
 *
 * Dual licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

 (function($) {
	$.fn.shorten = function (settings) {
	
		var config = {
			showChars: 100,
			ellipsesText: "...",
			moreText: "more",
			lessText: "less"
		};

		if (settings) {
			$.extend(config, settings);
		}
		
		$(document).off("click", '.morelink');
		
		$(document).on({click: function () {

				var $this = $(this);
				if ($this.hasClass('less')) {
					$this.removeClass('less');
					$this.html(config.moreText);
					$this.parent().prev().prev().show(); // shortcontent
					$this.parent().prev().hide(); // allcontent
  	
				} else {
					$this.addClass('less');
					$this.html(config.lessText);
					$this.parent().prev().prev().hide(); // shortcontent
					$this.parent().prev().show(); // allcontent
				}
				return false;
			}
		}, '.morelink');

    return this.each(function () {
        var $this = $(this);

        var content = $this.html();
        if (content.length > config.showChars) {
            var c = content.substr(0, config.showChars);
            if (c.indexOf('<') >= 0) // If there's HTML don't want to cut it
            {
                var inTag = false; // I'm in a tag?
                var bag = ''; // Put the characters to be shown here
                var countChars = 0; // Current bag size
                var openTags = []; // Stack for opened tags, so I can close them later

                for (i = 0; i < content.length; i++) {
                    if (content[i] == '<' && !inTag) {
                        inTag = true;

                        // This could be "tag" or "/tag"
                        tagName = content.substring(i + 1, content.indexOf('>', i));

                        // If its a closing tag
                        if (tagName[0] == '/') {
                            if (tagName != '/' + openTags[0]) console.log('ERROR en HTML: the top of the stack should be the tag that closes');
                            else
                                openTags.shift(); // Pops the last tag from the open tag stack (the tag is closed in the retult HTML!)
                        } else {
                            // There are some nasty tags that don't have a close tag like <br/>
                            if (tagName.toLowerCase() != 'br')
                                openTags.unshift(tagName); // Add to start the name of the tag that opens
                        }
                    }
                    if (inTag && content[i] == '>') {
                        inTag = false;
                    }

                    if (inTag) bag += content[i]; // Add tag name chars to the result
                    else {
                        if (countChars < config.showChars) {
                            bag += content[i];
                            countChars++;
                        } else // Now I have the characters needed
                        {
                            if (openTags.length > 0) // I have unclosed tags
                            {
                                //console.log('They were open tags');
                                //console.log(openTags);
                                for (j = 0; j < openTags.length; j++) {
                                    //console.log('Cierro tag ' + openTags[j]);
                                    bag += '</' + openTags[j] + '>'; // Close all tags that were opened

                                    // You could shift the tag from the stack to check if you end with an empty stack, that means you have closed all open tags
                                }
                                break;
                            }
                        }
                    }
                }
                c = bag;
            }

            var html = '<span class="shortcontent">' + c + '&nbsp;' + config.ellipsesText +
                '</span><span class="allcontent">' + content +
                '</span>&nbsp;&nbsp;<span><a href="javascript://nop/" class="morelink">' + config.moreText + '</a></span>';

            $this.html(html);
            $(".allcontent").hide(); // Esconde el contenido completo para todos los textos
        }
    });
		
	};

 })(jQuery);
