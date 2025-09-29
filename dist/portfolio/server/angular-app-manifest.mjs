
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
    'index.csr.html': {size: 33676, hash: '0fe14418d83e91a00608e019d0a931663013bbffb886d869dfcab758f796a93e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25176, hash: 'cdb9c9e984cac412ac4efb0cd4b820fa3871ad8e01c95c59fafef9edb68e302c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 109942, hash: 'a84189371f8c92ff6c4f8c3660c5e1884dfee1ee7423a548d362c50e990f9c25', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PUTEAU43.css': {size: 49842, hash: 'ZUdh1BKuSko', text: () => import('./assets-chunks/styles-PUTEAU43_css.mjs').then(m => m.default)}
  },
};
