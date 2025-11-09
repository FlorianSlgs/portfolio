
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
    'index.csr.html': {size: 33676, hash: '827bcdf93ddecf34db61d3c7aeb26fe567567e7b7493e62e281981d6ee9945e0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25176, hash: 'bb2430250f130e9c869d370cc3a268f8e458fde5182d6fb88ba58b6890518568', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 112098, hash: '214207f6c6929266c5f935e937054c5a76a9864acc9c825906ca117a06fd1cb7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QJBCH4QL.css': {size: 49862, hash: '1tUU5LmCfIY', text: () => import('./assets-chunks/styles-QJBCH4QL_css.mjs').then(m => m.default)}
  },
};
