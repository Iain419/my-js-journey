const myform = document.querySelector('#my-form');
const nameinput = document.querySelector('#name');
const emailinput = document.querySelector('#email');
const msg = document.querySelector('.msg')
const userlist = document.querySelector('#users');

myform.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameinput.value === '' || emailinput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // disappera after 3 seconds
        setTimeout(function(){msg.remove()}, 3000)
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameinput.value} : ${emailinput.value}`));
        userlist.append(li);

        // clear the fields
        nameinput.value = '';
        emailinput.value = '';

    }
}



