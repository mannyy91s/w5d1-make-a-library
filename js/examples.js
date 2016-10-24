// Your test code examples go here. Make sure you console.log() results.

//testing one()
console.log(md.one('#navbar'))

//testing all()
console.log(md.all('span'))

//testing remove()
console.log(md.remove('#navbar'))

//addClass()
console.log(md.addClass('.page-header','text-center'))

//removeClass()
console.log(md.removeClass('.page-header','text-center'))

//hasClass()
console.log(md.hasClass('.page-header','text-center'))

//getAttr()
console.log(md.getAttr('div', 'class'))

//setAttr()
console.log(md.setAttr('.page-header', 'class' , 'text-muted'))

//setHTML
console.log(md.setHTML('.main > h1', 'My dashboard'))

//getHTML
console.log(md.getHTML('.main > h1'))