const {execSync} = require('child_process');
const git = require('git-rev-sync');
const argv = process.argv.slice(2);
let next = argv.length > 0 && argv[0] === 'next';

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

exec('yarn build');
exec('git checkout gh-pages --force');
exec('git fetch && git reset origin/gh-pages --hard');
if(next){
  exec('git rm -r -f --ignore-unmatch ./next/*');
  exec('mkdir -p next');
  exec('mv ./dist/* ./next/');

} else {
  exec('git rm -r -f --ignore-unmatch "!./next/* ./*"');
  exec('mv ./dist/* ./');
}
exec('git add --all');
exec(`git commit -m "Publish${next ? ' next' : ''} version ${version}"`);
exec('git push');
exec('git checkout master');
