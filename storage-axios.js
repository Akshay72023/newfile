const myForm = document.querySelector('#my-form');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    const username=e.target.username.value;
    const email=e.target.email.value;
    const phone=e.target.phonenum.value;
    let myobject={
      username,
      email,
      phone
    };
    axios
    .post('https://crudcrud.com/api/9901bca7eda244eeb2a3a29f3fb3c817/appointmentdata',myobject)
    .then((response)=>{
      showUserDetails(response.data)
    })
    .catch(err=>{
      document.body.innerHTML=document.body.innerHTML + "<h4 style='text-align: center;'> Something went wrong </h4>"
      console.log(err);
    })
  }

window.addEventListener("DOMContentLoaded",()=>{
        axios.get("https://crudcrud.com/api/9901bca7eda244eeb2a3a29f3fb3c817/appointmentdata")
              .then((response)=>{
                    for(var i=0;i<response.data.length;i++){
                      showUserDetails(response.data[i])
                    }
              })
              .catch((err)=>{
                console.log(err);
              })
})

//Display user details
function showUserDetails(user){
    const parentEle=document.querySelector('.items');
    const childEle=`<li id=${user._id}> ${user.username}-${user.email}-${user.phone}
    <button onclick=deleteUser('${user._id}')>Delete</button>
    <button onclick=deleteUser('${user._id}')>Edit</button></li>`
    parentEle.innerHTML= parentEle.innerHTML+childEle;
}

//Delete user details
function deleteUser(userid){
    axios.delete(`https://crudcrud.com/api/9901bca7eda244eeb2a3a29f3fb3c817/appointmentdata/${userid}`)
    .then(response=>{
      removeUserFromScreen(userid)
    })
    .catch(err=>console.log(err))
}

function removeUserFromScreen(userid){
    const parentNode=document.querySelector('.items')
    const childNodeToBeDeleted=document.getElementById(userid)
    if(childNodeToBeDeleted){
      parentNode.removeChild(childNodeToBeDeleted)
    }
}







//     //Adding edit button and deleting from local storage
//     const editButton=document.createElement('input')
//               editButton.type='button'
//               editButton.value='Edit'
//               childEle.appendChild(editButton)
//               editButton.onclick = () =>{
//                   localStorage.removeItem(myobject.email)
//                   parentEle.removeChild(childEle)
//                   document.querySelector('#name').value=myobject.username
//                   document.querySelector('#email').value=myobject.email
//                   document.querySelector('#Phonenum').value=myobject.phone
//                   }
// }