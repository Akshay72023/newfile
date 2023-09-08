var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');

//Form submit event
form.addEventListener('submit',addItem);


//Delete event
itemlist.addEventListener('click',remove);


//Add item
function addItem(e){
    e.preventDefault();

    //Get input value
    var newitem=document.getElementById('item').value;

    //Create new li element
    var li=document.createElement('li');
    //Add class
    li.className='list-group-item';
    
    //Add text node with input value
    li.appendChild(document.createTextNode(newitem));

    //Create delete button 
    var deletebtn =document.createElement('button');
    //Add classes to delete button
    deletebtn.className='btn btn-danger btn-sm float-right delete';

    //append text node
    deletebtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(deletebtn);





    itemlist.appendChild(li);
}

//Remove item function
 function remove(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemlist.removeChild(li);

        }
    }
 }
