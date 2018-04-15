// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var renderCompletedEvent = new CustomEvent('renderComplete')

fs = require('fs');

log.info('Renderer is running...');

/**
 * Renders template <name.html> from templates folder
 * @param {string} name Name of template
 */
function renderTemplate(name) {
    log.debug(name)
    var data = fs.readFileSync('./templates/' + name +'.html', 'utf8');
    document.body.innerHTML =
    document.body.innerHTML.replace('{{' + name + '}}', data);
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
        log.verbose('Render Completed')
        document.dispatchEvent(renderCompletedEvent)
    });
}

loadAllTemplates();

