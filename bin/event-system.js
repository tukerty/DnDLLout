document.addEventListener('renderComplete', function (e) {
    document.getElementById('submit').addEventListener('click', function(e){
        inputText=document.getElementById('text_field').value;
        log.verbose('ive just sent u some data: ' + inputText)
    })
});

