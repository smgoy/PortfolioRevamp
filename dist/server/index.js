'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpackConfig = require('../../webpack.config.js');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var isDev = process.env.NODE_ENV === 'development';
if (isDev) {
  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
  app.use((0, _webpackDevMiddleware2.default)(compiler, {
    noInfo: true, publicPath: _webpackConfig2.default.output.publicPath
  }));
  app.use((0, _webpackHotMiddleware2.default)(compiler));
}

app.use(_express2.default.static(_path2.default.join(__dirname, '../public')));

app.get('*', function (req, res) {
  res.sendFile('./index.html', { root: __dirname });
});

app.listen(3000, function (err) {
  if (err) {
    return console.log(err);
  }

  console.log('Server running on port: 3000');
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', 'src/backend/index.js');

  __REACT_HOT_LOADER__.register(isDev, 'isDev', 'src/backend/index.js');
}();

;