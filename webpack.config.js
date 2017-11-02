// need to tell it the entry point and the output (app.js in src, and the one big js file in public next to index.html)
// dirname gives the absolute path to the file
// path is a node module that helps take a bunch of data and concatenate it into actual cross-platform/os compatible file paths while also eliminating redundancies (like if you concatenated '../' whatever the previous path piece was would automatically be removed)
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');// this is a module that takes all the css out of thebundle.js file and puts it in a separate file. we define how this i sdone below


module.exports = (env) => { // we configured what value env is in package.json for the different builds
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css'); // this constructor function is going to create this styles file when the project builds

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({// this is where we define how the extraction (CSS out of the bundle into the file we defined above) will actually work
          use: [
            {
              loader: 'css-loader',// css and sass loader tell webpack to still process css, we will just be extracting it after
              options: {
                sourceMap: true,// configures the css loaders to use that inline-source-map devTool that shows where the css is locatied in line in the actual css files, as opposed to lik line 24897 in the bundle.js file
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      }],
    },
    plugins: [// just need to let webpack know it should use the CSSExtract plugin on the webpack build. now the plugin will run and use the code above to extract the css into it's own file
      CSSExtract, // now that the css will be extracted into its own file we just have to add a link to this file in the actual index.html file in the public folder
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map', // configuring the production build to not include all this shit. source-map takes a lot longer to build, but is much cmaller (and in production you will only have to build once)
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true, // set this up so each time the server sends 404 back, it fallsback to index.html which is where the react-router will actually be rendering and serving up content
    },
  };
};
