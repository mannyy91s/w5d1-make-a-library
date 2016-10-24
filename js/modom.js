// Your DOM library code goes here inside of an IIFE and must set a global variables called md.

/*
one(): Find one matching element using any CSS selector
all(): Find all matching elements using any CSS selector
remove(): Remove an element
addClass(): Add a CSS class to an element
removeClass(): Remove a CSS class from an element
hasClass(): Return true if an element contains a CSS class in it's CSS attribute (see classList documentation)
getAttr(): Get an HTML attribute from an element
setAttr(): Set an HTML attribute on an element
setHTML(): Set the innerHTML of an element
getHTML(): Get the innerHTML of an element
*/


(function(){
    'use strict'
    var one = function(selector){
        return document.querySelector(selector)
    }
    var all = function(selectors){
        return document.querySelectorAll(selectors)
    }
    var remove = function(element){
        return document.querySelector(element).remove()
    }
    var addClass = function(element, value){
        return document.querySelector(element).classList.add(value)
    }
    var removeClass = function(element, value){
        return document.querySelector(element).classList.remove(value)
    }
    var hasClass = function(element, name){
        return document.querySelector(element).classList.contains(name)
    }
    var getAttr = function(element, value){
        return document.querySelector(element).getAttribute(value)
    }
    var setAttr = function(element, name, value){
        return document.querySelector(element).setAttribute(name, value)
    }
    var setHTML = function(selector, value){
        return document.querySelector(selector).innerHTML = value
    }
    var getHTML = function(selector){
        return document.querySelector(selector).innerHTML
    }

    window.md = {
        one: one,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        setHTML: setHTML,
        getHTML: getHTML,
    }
}())
