document.addEventListener('renderComplete', function (e) {
    document.getElementById('message_dispatcher').addEventListener('submit', function(e){
        e.preventDefault();
        inputText=document.getElementById('text_field').value;
        log.verbose('ive just sent u some data: ' + inputText)
        document.getElementById('text_field').value="";
    })
});

