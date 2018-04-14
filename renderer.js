// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
fs = require('fs')

var head_html = fs.readFile('./templates/head.html', 'utf8', function(err, data){
    if (err)
    {
        document.write("HEAD_ERROR")
    }
    document.write(data)
});

var hud_html = fs.readFile('./templates/hud.html', 'utf8', function(err, data){
    if (err)
    {
        document.write("HUD_ERROR")
    }
    document.write(data)
});
