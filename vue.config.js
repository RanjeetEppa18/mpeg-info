module.exports = {
  pages: {
    index: {
      template: "public/browser-extension.html",
      entry: "./src/main.js",
      title: "Mpeg Info;",
      filename: "index.html",
    },
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: "src/background.js",
        },
        contentScripts: {
          entries: {
            "content-script": ["src/content-scripts/content-script.js"],
          },
        },
      },
    },
  },
};
