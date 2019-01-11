const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const spinner = ora(chalk.green('Checking for a Builder Application...'));

async function checkExisting(builderDir) {
  spinner.start();
  const exists = await fs.pathExists(builderDir);
  if(exists) {
    spinner.stopAndPersist({ text: chalk.white('Builder Application Found'), symbol: chalk.green('✔') });
  }
  else {
    spinner.stopAndPersist({ text: chalk.white('No Builder Application Found') });
  }
  return exists;
}

module.exports = checkExisting;