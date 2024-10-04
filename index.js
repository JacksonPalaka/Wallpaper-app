const buttons= document.querySelectorAll('.button')

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
            document.body.style.backgroundColor=e.target.id}
        // document.body.style.backgroundColor(e.target.id)}
)})


