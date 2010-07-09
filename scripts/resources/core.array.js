/**
 * @depends nothing
 * @name core.array
 * @package jquery-sparkle
 */

/**
 * Remove a element, or a set of elements from an array
 * @version 1.0.0
 * @date June 30, 2010
 * @copyright John Resig (MIT Licensed)
 */
Array.prototype.remove = function(from, to) {
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};

/**
 * Get a element from an array at [index]
 * if [current] is set, then set this index as the current index (we don't care if it doesn't exist)
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.get = function(index, current) {
	if ( index === 'first' ) index = 0;
	else if ( index === 'last' ) index = this.length-1;
	else if ( !index && index !== 0 ) index = this.index;
	var result = this[index] || undefined;
	if ( current !== false ) this.setIndex(index);
	return result;
};

/**
 * Apply the function [fn] to each element in the array
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.each = function(fn){
	for (var i = 0; i < this.length; ++i) {
		if (fn(i, this[i], this) === false) 
			break;
	}
	return this;
}

/**
 * Set the current index of the array
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.setIndex = function(index){
	if ( index < this.length && index >= 0 ) {
		this.index = index;
	} else {
		this.index = null;
	}
	return this;
};

/**
 * Get the current index of the array
 * If [index] is passed then set that as the current, and return it's value
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.current = function(index){
	return this.get(index, true);
};

/**
 * Get whether or not the array is empty
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.isEmpty = function(){
	return this.length === 0;
};

/**
 * Get whether or not the array has only one item
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.isSingle = function(){
	return this.length === 1;
};

/**
 * Get whether or not the array is not empty
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.isNotEmpty = function(){
	return this.length !== 0;
};

/**
 * Get whether or not the array has more than one item
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.isNotEmpty = function(){
	return this.length > 1;
};

/**
 * Get whether or not the current index is the last one
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.isLast = function(index){
	index = typeof index === 'undefined' ? this.index : index;
	return !this.isEmpty() && index === this.length-1;
}

/**
 * Get whether or not the current index is the first one
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.isFirst = function(index){
	index = typeof index === 'undefined' ? this.index : index;
	return !this.isEmpty() && index === 0;
}

/**
 * Clear the array
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.clear = function(){
	this.length = 0;
};

/**
 * Set the index as the next one, and get the item
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.next = function(update){
	return this.get(this.index+1, update);
};

/**
 * Set the index as the previous one, and get the item
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.prev = function(update){
	return this.get(this.index-1, update);
};

/**
 * Reset the index
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.reset = function(){
	this.index = null;
	return this;
};

/**
 * Set the [index] to the [item]
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.set = function(index, item){
	// We want to set the item
	if ( index < this.length && index >= 0 ) {
		this[index] = item;
	} else {
		throw new Error('Array.prototype.set: [index] above this.length');
		// return false;
	}
	return this;
};

/**
 * Set the index as the next item, and return it.
 * If we reach the end, then start back at the beginning.
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.loop = function(){
	if ( !this.index && this.index !== 0 ) {
		// index is not a valid value
		return this.current(0);
	}
	return this.next();
};

/**
 * Add the [arguments] to the array
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.add = function(){
	this.push.apply(this,arguments);
	return this;
};

/**
 * Insert the [item] at the [index] or at the end of the array
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.insert = function(index, item){
	if ( typeof index !== 'number' ) {
		index = this.length;
	}
	index = index<=this.length ? index : this.length;
	var rest = this.slice(index);
	this.length = index;
	this.push(item);
	this.push.apply(this, rest);
	return this;
};

/**
 * Get whether or not hte value exists in the array
 * @version 1.0.0
 * @date June 30, 2010
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://www.balupton.com}
 */
Array.prototype.has = Array.prototype.has || function(value){
	// Is the value in the array?
	var has = false;
	for ( var i=0, n=this.length; i<n; ++i ) {
		if ( value == this[i] ) {
			has = true;
			break;
		}
	}
	return has;
};