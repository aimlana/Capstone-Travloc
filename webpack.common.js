const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const glob = require('glob');

// Fungsi untuk menghasilkan instance HtmlWebpackPlugin untuk setiap file HTML
function generateHtmlPlugins(templateDir) {
  const templateFiles = glob.sync(`${templateDir}/**/*.html`);
  return templateFiles.map(file => {
    const fileName = path.basename(file);
    return new HtmlWebpackPlugin({
      filename: fileName,
      template: path.resolve(__dirname, file),
    });
  });
}

const htmlPlugins = generateHtmlPlugins('./src/templates/pages');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    ...htmlPlugins,
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
  ],
};
