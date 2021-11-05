const globby = require("globby");
const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const renameFile = util.promisify(fs.rename);

exports.onPostBuild = async () => {
  const paths = await globby([
    `${__dirname}/public/static/*.svg`,
    `${__dirname}/public/static/*.png`,
    `${__dirname}/public/static/*.ttf`,
  ]);
  const oldNames = paths.map((path) => {
    const splitPath = path.split("/");
    return splitPath[splitPath.length - 1];
  });

  const replaceableFilePaths = await globby([
    `${__dirname}/public/**/*.html`,
    `${__dirname}/public/**/*.js`,
    `${__dirname}/public/**/*.css`,
  ]);

  const newNames = oldNames.map((oldName) => {
    if (/-.+.png/.test(oldName)) return oldName.replace(/-.+.png/, ".png");
    else if (/-.+.svg/.test(oldName)) return oldName.replace(/-.+.svg/, ".svg");
    else if (/-.+.ttf/.test(oldName)) return oldName.replace(/-.+.ttf/, ".ttf");
    else throw new Error("could not convert file name");
  });

  for (let i = 0; i < replaceableFilePaths.length; i++) {
    const content = await readFile(replaceableFilePaths[i]);
    let contentString = content.toString();
    for (let j = 0; j < oldNames.length; j++) {
      const oldName = oldNames[j];
      const newName = newNames[j];
      contentString = contentString.replaceAll(oldName, newName);
    }
    await writeFile(replaceableFilePaths[i], contentString);
  }

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    const oldName = oldNames[i];
    const newName = newNames[i];
    await renameFile(path, path.replace(oldName, newName));
  }
};
