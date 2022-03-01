const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/info',
    createProxyMiddleware({
      target: 'https://test.daground.io/info/contents',
      changeOrigin: true,
    }),
  );
};
