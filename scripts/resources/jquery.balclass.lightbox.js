/**
 * jQuery Lightbox Plugin (balupton edition) - Lightboxes for jQuery
 * Copyright (C) 2007-2010 Benjamin Arthur Lupton
 * http://github.com/balupton/jquery-lightbox
 *
 * This file is part of jQuery Lightbox (balupton edition).
 * 
 * jQuery Lightbox (balupton edition) is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * jQuery Lightbox (balupton edition) is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with jQuery Lightbox (balupton edition).  If not, see <http://www.gnu.org/licenses/>.
 *
 * @name jquery_lightbox: jquery.lightbox.js
 * @package jQuery Lightbox Plugin (balupton edition)
 * @version v2.0.0-dev
 * @date July 09, 2010
 * @category jQuery plugin
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2007-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 * @license GNU Affero General Public License - {@link http://www.gnu.org/licenses/agpl.html}
 * @example Visit {@link http://github.com/balupton/jquery-lightbox} for more information.
 */

// Start of our jQuery Plugin
(function($)
{	// Create our Plugin function, with $ as the argument (we pass the jQuery object over later)
	// More info: http://docs.jquery.com/Plugins/Authoring#Custom_Alias
	
	/**
	 * Lightbox Support
	 */
	if ( $.browser.msie && parseInt($.browser.version,10) <= 6 ) {
		return false;
	}
	
	/**
	 * Alias for $.fn.data but with HTML5 data attribute support
	 * @version 1.0.0
	 * @date August 14, 2010
	 * @since 1.0.0, August 14, 2010
	 * @package jquery-sparkle {@link http://www.balupton/projects/jquery-sparkle}
	 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
	 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
	 * @license GNU Affero General Public License version 3 {@link http://www.gnu.org/licenses/agpl-3.0.html}
	 */
	$.fn.Data = function(key,value){
		// Prepare
		var $this = $(this);
		
		// Handle
		if ( typeof value === 'undefined' ) {
			// Get
			value = $this.data(key);
			if ( value === null || typeof value === 'undefined' ) {
				value = $this.attr('data-'+key);
				if ( typeof value === 'string' && value.substring(0,1) === '{' ) {
					value = $.parseJSON(value);
				}
				$this.data(key,value);
			}
			return value;
		}
		else {
			// Set
			$this.data(key,value);
			$this.attr('data-'+key,null);
		}
		
		// Chain
		return this;
	}
	
	/**
	 * Lightbox
	 */
	$.Lightbox = $.Lightbox || {
		
		// -----------------
		
		/**
		 * Configuration
		 */
		config: {
			/**
			 * Default Configuration
			 */
			"default": {
				/**
				 * Whether or not to use the title of the lightbox to link to the (download/view) location of the item
				 */
				autoTitleLink: true,
				
				/**
				 * How should extra large items be handled?
				 */
				cropMode: ['resize','scroll','dragscroll'],
				
				/**
				 * How should page resizes be handled?
				 */
				resizeMode: ['resize'],
				
				/**
				 * Should we display the linkback back to the Author of the Lightbox?
				 */
				linkback: true,
				
				/**
				 * The title description seperator to use.
				 */
				titleDescriptionSeperator: '|',
				
				/**
				 * The HTML configuration to use for our Lightbox
				 */
				html: {
					overlay: '<div id="lightbox-overlay"></div>',
					lightbox: '<div class="lightbox-box">\
							<div class="lightbox-close"></div>\
							<div class="lightbox-controls"></div>\
							<div class="lightbox-loading"></div>\
							<div class="lightbox-title"></div>\
							<div class="lightbox-description"></div>\
							<div class="lightbox-contentwrap">\
								<div class="lightbox-content"></div>\
							</div>\
						</div>',
					linkback: '<a id="lightbox-linkback" href="" title=""></a>'
				},
				
				/**
				 * The text used within our lightbox
				 */
				text: {
					positionBefore: '',
					positionBetween: '/',
					positionAfter: '',
					
					closeButtonTitle: 'Close this Item and return to your page',
					nextButtonTitle: 'View the Next Item',
					prevButtonTitle: 'View the Previous Item',
					
					untitled: 'Untitled',
					defaultTitleLinkTitle: 'View this Item by Itself',
					
					linkbackText: 	'jQuery Lightbox',
					linkbackTitle:	'Get this free Lightbox effect on your website!',
					linkbackLink:	'http://www.balupton.com/projects/jquery-lightbox'
				},
				
				/**
				 * File Locations used for Autodetection of includes
				 */
				files: {
					compressed: {
						scripts: {
							lightbox:	'scripts/jquery.lightbox.min.js'
						},
						styles: {
							lightbox:	'styles/jquery.lightbox.min.css'
						}
					},
					uncompressed: {
						scripts: {
							lightbox:	'scripts/jquery.lightbox.js'
						},
						styles: {
							lightbox:	'styles/jquery.lightbox.css'
						}
					},
					images: {
						prev:		'images/prev.gif',
						next:		'images/next.gif',
						blank:		'images/blank.gif',
						blank:		'images/close.gif',
						loading:	'images/loading.gif'
					}
				},
				
				/**
				 * Keys for Interaction (in addition to the arrow keys)
				 */
				keys: {
					close:	'c',
					prev:	'p',
					next:	'n'
				}
			},
			
			/**
			 * Locales
			 */
			"en": {
				// No change
			}
		},
		
		// -----------------
		// Items
		
		createItem: function(input){
			// Prepare
			var Lightbox = $.Lightbox,
				config = Lightbox.config["default"];
			
			// Create item
			var	item = null;
			$.each(Lightbox.Extensions,function(i,Extension){
				item = Extension.createItem.apply(Extension,[{
					'Lightbox':Lightbox,
					'Extension':Extension,
					'el':input
				}]);
				if ( item ) {
					item.extension = item.type = Extension.code;
					item.title = item.title || config.text.untitled;
					if ( !item.description ) {
						// Prepare
						var regex = RegExp('^([^\\'+config.titleDescriptionSeperator+']+)\\'+config.titleDescriptionSeperator+'([^\\'+config.titleDescriptionSeperator+']+)$');
						var result = regex.exec(item.title);
						// Check
						if ( result ) {
							// Title
							item.title = result[1];
							// Description
							result = regex.exec(item.title);
							item.description = result[2];
						}
						else {
							item.description = '';
						}
						// Postpare
						delete regex;
						delete result;
					}
					return false; // break
				}
			});
			
			// Return item
			return item;
		},
		
		// -----------------
		// Instsances
		
		/**
		 * Hashtable of Instances
		 */
		Instances: {},
		
		/**
		 * The default instance
		 */
		Instance: {
			"prototype": {
				code: null,
				$lightbox: null,
				Items: [],
				getConfig: function(mode,config){
					var Lightbox = $.Lightbox;
					return $.extend(true,{},this.config["default"],Lightbox.config["default"]);
				},
				preloadItems: function(){},
				hideInstance: function(){
					// FadeOut then Remove Lightbox Instance
					this.$lightbox.fadeOut(1000,function(){
						this.$lightbox.remove();
					});
				},
				showInstance: function(){
					// Prepare
					var	Lightbox = $.Lightbox,
						config = Lightbox.config['default'];
					
					// Insert our HTML into the page
					this.$lightbox = $(config.html.lightbox).hide().appendTo($('body'));
					
					// Show Instance
					this.$lightbox.fadeIn(1000,function(){
						// call show item
					});
				},
				nextItem: function(){},
				prevItem: function(){},
				loadItem: function(){},
				showItem: function(){},
				hideItem: function(){},
				resizeTo: function(width,height){},
				moveTo: function(x,y){},
				depthTo: function(z){}
			}
		},
		
		/**
		 * Get a Instance from the Hashtable
		 */
		getInstance: function(key){
			// Prepare
			var	Lightbox = $.Lightbox;
			
			// Fetch
			return Lightbox.Instances[key];
		},
		
		/**
		 * Add a Instance to the Hashtable
		 */
		addInstance: function(Instance){
			// Prepare
			var	Lightbox = $.Lightbox;
			
			// Add
			Lightbox.Instances[Instances.code] = Instance;
			
			// Return true
			return true;
			
		},
		
		/**
		 * Create and add an Instance to the Hashtable
		 * @param {Array} Items
		 * @param {String|Array} modes
		 * @param {Object} config
		 */
		createInstance: function(Items, modes, config){
			// Prepare
			var	Lightbox = $.Lightbox,
				config = Lightbox.config['default'];
			
			// Create Instance
			var Instance = new Lightbox.Instance;
			Instance.Items = Items;
			
			// Assign Instance Properties
			Instance.code = 
			
			// Add Instance
			Lightbox.addInstance(Instance);
			
			// Show Instance
			Instance.showInstance.apply(Instance,[{
				'Lightbox': Lightbox,
				'LightboxInstance': Instance,
				'Items': Items
			}]);
			
			// Return true
			return true;
		},
		
		/**
		 * Destory and remove an Instance from the Hashtable
		 */
		destroyInstance: function(key){
			
		},
		
		// -----------------
		// Extensions
		
		Extensions: {},
		Extension: {
			"prototype": {
				code: '',
				selector: '',
				"config": {
					"default": {
						html: {
							content: ''
						}
					}
				},
				getConfig: function(mode,config){
					var Lightbox = $.Lightbox;
					return $.extend(true,{},this.config["default"],Lightbox.config["default"]);
				},
				preloadItem: function(params){
					return true;
				},
				loadItem: function(params){
					return true;
				},
				showItem: function(params){
					return false;
				},
				hideItem: function(params){
					return false;
				},
				createItem: function(params){
					window.console.error('Lightbox.Extension.createItem was not defined.', [this, arguments]);
					window.console.trace();
					return false;
				}
			}
		},
		getExtension: function(key){
			// Prepare
			var	Lightbox = $.Lightbox;
			
			// Fetch
			return Lightbox.Extensions[key];
		},
		addExtension: function(Extension){
			// Prepare
			var	Lightbox = $.Lightbox;
			
			// Add
			Lightbox.Extensions[Extension.code] = Extension;
			
			// Return true
			return true;
		},
		createExtension: function(inExtension){
			// Prepare
			var	Lightbox = $.Lightbox;
			
			// Create
			var Extension = new Lightbox.Extension;
			$.extend(true,Extension,inExtension);
			
			// Adjust
			Extension.selector = Extension.selector || '.lightbox-'+Extension.code;
			
			// Add
			Lightbox.addExtension(Extension);
			
			// Return true
			return true;
		},
		
		// -----------------
		// Overlay
		
		showOverlay: function(){
			// Prepare
			var	Lightbox = $.Lightbox;
			
			// Show
			$('#lightbox-overlay').fadeIn();
		},
		
		hideOverlay: function(){
			// Prepare
			var	Lightbox = $.Lightbox;
			
			// Show
			$('#lightbox-overlay').fadeOut();
		},
		
		// -----------------
		// General
		
		/**
		 * Initialise Lightbox
		 */
		init: function(){
			// Prepare
			var	Lightbox = $.Lightbox;
			
			// Attach
			$.fn.Lightbox = $.fn.lightbox = Lightbox.fn;
			
			// domReady
			$(function(){
				Lightbox.domReady();
			});
		},
		
		/**
		 * jQuery Element Prototype Function
		 * Will create an instance for the elements using the optional params
		 */
		fn: function(modes, config){
			// Prepare
			var	Lightbox = $.Lightbox;
			var	$els = $(this);
			
			// AddClass
			$els.filter(':not(.lightbox-attached)').addClass('lightbox lightbox-attached');
			
			// Handle Data
			$els.each(function(i,el){
				// Prepare
				var $el = $(el);
				// Attach Item
				var	item = Lightbox.createItem($el);
					$el.Data('lightbox-item',item);
			});
			
			// Click Handler
			$els.click(function(event){
				// Prepare
				var $el = $(this),
					group = $el.Data('lightbox-group'),
					items = [];
				
				// Handle Group
				if ( group ) {
					var $group = $(group);
					$group.each(function(i,el){
						// Prepare
						var $el = $(el);
						// Push
						items.push($el.Data('lightbox-item'));
					});
				}
				else {
					// Push
					items.push($el.Data('lightbox-item'));
				}
				
				// Create Instance for Group's Items
				Lightbox.createInstance(items);
				
				// Prevent Link
				event.preventDefault();
				return false;
			});
			
			// Chain
			return this;
		},
		
		/**
		 * What to do when the DOM is finally Ready
		 */
		domReady: function(){
			// Prepare
			var	Lightbox = $.Lightbox,
				config = Lightbox.config['default'];
			
			// Insert our HTML into the page
			var	$overlay = $(config.html.overlay),
				$linkback = $(config.html.linkback);
			$overlay.add($linkback).hide().appendTo($('body'));
			
			// Add lightbox to lightbox elements
			var $els = $('.lightbox');
			$.each(Lightbox.Extensions,function(i,Extension){
				$els.add($(Extension.selector));
			});
			$els.lightbox();
			
			// Return true
			return true;
		}
	};
	
	/**
	 * The Lightbox Image Extension
	 * Will display images within the lightbox
	 */
	$.Lightbox.createExtension({
		"code": 'image',
		"config": {
			"default": {
				html: {
					content: '<img class="lightbox-content-image" />'
				},
				text: {
					closeButtonTitle: 'Close this Image and return to your page.',
					defaultTitleLinkTitle: 'View this Image by Itself'
				}
			},
			"en": {
				// No change
			}
		},
		isImageUrl: function(url){
			return /\.(jpe?g|tiff?|png|gif|w?bmp)$/.test(url);
		},
		preloadItem: function(params){
			// Prepare
			var	item = params.item;
			
			// Preload the passed image
			var	img = new Image();
			img.src = item.image;
			
			// Return true
			return true;
		},
		hideItem: function(params){
			// Return true
			return true; // true indicates that we are done doing whatever we need to and the process can continue
		},
		showItem: function(params){
			// Prepare
			var	item = params.item,
				Lightbox = params.Lightbox,
				LightboxInstance = params.LightboxInstance,
				ImageExtension = params.Extension,
				config = ImageExtension.config["default"],
				$lightbox = params.$lightbox;
			
			// Adjust Image
			var $image = $(config.html.content).attr('src',item.image).hide(),
				$content = $lightbox.find('#lightbox-content').empty();
			$image.appendTo($content).fadeIn(1000,function(){
				params.showItemCompleted();
			});
			
			// Return false
			return false; // false indicates that we are performing an animation and we should wait for the showItemCompleted callback
		},
		createItem: function(params){
			// Prepare
			var	ImageExtension = params.Extension,
				$el = $(params.el),
				item = {
					image: '',
					title: '',
					description: ''
				},
				linkElsewhere = false;
			
			// Generate a Item
			if ( $el.is('a:has(img)') ) {
				// Image
				item.image = $el.attr('href');
				if ( !ImageExtension.isImageUrl(item.image) ) {
					linkElsewhere = true;
					item.image = $el.find('img').attr('src');
				}
				// Title
				if ( linkElsewhere ) {
					item.title = $el.find('img').attr('title');
				}
				else {
					item.title = $el.attr('title');
				}
				// Description
				
			}
			else if ( $el.is('img') ) {
				// Image
				item.image = $el.attr('src');
				item.title = $el.attr('title');
			}
			
			// Return item
			return item;
		}
	});
	
	/**
	 * Initialise our Lightbox
	 */
	$.Lightbox.init();
	
})(jQuery); // We are done with our plugin, so lets call it with jQuery as the argument
