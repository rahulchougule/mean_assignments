const path = require("path");  // to reAD FILES FROM ROOT
const HtmlWebpackPlugin = require("html-webpack-plugin"); // html execution
const webpack = require("webpack");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin"); // checks code quality

module.exports = {
  mode: "development",   // test & production
  resolve: {
    extensions: [".js", ".ts"]
  },
  entry: {
    polyfills: "./deps/polyfills.ts",
    main: "./apps/main.ts"
  },
  output: {
    path: path.resolve(__dirname, "dist"), // output directory
    filename: "[name].js" // name of the generated bundle
  },
  module: {
    rules: [
      {
        test: /\.css$/, // $ standans for or more like cssx
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.ts$/,
        loader: ["awesome-typescript-loader","angular2-template-loader"] // loads separate html file 
      },
      {
        test: /\.ts$/,
        enforce: "pre",  // include with warning... enforces for code quality check
        loader: "tslint-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.scss$/, // new generation css, more optimized
        loader: ["raw-loader", "sass-loader?sourceMap"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          name: "vendor",
          test: "vendor"
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: "body"
    }),

    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)fesm5/,
      path.resolve(__dirname, "src"),
      {}
    ),
    new FilterWarningsPlugin({
      exclude: /System.import/
    })
  ],
  devtool: "source-map",
  devServer: {
    historyApiFallback: true // browser history replaced on refresh
  }
};
