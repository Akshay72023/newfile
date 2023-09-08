//Traversing the DOM
var itemlist= document.querySelector('#items');
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentNode.parentNode);

//parentElement
// console.log(itemlist.parenElement);
// itemlist.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemlist.parentElement.parentElement);

//childNodes
//console.log(itemlist.childNodes);
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor='yellow';

// //FirstElement
// console.log(itemlist.firstChild);

// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='how r u';

// //lastElement
// console.log(itemlist.lastChild);

// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent='how r u';

//nextsibling
// console.log(itemlist.nextSibling);
// console.log(itemlist.nextElementSibling);

//prreviousSibling
// console.log(itemlist.previousSibling);
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.backgroundColor='red';

//createElement
var newDiv=document.createElement('div');

//Add class
newDiv.className='hello';

//Add id
newDiv.id='hello 1';

//Add attribute
newDiv.setAttribute('title','hellodiv');


//Add new node
var newDivText= document.createTextNode('hello world');

//Append child
newDiv.appendChild(newDivText);


var container=document.querySelector('header.container');
var h1=document.querySelector('head h1');

console.log(newDiv);
container.insertBefore(newDiv,h1);
