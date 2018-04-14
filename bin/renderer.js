// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

fs = require('fs')

function renderTemplate(name){    
    fs.readFile('./templates/' + name +'.html', 'utf8', function (err,data) {
    if (err) {
        document.body.innerHTML = document.body.innerHTML.replace('{{' + name + '}}', "Render Error")
        return log.error('Template ' + name + ' render failed')
    }
    document.body.innerHTML = document.body.innerHTML.replace('{{' + name + '}}', data)
    })
}

function loadAllTemplates(){
    fs.readdir('./templates/', function(err, items) {
        if (err){
            return log.error('Template engine failed')
        }
        for (var i=0; i<items.length; i++) {
            var filename = items[i].replace('.html', '')
            renderTemplate(filename)
        }
    })
}

loadAllTemplates();