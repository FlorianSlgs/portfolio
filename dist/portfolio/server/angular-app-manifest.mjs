
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
    'index.csr.html': {size: 32605, hash: '399b6cb6db859bea668b54d1ac0d4cb088888ffa7977a683115cac21552eeab1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25129, hash: '03430ac3d8651234012e9ebc5ed192f552e070ed0a0ac33ada3d30d2e13f9983', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 107348, hash: '275cd3bf19814132a1f1d87737db7fdb633293ee54835b41345d5da877b72cd7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SEATB56S.css': {size: 46726, hash: 'C33ctmaM3wc', text: () => import('./assets-chunks/styles-SEATB56S_css.mjs').then(m => m.default)}
  },
};
