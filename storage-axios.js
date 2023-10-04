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
    .post('https://crudcrud.com/api/5c8c473be6ec462ab320e6c8d4f798c6/appointmentdata',myobject)
    .then((response)=>{
      const parentEle=document.querySelector('.items');
      const childEle=document.createElement('li');
      childEle.textContent='\u2022 '+ response.data.username + '-' + response.data.email + '-' +response.data.phone;
      parentEle.appendChild(childEle);
    })
    .catch(err=>{
      document.body.innerHTML=document.body.innerHTML + "<h4 style='text-align: center;'> Something went wrong </h4>"
      console.log(err);
    })
  }

window.addEventListener("DOMContentLoaded",()=>{
        axios.get("https://crudcrud.com/api/5c8c473be6ec462ab320e6c8d4f798c6/appointmentdata")
              .then((response)=>{
                    console.log(response);
                    for(var i=0;i<response.data.length;i++){
                      const parentEle=document.querySelector('.items');
                      const childEle=document.createElement('li');
                      childEle.textContent='\u2022 '+ response.data[i].username + '-' + response.data[i].email + '-' +response.data[i].phone;
                      parentEle.appendChild(childEle);
                    }
              })
              .catch((err)=>{
                console.log(err);
              })
})










//     //Adding delete button and delteting from local storage
//     const deleteButton=document.createElement('input')
//               deleteButton.type='button'
//               deleteButton.value='Delete'
//               childEle.appendChild(deleteButton)
//               deleteButton.onclick = () =>{
//                   localStorage.removeItem(myobject.email)
//                   parentEle.removeChild(childEle)
//                 }
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