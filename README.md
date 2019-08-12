## jQuery Lightbox

Lightboxes are a way to display an image on the same page simply and elegantly.

## Usage

Refer to the [demo](http://bevry-archive.github.io/jquery-lightbox/demo/) for usage instructions

## Options

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

## How to apply options?

There are two methods, one is through the link form, and the other is through the constructor.
Use the below examples to derive how it is used to hide the linkback, and translate "Image" to "Photo".

### Link method

```html
<script
	type="text/javascript"
	src="http://www.yoursite.com/some/where/jquery-lightbox/scripts/jquery.lightbox.min.js?show_linkback=false&amp;text.image=Photo"
></script>
```

### Constructor method

```html
<script
	type="text/javascript"
	src="http://www.yoursite.com/some/where/jquery-lightbox/scripts/jquery.lightbox.min.js"
></script>
<script type="text/javascript">
	$(function() {
		$.Lightbox.construct({
			show_linkback: false,
			text: {
				// For translating
				image: 'Image',
				of: 'of',
				close: 'Close X',
				closeInfo: 'You can also click anywhere outside the image to close.',
				download: 'Download.',
				help: {
					close: 'Click to close',
					interact: 'Hover to interact'
				},
				about: {
					text: 'jQuery Lightbox Plugin (balupton edition)',
					title: 'Licenced under the GNU Affero General Public License.',
					link: 'http://www.balupton.com/projects/jquery-lightbox'
				}
			}
		})
	})
</script>
```

## History

You can discover the history inside the [History.md](https://github.com/bevry-archive/jquery-lightbox/blob/master/History.md#files) file

## License

Licensed under the [MIT License](https://spdx.org/licenses/MIT.html)
<br/>Copyright &copy; 2007+ [Benjamin Arthur Lupton](http://balupton.com)

## Thanks

- [Warren Krewenki's jQuery Lightbox Plugin v0.5](http://jquery-lightbox.googlecode.com/)
- [Leandro Vieira Pinho's jQuery Lightbox Plugin v0.4](http://leandrovieira.com/projects/jquery/lightbox/)
- [Lokesh Dhakar's Lightbox 2](http://www.huddletogether.com/projects/lightbox2/)
