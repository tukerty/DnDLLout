// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

fs = require('fs');

log.debug('Renderer is running...');

/**
 * Renders template <name.html> from templates folder
 * @param {string} name Name of template
 */
function renderTemplate(name) {
    fs.readFile('./templates/' + name +'.html', 'utf8', function(err, data) {
    if (err) {
        document.body.innerHTML =
        document.body.innerHTML.replace('{{' + name + '}}', 'Render Error');
        return log.error('Template ' + name + ' render failed');
    }
    document.body.innerHTML =
    document.body.innerHTML.replace('{{' + name + '}}', data);
    });
}

/**
 * Renders all templates from templates folder
 */
function loadAllTemplates() {
    fs.readdir('./templates/', function(err, items) {
        if (err) {
            return log.error('Template engine failed');
        }
        for (let i=0; i<items.length; i++) {
            let filename = items[i].replace('.html', '');
            renderTemplate(filename);
        }
    });
}

loadAllTemplates();
