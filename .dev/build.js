const {
  readdirSync,
  existsSync,
  readFileSync,
  writeFileSync,
  mkdirSync,
  rmSync,
} = require('node:fs');
const path = require('node:path');
const crypto = require('crypto');

const uuid = crypto.randomUUID();
const workspace = path.join(__dirname, '..');
const langList = ['en', 'vi', 'zh'];
const lsDir = (p) => {
  return readdirSync(p, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);
};

// const distFolder = path.join(workspace, 'pages');
// const distName = 'pages';
const distName = '.data';
const distFolder = path.join(workspace, distName);
const excludeList = [distName, 'test', 'pages'];
const isExcludeDir =
  /** @param {string} dir */
  (dir) => dir.startsWith('.') || excludeList.find((i) => dir === i);

const dirs = lsDir(workspace).filter((dir) => !isExcludeDir(dir));
const langFileContent = {};
langList.forEach((lang) => {
  langFileContent[lang] = {};
});

// clean
rmSync(distFolder, {
  recursive: true,
  force: true,
});

// build
dirs.forEach((name) => {
  const folderJson = path.join(distFolder, name);
  const fileJsonContent = {};
  const w = path.join(workspace, name);
  const ids = lsDir(w);
  ids.sort((a, b) => {
    const wa = path.join(w, a, 'pos');
    const wb = path.join(w, b, 'pos');
    try {
      const posA = Number.parseInt(readFileSync(wa).toString());
      const posB = Number.parseInt(readFileSync(wb).toString());
      return posA - posB;
    } catch (error) {}
  });

  // console.log(ids);

  ids.map((id) => {
    wid = path.join(w, id);
    langList.forEach((lang) => {
      const wlang = path.join(wid, `${lang}.json`);
      if (!existsSync(wlang)) return;
      // console.log(wlang);
      let content = JSON.parse(readFileSync(wlang).toString());
      content = {
        ...content,
        id: content?.id || id,
        uuid,
      };
      if (!fileJsonContent?.[lang]) fileJsonContent[lang] = [];
      fileJsonContent[lang].push(content);

      if (!langFileContent[lang]?.[name]) langFileContent[lang][name] = [];
      langFileContent[lang][name].push(content);
    });
  });

  if (!existsSync(folderJson))
    mkdirSync(folderJson, {
      recursive: true,
    });
  for (const lang in fileJsonContent) {
    if (Object.hasOwnProperty.call(fileJsonContent, lang)) {
      const data = fileJsonContent[lang];
      const fileJson = `${lang}.json`;
      const distFile = path.join(folderJson, fileJson);
      writeFileSync(distFile, JSON.stringify(data));
    }
  }
});

for (const lang in langFileContent) {
  if (Object.hasOwnProperty.call(langFileContent, lang)) {
    const data = {
      ...langFileContent[lang],
      uuid,
    };
    const fileJson = `${lang}.json`;
    const distFile = path.join(distFolder, fileJson);
    writeFileSync(distFile, JSON.stringify(data));
  }
}

console.log('version: ', uuid);
console.log(distName);
dirs.forEach((dir) => console.log(`\t${dir}`));
langList.forEach((dir) => console.log(`\t${dir}.json`));
console.log('Create minify done! ✨');
