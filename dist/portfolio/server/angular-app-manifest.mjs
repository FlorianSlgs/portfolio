
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 33676, hash: '54901e42f72dede0d1c4103a2a13df8dea45f6397b85f5e94af9d7b7b65e495c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25176, hash: 'e82c5861bd644f109b79253b2bedb639d2ee3dff2ffdb4d6f50c913a4b0a1a8a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 110320, hash: '84d078f87db128ba5c6b31b41f511d057457bd8ba0602217145b9e67ee4b80e6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QJBCH4QL.css': {size: 49862, hash: '1tUU5LmCfIY', text: () => import('./assets-chunks/styles-QJBCH4QL_css.mjs').then(m => m.default)}
  },
};
