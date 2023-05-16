const {
  rmSync,
} = require('node:fs');
const path = require('node:path');

const workspace = path.join(__dirname, '..');
const distName = '.data';
const distFolder = path.join(workspace, distName);

// clean
rmSync(distFolder, {
  recursive: true,
  force: true,
});
