const path = require("node:path");

module.exports = {
  devtool: false,
  mode: "development",
  entry: {
    app: {
      import: path.resolve(__dirname, "src", "app.js"),
      dependOn: "vendor",
    },
    home: {
      import: path.resolve(__dirname, "src", "pages", "home.js"),
      dependOn: "vendor",
    },
    login: path.resolve(__dirname, "src", "pages", "login.js"),
    vendor: ["react", "react-dom"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
};
