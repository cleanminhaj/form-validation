
/**
 * documnet-elements-select
 */
const user_create_form = document.getElementById('user-create-form');
let msg = document.querySelector('.msg');
let name = document.getElementById('name');
let email = document.getElementById('email');
let number = document.getElementById('number');
   
// form-falidation
user_create_form.onsubmit = (event) =>{
    event.preventDefault();
    
    if (name.value=='' || email.value=='' || number.value=='' ) {
     msg.innerHTML=`<p class="btn btn-warning w-100">All fields are required</p>`;
    }else{
     msg.innerHTML='<p class="btn btn-danger w-100">Data stable</p>';
    }
}