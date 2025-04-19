const path = require('path');
const nbgv = require('nerdbank-gitversioning');
const { log, err, warn } = require('../../scripts/utils');
const repositoryRootPath = path.resolve(__dirname, '../../../');
const packageDirectory = path.resolve(repositoryRootPath, './package');

const args = process.argv.slice(2);

(async function main(newVersion) {
  try {
    if (newVersion === 'reset') {
      log(`setting package version to 0.0.0-placeholder`);
      await nbgv.resetPackageVersionPlaceholder(packageDirectory);
      return;
    }
    log(`updating package version`)
    await nbgv.setPackageVersion(packageDirectory, repositoryRootPath);
  } catch (e) {
    err(`error while updating package version`, e);
    console.error(e);
    process.exit(1);
  }
})(...args);
