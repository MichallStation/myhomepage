const {
  readdirSync,
  existsSync,
  readFileSync,
  writeFileSync,
  mkdirSync,
  rmSync,
} = require('node:fs');
const path = require('node:path');
// const crypto = require('crypto');

// const uuid = crypto.randomUUID();
const internalPath = (p) => !p.startsWith('https');
const addRemoteLink = (p = '', relative) =>
  internalPath(p)
    ? `https://raw.githubusercontent.com/ltndat/myhomepage/db/${relative}/${p}`
    : p;
const readInternalFile = (p = '', relative) =>
  readFileSync(path.join(workspace, relative, p)).toString();
const normalizeContent = (content, relative = '') => {
  return {
    ...content,
    thumbnail:
      content?.thumbnail && addRemoteLink(content?.thumbnail, relative),
    json: content?.json && addRemoteLink(content?.json, relative),
    md: content?.md && addRemoteLink(content?.md, relative),
  };
};
const minimizeContent = (content, relative = '') => {
  return {
    ...content,
    thumbnail:
      content?.thumbnail && addRemoteLink(content?.thumbnail, relative),
    json:
      content?.json && JSON.parse(readInternalFile(content?.json, relative)),
    md: content?.md && readInternalFile(content?.md, relative),
  };
};

const workspace = path.join(__dirname, '..');
const langList = ['en', 'vi', 'zh'];
const lsDir = (p) => {
  return readdirSync(p, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);
};
const lsFiles = (p) => {
  return readdirSync(p, { withFileTypes: true })
    .filter((dir) => dir.isFile())
    .map((dir) => dir.name);
};

// const distFolder = path.join(workspace, 'pages');
// const distName = 'pages';
const distName = '.data';
const distFolder = path.join(workspace, distName);
const excludeList = [distName, 'test', 'page', 'set', 'detail'];
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
      const wBuildFolder = path.join(folderJson, id);
      const wlang = path.join(wid, `${lang}.json`);
      if (!existsSync(wlang)) return;
      // console.log(wlang);
      let content = JSON.parse(readFileSync(wlang).toString());
      const detailContent = {
        ...content,
        ...minimizeContent(content, path.join(name, id)),
        id: content?.id || id,
      };
      content = {
        ...content,
        ...normalizeContent(content, path.join(name, id)),
        id: content?.id || id,
      };

      if (!existsSync(wBuildFolder))
        mkdirSync(wBuildFolder, {
          recursive: true,
        });
      writeFileSync(
        path.join(wBuildFolder, `${lang}.json`),
        JSON.stringify(detailContent)
      );

      if (!fileJsonContent?.[lang]) fileJsonContent[lang] = [];
      fileJsonContent[lang].push(content);

      if (!langFileContent[lang]?.[name]) langFileContent[lang][name] = [];
      langFileContent[lang][name].push(content);
    });
  });

  // Build each list
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

// Build set of langs (collection)
(() => {
  // let folderJson = path.join(distFolder, 'set');
  const wroot = path.join(workspace, 'set');
  // const gJson = {};
  // const dirs = lsDir(wroot);
  // dirs.forEach((_w) => {
  const folderJson = path.join(distFolder, 'set');
  const w = path.join(wroot);
  const fileJsonContent = {};
  const setFileContent = {};
  langList.forEach((lang) => {
    setFileContent[lang] = {};
  });

  lsDir(w).forEach((id) => {
    wid = path.join(w, id);

    langList.forEach((lang) => {
      const wlang = path.join(wid, `${lang}.json`);
      if (!existsSync(wlang)) return;
      // console.log(wlang);
      let content = JSON.parse(readFileSync(wlang).toString());
      // console.log(content);

      if (!fileJsonContent?.[lang]) fileJsonContent[lang] = {};
      fileJsonContent[lang][id] = content;
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
  // gJson[_w] = fileJsonContent;
  // });

  // const gSetFileContent = {};
  // const folderJson = path.join(distFolder, 'set');
  // langList.forEach((lang) => {
  //   gSetFileContent[lang] = {};
  // });
  // Object.entries(gJson).forEach(([id, langSet]) => {
  //   Object.entries(langSet).forEach(([lang, set]) => {
  //     gSetFileContent[lang][id] = set;
  //   });
  // });
  // Object.entries(gSetFileContent).forEach(([lang, set]) => {
  //   const data = set;
  //   const fileJson = `${lang}.json`;
  //   const distFile = path.join(folderJson, fileJson);
  //   writeFileSync(distFile, JSON.stringify(data));
  // });
})();

// Build details (collection)
(() => {
  const folderJson = path.join(distFolder, 'detail');
  const w = path.join(workspace, 'detail');
  const gFileJsonContent = {};
  let fileJsonContent = {};
  const setFileContent = {};
  langList.forEach((lang) => {
    setFileContent[lang] = {};
  });

  lsDir(w).forEach((lid) => {
    const wlid = path.join(w, lid);
    const ids = lsDir(wlid);
    ids.sort((a, b) => {
      const wa = path.join(wlid, a, 'pos');
      const wb = path.join(wlid, b, 'pos');
      try {
        const posA = Number.parseInt(readFileSync(wa).toString());
        const posB = Number.parseInt(readFileSync(wb).toString());
        return posA - posB;
      } catch (error) {}
    });

    ids.map((id) => {
      const wid = path.join(wlid, id);
      langList.forEach((lang) => {
        const wBuildFolder = path.join(folderJson, lid, id);
        const wlang = path.join(wid, `${lang}.json`);
        if (!existsSync(wlang)) return;
        // console.log(wlang);
        let content = JSON.parse(readFileSync(wlang).toString());
        const detailContent = {
          ...content,
          ...minimizeContent(content, path.join('detail', lid, id)),
          id: content?.id || id,
          // uuid,
          type: lid,
        };
        content = {
          ...content,
          ...normalizeContent(content, path.join('detail', lid, id)),
          id: content?.id || id,
          // uuid,
          type: lid,
        };

        if (!existsSync(wBuildFolder))
          mkdirSync(wBuildFolder, {
            recursive: true,
          });
        writeFileSync(
          path.join(wBuildFolder, `${lang}.json`),
          JSON.stringify(detailContent)
        );

        if (!fileJsonContent?.[lang]) fileJsonContent[lang] = [];
        fileJsonContent[lang].push(content);
      });
    });

    const lFolderJson = path.join(folderJson, lid);
    if (!existsSync(lFolderJson))
      mkdirSync(lFolderJson, {
        recursive: true,
      });
    for (const lang in fileJsonContent) {
      if (Object.hasOwnProperty.call(fileJsonContent, lang)) {
        const data = fileJsonContent[lang];
        const fileJson = `${lang}.json`;
        const distFile = path.join(lFolderJson, fileJson);
        writeFileSync(distFile, JSON.stringify(data));
      }
    }
    gFileJsonContent[lid] = fileJsonContent;
    fileJsonContent = {};
  });

  // Build all details
  const gSetFileContent = {};
  langList.forEach((lang) => {
    gSetFileContent[lang] = {};
  });
  Object.entries(gFileJsonContent).forEach(([id, langSet]) => {
    Object.entries(langSet).forEach(([lang, set]) => {
      gSetFileContent[lang][id] = set;
    });
  });

  Object.entries(gSetFileContent).forEach(([lang, set]) => {
    const data = set;
    const fileJson = `${lang}.json`;
    const distFile = path.join(folderJson, fileJson);
    writeFileSync(distFile, JSON.stringify(data));
  });
})();

// Build globals data (collection)
for (const lang in langFileContent) {
  if (Object.hasOwnProperty.call(langFileContent, lang)) {
    const data = {
      ...langFileContent[lang],
      // uuid,
    };
    const fileJson = `${lang}.json`;
    const distFile = path.join(distFolder, fileJson);
    writeFileSync(distFile, JSON.stringify(data));
  }
}

// Build filters data (collection)
(() => {
  const folderJson = path.join(distFolder, 'collect');
  const w = path.join(workspace, '.filter');
  let setFileContent = {};
  langList.forEach((lang) => {
    setFileContent[lang] = {};
  });

  lsFiles(w).forEach((_w) => {
    const f = path.join(w, _w);
    const lid = _w.replace(path.extname(_w), '');
    let dirs = JSON.parse(readFileSync(f).toString());
    dirs.forEach((dir) => {
      const id = path.basename(dir);
      const wa = path.join(workspace, dir);
      langList.forEach((lang) => {
        const wlang = path.join(wa, `${lang}.json`);
        if (!existsSync(wlang)) return;
        let content = JSON.parse(readFileSync(wlang).toString());
        content = {
          ...content,
          // id,
        };
        if (!setFileContent[lang]?.[id]) setFileContent[lang][id] = content;
      });
    });

    const lFolderJson = path.join(folderJson, lid);
    if (!existsSync(lFolderJson))
      mkdirSync(lFolderJson, {
        recursive: true,
      });
    Object.entries(setFileContent).forEach(([lang, set]) => {
      const data = set;
      const fileJson = `${lang}.json`;
      const distFile = path.join(lFolderJson, fileJson);
      writeFileSync(distFile, JSON.stringify(data));
    });
    setFileContent = {};
    langList.forEach((lang) => {
      setFileContent[lang] = {};
    });
  });
})();

// console.log('version: ', uuid);
console.log(distName);
[...dirs, 'collect', 'detail', 'set'].forEach((dir) => console.log(`\t${dir}`));
langList.forEach((dir) => console.log(`\t${dir}.json`));
console.log('Create minify done! ✨');
