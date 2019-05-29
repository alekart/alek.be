const fs = require('fs');
const git = require('git-rev-sync');

if(git.isDirty()){
  console.warn('❗ Built with uncommitted changes❗')
}

function getTag() {
  const tag = git.tag();
  const hash = git.short();
  if(new RegExp(`^${hash}`).test(tag)){
    return hash;
  }
  return tag;
}

const version = git.isTagDirty()
  ? `${getTag()}-${git.short()}`
  : `${getTag()}`;

let output = `version: ${version}\n`;

fs.writeFile(`dist/version.txt`, output, (err) => {
  if (err) throw err;
});
