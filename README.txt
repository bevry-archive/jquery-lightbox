----
/**
 * jQuery Lightbox Plugin (balupton edition) - Lightboxes for jQuery
 * Copyright (C) 2007-2010 Benjamin Arthur Lupton
 * http://jquery.com/plugins/project/jquerylightbox_bal
 *
 * Permission is granted to copy, distribute and/or modify this document
 * under the terms of the GNU Free Documentation License, Version 1.2
 * or any later version published by the Free Software Foundation;
 * with no Invariant Sections, no Front-Cover Texts, and no Back-Cover
 * Texts.  A copy of the license is included in the section entitled "GNU
 * Free Documentation License".
 *
 * @name jquery_lightbox: jquery.lightbox.js
 * @package jQuery Lightbox Plugin (balupton edition)
 * @version v1.3.10-dev
 * @date June 29, 2010
 * @category jQuery plugin
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2007-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 * @license GNU Free Documentation License - {@link http://www.gnu.org/licenses/fdl.html}
 * @example Visit {@link http://jquery.com/plugins/project/jquerylightbox_bal} for more information.
 */
----

Installation:
Upload the jquery_lightbox directory to somewhere on your webserver, then include the following into your webpages html head:
	<!-- Include jQuery (Lightbox Requirement) -->
	<script type="text/javascript" src="jquery_lightbox/scripts/jquery-1.4.2.min.js"></script>
	<!-- Include Lightbox (Production) -->
	<script type="text/javascript" src="jquery_lightbox/scripts/jquery.lightbox.min.js"></script>
adjusting the src locations appropriately.

Usage:
Refer to (index.html) or (http://www.balupton.com/sandbox/jquery_lightbox/) if (index.html) does not exist.

For more information:
Refer to the source code of (index.html) or (http://www.balupton.com/sandbox/jquery_lightbox/) if (index.html) does not exist.

Support:
http://plugins.jquery.com/project/issues/jquerylightbox_bal

----

Options:

	Name: show_helper_text
	Description: Should we show the helper text / hint ("Click to close, Hover to interact")
	Values:
	  true (default)       - Yes
	  false                - No
	  
	Name: show_info
	Description: Should we force the show of the image information?
	Values:
	  "auto" (default)     - It should be handled automatically on rollover
	  true                 - It should be forced to show
	  
	Name: show_extended_info
	Description: Should we force the show of the extended image information?
	Values:
	  "auto" (default)     - It should be handled automatically on rollover
	  true                 - It should be forced to show
	  
	Name: download_link
	Description: Should we show the image download link?
	Values:
	  true (default)       - Yes
	  false                - No
	  
	Name: auto_resize
	Description: Should we auto resize the image if it is too big?
	Values:
	  true (default)       - Yes
	  false                - No
	  
	Name: colorBlend
	Description: Should we support colorBlend?
	Values:
	  null (default)       - Enabled only if colorBlend is already detected
	  true                 - Include colorBlend and enable
	  false                - Don't support colorBlend
	
	Name: ie6_support
	Description: Should we support IE6
	Values:
	  true (default)       - Support IE6
	  false                - Ignore IE6
	
	Name: show_linkback
	Description: Show or hide the linkback up the top right corner
	Values:
	  true (default)       - Show the linkback
	  false                - Hide the linkback
	
	Name: auto_scroll
	Description: How should scrolling be handled?
	Values:
	  "follow" (default)   - Scroll with the user
	  "disabled"           - Don't allow scrolling
	  "ignore"             - Don't care for scrolling (leave lightbox at original position)
	
	Name: speed
	Description: The total amount of milliseconds it takes to perform transitions between images.
	Values:
	  400 (default)        - Take 400 milliseconds
	  integer              - Amoung in milliseconds
	
	Name: baseurl
	Description: The baseurl to use to auto include the required files
	Values:
	  null (default)       - Autodetect
	  string               - A string of the manual baseurl to use
			
	Name: files
	Description: The javascript object that contains the locations of the requred files, used if you have renamed files.
	Children: js.lightbox, js.colorBlend, css.lightbox, images.prev, images.next, images.blank, images.loading
	
	Name: text
	Description: The javascript object that contains the text of various parts of the interface, used if you want to do translations.
	Children: image, of, close, closeInfo, download, help.close, help.interact, about.text, about.title, about.link
	
	Name: keys
	Description: The javascript object that contains the key allocations for shortcuts, used if you want to remap the shortcuts
	Children: close, prev, next
	
	Name: opacity
	Description: The opacity of the overlay
	Values:
	  0.9 (default)        - 90% opacity
	  decimal value        - opacity percentage in decimal form
	
	Name: padding
	Description: The padding around the image, if you are using a custom padding you want to adjust this
	Values:
	  null (default)       - Autodetect
	  integer              - the integer amount of the padding
	
	Name: rel
	Description: What to look for in the rel tag of links and images to detect if it should have a lightbox
	Values:
	  "lightbox" (default) - Look for rel="lightbox" by default
	  string               - What to lookfor
	
	Name: auto_relify
	Description: Should we do an initial rel scan to automatically detect lightboxes?
	Values:
	  true (default)       - Yes we should
	  false                - No we shouldn't

----

How to apply options?

	There are two methods, one is through the link form, and the other is through the constructor.
	Use the below examples to derive how it is used to hide the linkback, and translate "Image" to "Photo".
	
	Link method:
		<script type="text/javascript" src="jquery_lightbox/scripts/jquery.lightbox.min.js?show_linkback=false&amp;text.image=Photo"></script>
		
	Constructor method:
		<script type="text/javascript" src="jquery_lightbox/scripts/jquery.lightbox.min.js"></script>
		<script type="text/javascript">$(function(){
			$.Lightbox.construct({
				show_linkback:	false,
				text: {
					image:		'Photo'
				}
			});
		});</script>
		
	
----

Changelog:

v1.3.10-dev (June 29, 2009)
- Fixed up $.console, was causing issues in chrome

v1.3.9-dev (June 27, 2009)
- js to scripts, css to styles
- We now use google closure for js, and yui compressor for css
- Added Makefile to handle compression
- Removed ie6_upgrade option - it was intrusive
- Updated to jQuery v1.4.2
- Fixed "Image NaN of X" issue
- Fixed download link still working even on download_link=false - jsma http://bit.ly/beuoBD

v1.3.8-dev
- Clean of $.Lightbox.images

v1.3.7-final (April 25, 2009)
- Fixed typos in readme
- Fixed greedy unbinds
- Fixed info hover repeating
- Added show_helper_text option

v1.3.6-final (March 08, 2009)
- Fixed Firebug Conflict: http://plugins.jquery.com/node/3983
- jQuery 1.3 support
- Minified rather than packed (following jQuery 1.3 standards)
	- We now detect if we are compressed or not, and will automatically include the correct files
- Demo is now a subset, rather than the parent
- Logging has been updated to support advanced firebug abilities
    - Uses alert if console.error is not available

v1.3.5-final (September 15, 2008)
- Fixed packer problem with websites using a non-standard charset
    credits to mckeephoto, snorri: http://plugins.jquery.com/node/3983
    
v1.3.4-final (September 12, 2008)
- Fixed problem with show_extended_info not working
    credits to c_t: http://plugins.jquery.com/node/3954

v1.3.3-final (September 10, 2008)
- Fixed non firefox console error

v1.3.2-final (September 10, 2008)
- Fixed debugging on special instances.
- Corrected scroll option, now use 'auto_scroll'.
- Added the following options: auto_resize, download_link, show_info, show_extended_info, 
    credits to jUser: http://plugins.jquery.com/node/3729
    credits to beachroby: http://plugins.jquery.com/node/3767
    credits to Feedback: http://plugins.jquery.com/node/3683
- Now uses jresig's color plugin instead of the colorBlend plugin
    credits to jresig: http://plugins.jquery.com/project/color
- ColorBlend feature now also changes border color

v1.3.1-rc1 (August 24, 2008)
- Repack

v1.3.0-rc1 (August 24, 2008)
- Added colorBlend support, so if used, the background-color of the overlay will be that of the image.
    colorBlend's page: http://plugins.jquery.com/project/colorBlend
    credits to bobcatt (http://www.menfin.net/): http://plugins.jquery.com/node/3311
    example by bobcatt (http://www.menfin.net/): http://www.menfin.net/Exposition-Game-On.html
- IE6 support is now back
    Upgrade message is optional with the "ie6_upgrade" option
    IE6 support is optional with the "ie6_support" option
    reported by xzjia: http://plugins.jquery.com/node/3411
- If the image is too big for the window, it is resized - also applies when resizing the window
    credits to ssaki, Viper007Bond: http://plugins.jquery.com/node/2191
- "scroll" option is now set to "follow" by default, and a new mode "disabled" has been added.
- Made it so that the image title is now a link to the image so that the image can be downloaded.
- Refer to the readme.txt for how to use options and what they do.
- Resize and reposition code has been redone, along with some of the showImage code.
- Many more tweaks and changes, this is a huge release.

v1.2.1-final (August 1, 2008)
- Made it easier to apply options.files - No longer have to modifiy the js location within the jquery.lightbox.js file
    reported by dec: http://plugins.jquery.com/node/3191
- Fixed safari CSS bug
    reported by rgnelson and noYet: http://plugins.jquery.com/node/3254 , http://plugins.jquery.com/node/3314
- Fixed XP IE7 double flash bug
    reported by sashabe and sheshnjak: http://plugins.jquery.com/node/1804

v1.2.0-final (July 11, 2008)
- Added support for the following options:
    ['baseurl', 'files', 'text', 'show_linkback', 'keys', 'opacity', 'padding', 'speed', 'rel', 'auto_relify', 'scroll_with']
- Can specify options like so:
    jquery_lightbox/js/jquery.lightbox.js?show_linkback=false&amp;text.image=Translation%20of%20Image
    or
    $.Lightbox.construct({'show_linkback':false,'text':{'image':'Translation of Image'}}); // resets the lightbox
    or
    $.Lightbox.construct({'speed':900}); // does not reset the lightbox
- Added the ability for the "show" handler, for details see:
    http://plugins.jquery.com/node/3103
- Added the option scroll_with, when true, the lightbox will scroll with the page, to use:
    jquery_lightbox/js/jquery.lightbox.js?scroll_with=true
- Cut support for IE6 due to my belief that the IE6 userbase do not care for lightboxes.
    If you do wish for lightboxes to be enabled for IE6 users, then use v1.0.1-final.
    Users of IE6 will have lightboxes disabled, and be shown a upgrade message courtesy of
    http://www.savethedevelopers.org/
- Added support for name attribute in images array.

v1.1.2-final (May 04, 2008)
- Fixed imported css never caching

v1.1.1-final (April 07, 2008)
- Smoothed effects, especially initial lightbox show effect

v1.1.0-final (April 06, 2008)
- Added ability to remove the linkback (add "?show_linkback=false")
    http://plugins.jquery.com/node/1348
- Added ability to manually specify the baseurl
    reported by crollmm: http://plugins.jquery.com/node/1878
- Fixed overlay problem not resizing correctly (fixed by adding position:fixed;)
    reported by pendergrass: http://plugins.jquery.com/node/1330
- Fixed a new lightbox not displaying in center when the old lightbox contained a image of the same size
    reported by pendergrass: http://plugins.jquery.com/node/1331
- Fixed escape key not working in opera
    reported by FredXY: http://plugins.jquery.com/node/1883

v1.0.1-final (January 9, 2008)
* Includes an improvement to the baseurl calculation for the auto-include of required files
* Now works under special circumstances for when an appendix is included to the js file, such as wordpress installations.
* Credits to Pedro "ei99070" Lamas for the fix: http://plugins.jquery.com/node/1199

v1.0.0-final (December 31, 2007)
* Improved Lightbox Positioning, now animates to the center of the screen
* Updated prev next images to include notation for keyboard shortcuts
* Added preloading of lightbox required images
* Added keyboard navigation notation to prev and next images
* Fixed an overlay problem with IE
* Fixed an overlay problem with Safari
* Improved padding detection
* - If the padding setting is set, then it is not auto-detected
* - Moved padding detection to later on, fixes a display issue with Konqueror 3.5. (Credits to Blueyed).
* Added some "help" text
* Cleaned file structure
* Refined licencing
* - Now uses the GNU Affero General Public License and the GNU Free Documentation License
* Added a linkback as required by the GNU Affero General Public License

v0.2.3-final (December 19, 2007)
* improved packing
* - original:  35.71KB total, 25.4KB js, 4.77KB css, 5.54KB images
* - packed:    15.12KB total, 7.67KB js, 1.91KB css, 5.54KB images
* htm: fix: changed src to href in common examples
* js: fixed issue when using the same images in a lightbox group
* js/css: added lightbox-enabled css class for elements that are lightbox enabled
* sample images: reduced the amount of them, as they used up all my bandwidth!

v0.2.2-beta (December 5, 2007)
* added packed files
* - original:  35.71KB total, 25.4KB js, 4.77KB css, 5.54KB images
* - packed:    20.15KB total, 12.7KB js, 1.91KB css, 5.54KB images
* js: jsLint compliance
* htm: added info for packed form

v0.2.1-beta (December 5, 2007)
* index.htm: Fixed demonstration code for example "Manually create grouped lightboxes.".

v0.2.0-beta (December 4, 2007)
* Greedy elements are now properly hidden
* New / Optimized Lightbox Design
* Added support for descriptions
* All new example and documentation page

v0.1.0-dev (December 3, 2007)
* Initial Release

----

Known Issues:

XHTML Incompatiable: An invalid or illegal string was specified
See: http://plugins.jquery.com/node/1392

----

Special Thanks / Based upon / Inspired by / Credits to:
- Warren Krewenki's jQuery Lightbox Plugin v0.5 {@link http://jquery-lightbox.googlecode.com/}
- Leandro Vieira Pinho's jQuery Lightbox Plugin v0.4 {@link http://leandrovieira.com/projects/jquery/lightbox/}
- Lokesh Dhakar's Lightbox 2 {@link http://www.huddletogether.com/projects/lightbox2/}

----