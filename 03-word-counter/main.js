let passBtn = document.getElementById('passBtn');
passBtn.addEventListener('click', function (){
    let countPass = document.getElementById('countPass').value;

    if(countPass == ''){
        alert('You have to write something')
    }
    else{
        let passMe = document.getElementById('passMe');
        passMe.innerHTML = ">> " +countPass.length
    }
})