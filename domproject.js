var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');

//Form submit event
form.addEventListener('submit',addItem);


//Delete event
itemlist.addEventListener('click',remove);

//Filter event
filter.addEventListener('keyup',filteritems);

//Add item
function addItem(e){
    e.preventDefault();

    //Get input value
    var newitem=document.getElementById('item').value;
    var newdesc=document.getElementById('description').value;

    //Create new li element
    var li=document.createElement('li');
    //Add class
    li.className='list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newitem));
    li.appendChild(document.createTextNode(' '));
    li.appendChild(document.createTextNode(newdesc));
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


 //Filter itemlist function
 function filteritems(e){
    //convert text to lowercase
    var text=e.target.value.toLowerCase();
    //get li's
    var items=itemlist.getElementsByTagName('li');
    //Convert to array
    Array.from(items).forEach(function(item){
        var itemname=item.firstChild.textContent;
        var description=item.childNodes[1].textContent;
        if(itemname.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }

    });

 }