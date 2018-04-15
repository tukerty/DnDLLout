/**
 * Creates log enviroment, and forms console messages
 */
function init() {
  const log = require('electron-log');
const chalk = require('chalk');

log.transports.console = function(msg) {
  if (msg.level == 'error') {
    console.log(chalk.bold.bgRed('Error: ') +
    chalk.bgRed(msg.data[0]));
  }
  if (msg.level == 'warn') {
    console.log(chalk.black.bold.bgYellow('Warn: ') +
    chalk.black.bgYellow(msg.data[0]));
  }
  if (msg.level == 'info') {
    console.log(chalk.bold.blue('Info: ') +
    chalk.blue(msg.data[0]));
  }
  if (msg.level == 'verbose') {
    console.log(chalk.bold.magenta('Verbose: ') +
    chalk.magenta(msg.data[0]));
  }
  if (msg.level == 'debug') {
    console.log(chalk.bold.cyan('Debug: ') +
    chalk.cyan(msg.data[0]));
  }
  if (msg.level == 'silly') {
    console.log(chalk.bold.gray('Silly: ') +
    chalk.gray(msg.data[0]));
  }
};
}

module.exports = {
  init: init,
};
