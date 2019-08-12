# History

Master

-   Corrected for new repository location at https://github.com/bevry-archive/jquery-lightbox
-   Corrected inconsistent licensing information
-   Moved resources that are available via CDN to their CDN locations
-   Replaced the demo's usage of yui-reset with normalize
-   Removed resources that are no longer relevant from the demo (Google Analystics, PayPal, Get Satisfaction)
-   Moved from the Makefile to `package.json` scripts, as the Makefile used Closure and YUI Minifier for compression, which require Java which I do not wish to install
-   Prettified the source code
-   Added the relevant [Bevry base files](https://github.com/bevry/base)

v1.4.9-final, August 21, 2010

-   Updated jQuery Sparkle dependencies to [v1.4.17-final, August 21, 2010]

v1.4.8-final, August 19, 2010

-   Fixed double click issue. http://getsatisfaction.com/balupton/topics/lightbox_locks_the_screen_when_thumbs_are_double_clicked
-   Improved installation instructions to make more clear.
-   Code blocks within the demo are now using PRE instead of CODE elements due to an IE bug.
-   Updated jQuery Sparkle dependencies to [v1.4.14-final, August 19, 2010]

v1.4.7-final, August 16, 2010

-   Updated Syntax Highlighter include and initialisation. We use https://balupton.com/projects/jquery-syntaxhighlighter

v1.4.6-final, July 28, 2010

-   Updated licensing information. Still using the same license, as it is the best there is, but just provided some more information on it to make life simpler.
-   Converted old changelog formatting to the new changelog formatting.
-   Removed an ancient known issue from the readme as it was fixed ages ago. There are no known issues.

v1.4.5-beta, July 12, 2010

-   Fixed \$.console undefined - As we now use window.console
-   Fixed jquery.lightbox[.min].js being included twice

v1.4.4-beta, July 10, 2010

-   Fixed translate about link to new one
-   Fixed changelog dates
-   Improved demo and readme to say somewhere on your website, rather than your websites root/home folder.

v1.4.3-beta, July 09, 2010

-   Fixed left and right keyboard buttons
-   Added Checklist
-   Updated sparkle dependencies
-   Fixed some typos with the documentation. And added link to the wordpress plugin at the top (as well as bottom).
-   Updated linkback and other similar links to balupton site, rather than github site

v1.4.2-beta, June 29, 2010

-   Forgot to remake

v1.4.1-beta, June 29, 2010

-   Documentation links now point to correct new locations
-   Fixed incorrect demo header
-   Added support link to demo page

v1.4.0-beta, June 29, 2010

-   Fixed up \$.console, was causing issues in chrome
-   Updated demo for use with new style. Removed adsense.
-   Essentially 1.3.9-dev with one fix and nicer demo.

v1.3.9-dev, June 27, 2010

-   js to scripts, css to styles
-   We now use google closure for js, and yui compressor for css
-   Added Makefile to handle compression
-   Removed ie6_upgrade option - it was intrusive
-   Updated to jQuery 1.4.2
-   Fixed "Image NaN of X" issue
-   Fixed download link still working even on download_link=false - jsma http://bit.ly/beuoBD

v1.3.8-dev, ???

-   Clean of \$.Lightbox.images

v1.3.7-final, April 25, 2009

-   Fixed typos in readme
-   Fixed greedy unbinds
-   Fixed info hover repeating
-   Added show_helper_text option

v1.3.6-final, March 08, 2009

-   Fixed Firebug Conflict: http://plugins.jquery.com/node/3983
-   jQuery 1.3 support
-   Minified rather than packed (following jQuery 1.3 standards) - We now detect if we are compressed or not, and will automatically include the correct files
-   Demo is now a subset, rather than the parent
-   Logging has been updated to support advanced firebug abilities
    -   Uses alert if console.error is not available

v1.3.5-final, September 15, 2008

-   Fixed packer problem with websites using a non-standard charset
    credits to mckeephoto, snorri: http://plugins.jquery.com/node/3983

v1.3.4-final, September 12, 2008

-   Fixed problem with show_extended_info not working
    credits to c_t: http://plugins.jquery.com/node/3954

v1.3.3-final, September 10, 2008

-   Fixed non firefox console error

v1.3.2-final, September 10, 2008

-   Fixed debugging on special instances.
-   Corrected scroll option, now use 'auto_scroll'.
-   Added the following options: auto_resize, download_link, show_info, show_extended_info,
    credits to jUser: http://plugins.jquery.com/node/3729
    credits to beachroby: http://plugins.jquery.com/node/3767
    credits to Feedback: http://plugins.jquery.com/node/3683
-   Now uses jresig's color plugin instead of the colorBlend plugin
    credits to jresig: http://plugins.jquery.com/project/color
-   ColorBlend feature now also changes border color

v1.3.1-rc1, August 24, 2008

-   Repack

v1.3.0-rc1, August 24, 2008

-   Added colorBlend support, so if used, the background-color of the overlay will be that of the image.
    colorBlend's page: http://plugins.jquery.com/project/colorBlend
    credits to bobcatt (http://www.menfin.net/): http://plugins.jquery.com/node/3311
    example by bobcatt (http://www.menfin.net/): http://www.menfin.net/Exposition-Game-On.html
-   IE6 support is now back
    Upgrade message is optional with the "ie6_upgrade" option
    IE6 support is optional with the "ie6_support" option
    reported by xzjia: http://plugins.jquery.com/node/3411
-   If the image is too big for the window, it is resized - also applies when resizing the window
    credits to ssaki, Viper007Bond: http://plugins.jquery.com/node/2191
-   "scroll" option is now set to "follow" by default, and a new mode "disabled" has been added.
-   Made it so that the image title is now a link to the image so that the image can be downloaded.
-   Refer to the readme.txt for how to use options and what they do.
-   Resize and reposition code has been redone, along with some of the showImage code.
-   Many more tweaks and changes, this is a huge release.

v1.2.1-final, August 1, 2008

-   Made it easier to apply options.files - No longer have to modifiy the js location within the jquery.lightbox.js file
    reported by dec: http://plugins.jquery.com/node/3191
-   Fixed safari CSS bug
    reported by rgnelson and noYet: http://plugins.jquery.com/node/3254 , http://plugins.jquery.com/node/3314
-   Fixed XP IE7 double flash bug
    reported by sashabe and sheshnjak: http://plugins.jquery.com/node/1804

v1.2.0-final, July 11, 2008

-   Added support for the following options:
    ['baseurl', 'files', 'text', 'show_linkback', 'keys', 'opacity', 'padding', 'speed', 'rel', 'auto_relify', 'scroll_with']
-   Can specify options like so:
    jquery_lightbox/js/jquery.lightbox.js?show_linkback=false&amp;text.image=Translation%20of%20Image
    or
    $.Lightbox.construct({'show_linkback':false,'text':{'image':'Translation of Image'}}); // resets the lightbox
    or
    $.Lightbox.construct({'speed':900}); // does not reset the lightbox
-   Added the ability for the "show" handler, for details see:
    http://plugins.jquery.com/node/3103
-   Added the option scroll_with, when true, the lightbox will scroll with the page, to use:
    jquery_lightbox/js/jquery.lightbox.js?scroll_with=true
-   Cut support for IE6 due to my belief that the IE6 userbase do not care for lightboxes.
    If you do wish for lightboxes to be enabled for IE6 users, then use 1.0.1-final.
    Users of IE6 will have lightboxes disabled, and be shown a upgrade message courtesy of
    http://www.savethedevelopers.org/
-   Added support for name attribute in images array.

v1.1.2-final, May 04, 2008

-   Fixed imported css never caching

v1.1.1-final, April 07, 2008

-   Smoothed effects, especially initial lightbox show effect

v1.1.0-final, April 06, 2008

-   Added ability to remove the linkback (add "?show_linkback=false")
    http://plugins.jquery.com/node/1348
-   Added ability to manually specify the baseurl
    reported by crollmm: http://plugins.jquery.com/node/1878
-   Fixed overlay problem not resizing correctly (fixed by adding position:fixed;)
    reported by pendergrass: http://plugins.jquery.com/node/1330
-   Fixed a new lightbox not displaying in center when the old lightbox contained a image of the same size
    reported by pendergrass: http://plugins.jquery.com/node/1331
-   Fixed escape key not working in opera
    reported by FredXY: http://plugins.jquery.com/node/1883

v1.0.1-final, January 9, 2008

-   Includes an improvement to the baseurl calculation for the auto-include of required files
-   Now works under special circumstances for when an appendix is included to the js file, such as wordpress installations.
-   Credits to Pedro "ei99070" Lamas for the fix: http://plugins.jquery.com/node/1199

v1.0.0-final, December 31, 2007

-   Improved Lightbox Positioning, now animates to the center of the screen
-   Updated prev next images to include notation for keyboard shortcuts
-   Added preloading of lightbox required images
-   Added keyboard navigation notation to prev and next images
-   Fixed an overlay problem with IE
-   Fixed an overlay problem with Safari
-   Improved padding detection
    -   If the padding setting is set, then it is not auto-detected
    -   Moved padding detection to later on, fixes a display issue with Konqueror 3.5. (Credits to Blueyed).
-   Added some "help" text
-   Cleaned file structure
-   Refined licencing
-   -   Now uses the GNU Affero General Public License and the GNU Free Documentation License
-   Added a linkback as required by the GNU Affero General Public License

v0.2.3-final, December 19, 2007

-   improved packing
    -   original: 35.71KB total, 25.4KB js, 4.77KB css, 5.54KB images
    -   packed: 15.12KB total, 7.67KB js, 1.91KB css, 5.54KB images
-   htm: fix: changed src to href in common examples
-   js: fixed issue when using the same images in a lightbox group
-   js/css: added lightbox-enabled css class for elements that are lightbox enabled
-   sample images: reduced the amount of them, as they used up all my bandwidth!

v0.2.2-beta, December 5, 2007

-   added packed files
    -   original: 35.71KB total, 25.4KB js, 4.77KB css, 5.54KB images
    -   packed: 20.15KB total, 12.7KB js, 1.91KB css, 5.54KB images
-   js: jsLint compliance
-   htm: added info for packed form

v0.2.1-beta, December 5, 2007

-   index.htm: Fixed demonstration code for example "Manually create grouped lightboxes.".

v0.2.0-beta, December 4, 2007

-   Greedy elements are now properly hidden
-   New / Optimized Lightbox Design
-   Added support for descriptions
-   All new example and documentation page

v0.1.0-dev, December 3, 2007

-   Initial Release
