const globby = require("globby");
const fs = require("fs");
const util = require("util");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const renameFile = util.promisify(fs.rename);

exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
  if (stage !== "build-javascript") return;

  const config = getConfig();
  config.output.filename = `static/js/[name].js`;
  config.output.chunkFilename = `static/js/[name].chunk.js`;

  const correctPlugins = [];
  for (let i = 0; i < config.plugins.length; i++) {
    const plugin = config.plugins[i];
    if (plugin instanceof MiniCssExtractPlugin)
      correctPlugins.push(
        new MiniCssExtractPlugin({
          filename: `static/css/[name].css`,
          chunkFilename: `static/css/[name].chunk.css`,
        })
      );
    else correctPlugins.push(plugin);
  }
  config.plugins = correctPlugins;

  for (let i = 0; i < config.module.rules.length; i++) {
    if (config.module.rules[i].use && config.module.rules[i].use.length) {
      for (let j = 0; j < config.module.rules[i].use.length; j++) {
        if (
          config.module.rules[i].use[j].loader ===
            require.resolve("file-loader") ||
          config.module.rules[i].use[j].loader === require.resolve("url-loader")
        ) {
          config.module.rules[i].use[j].options.name =
            "static/media/[name].[ext]";
        }
      }
    }
  }
  config.optimization.moduleIds = "named";

  actions.replaceWebpackConfig(config);
};

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
    if (/-[a-zA-Z0-9]+.png$/.test(oldName))
      return oldName.replace(/-[a-zA-Z0-9]+.png$/, ".png");
    else if (/-[a-zA-Z0-9]+.svg$/.test(oldName))
      return oldName.replace(/-[a-zA-Z0-9]+.svg$/, ".svg");
    else if (/-[a-zA-Z0-9]+.ttf$/.test(oldName))
      return oldName.replace(/-[a-zA-Z0-9]+.ttf$/, ".ttf");
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
