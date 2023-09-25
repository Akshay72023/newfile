// //console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title=12345656;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[10]);
// document.all[10].textContent='Hello';
// console.log(document.forms[0]);

// //Get element by id
// var headertitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// console.log(headertitle);
// headertitle.textContent='hello';
// console.log(headertitle.textContent);
// headertitle.innerHTML='<h3>Hello</h3>';
// header.style.borderBottom='solid 3px #000';


// //Get elements by class name
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent="Hello 2";
// items[1].style.fontWeight='bold';
// //items[1].style.backgroundColor='red';

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor="#f4f4f4";
// }


// //Get elements by tag names

// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent="Hello 2";
// li[1].style.fontWeight='bold';
// //items[1].style.backgroundColor='red';

// for(var i=0;i<li.length;i++){
//    li[i].style.backgroundColor="#f4f4f4";
// }

// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value='Hello world';

// var submit=document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var item=document.querySelector('.list-group-item');
// item.style.color='blue';


// var titles= document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='hi';

// titles[1].textContent='Item2';




var x= function(name){
    this.name=name;
    setTimeout(function(){
        console.log(this.name);
    },1000)
};
var a=new x('yash');
    
// var student = function(name){
//     this.name = name;
//     function printName() {
//       console.log(this.name)
//     }
//      printName()
//   }
// var yash = new student("yash")