const buttons = document.querySelectorAll('.button')

buttons.forEach(function (button) {
    console.log(button)
    button.addEventListener('click', function (e) {
        console.log(e.target.id)
        if(e.target.id==='#212121'){
            document.body.style.backgroundColor = e.target.id;
            document.body.style.color='white';
            
        }else{
            document.body.style.backgroundColor=e.target.id;
            document.body.style.color='black';

        }

    })
})

