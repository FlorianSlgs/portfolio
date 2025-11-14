
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
    'index.csr.html': {size: 33676, hash: 'c01a041d1ee2ff94c92d698e533c4384323d1d1dc56b731ad55941ab89359d08', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25176, hash: '2d13741d1c64f7ab14975c8cf9e5fa6234e83439c88d0c0a2b014dfd466c96ec', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 100588, hash: 'b61694bf69d62d446a67c0856488ed31ecdc27dccbbb733acec18cce86acd424', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NRRFAUDB.css': {size: 49936, hash: 'fm42ym0S49Y', text: () => import('./assets-chunks/styles-NRRFAUDB_css.mjs').then(m => m.default)}
  },
};
