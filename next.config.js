const withSass = require("@zeit/next-sass");
const withFonts = require("nextjs-fonts");

module.exports = withSass(
  withFonts({
    webpack(config, options) {
      const globalSass = ["./src/styles/variables/_variables.scss"];

      config.module.rules.push({
        enforce: "pre",
        test: /.scss$/,
        loader: "sass-resources-loader",
        options: {
          resources: globalSass,
        },
      });
      return config;
    },
  })
);
