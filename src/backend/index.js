import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.config.js';

const app = express();

const isDev = process.env.NODE_ENV === 'development';
if (isDev) {
  const compiler = webpack(config);
  app.use(webpackMiddleware(compiler, {
      noInfo: true, publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, err => {
  if(err) {
    return console.log(err);
  }

  console.log('Server running on port: 3000');
});
