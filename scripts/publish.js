const {execSync} = require('child_process');
const git = require('git-rev-sync');

/**
 * Preconfigured execSync
 * @param command {string}
 */
function exec(command) {
  execSync(command, {stdio: 'inherit'});
}

const version = git.isTagDirty()
  ? `@ ${git.short()}`
  : `@ v${git.tag()}`;

exec('npm run build');
exec('git checkout gh-pages');
exec('git reset origin/gh-pages --hard');
exec('git rm -r -f --ignore-unmatch ./*');
exec('mv ./dist/alk/browser/* ./');
exec('echo "alek.be" > ./CNAME');
exec('git add -A');
exec(`git commit -m "Publish website ${version}"`);
exec('git push');
exec('git checkout main');
