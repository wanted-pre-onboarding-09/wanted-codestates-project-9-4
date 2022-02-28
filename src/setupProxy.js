const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/info/contents', {
      target: 'https://test.daground.io/',
      changeOrigin: true,
    }),
  );
};
