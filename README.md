# My Modom library

## functions included in this library
**one()**: Find one matching element using any CSS selector
```javascript
example: md.one('#navbar')
```
**all()**: Find all matching elements using any CSS selector
```javascript
example: md.all('span')
```
**remove()**: Remove an element
```javascript
example: md.remove('#navbar')
```
**addClass()**: Add a CSS class to an element
```javascript
example: md.addClass('.page-header','text-center')
```
**removeClass()**: Remove a CSS class from an element
```javascript
example: md.removeClass('.page-header','text-center')
```
**hasClass()**: Return true if an element contains a CSS class in it's CSS attribute (see classList documentation)
```javascript
example: md.hasClass('.page-header','text-center')
```
**getAttr()**: Get an HTML attribute from an element
```javascript
example: md.getAttr('div', 'class')
```
**setAttr()**: Set an HTML attribute on an element
```javascript
example: md.setAttr('.page-header', 'class' , 'text-muted')
```
**setHTML()**: Set the innerHTML of an element
```javascript
example: md.setHTML('.main > h1', 'My dashboard')
```
**getHTML()**: Get the innerHTML of an element
```javascript
example: md.getHTML('.main > h1')
```
