
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
    'index.csr.html': {size: 33676, hash: '4d196c7ef3bb60959daf82b7d5e0dd77fec8bc2d92505b31e95a42720df62ba5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25176, hash: '9e6f67180b3c070eef56bbbd0b6a6522386d9d712a44e79e1050c9e55f000264', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 100505, hash: '4f79ddaf5e3d26ea972bb310c570235c542b77a4aea5d144d24e672865f99ae8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NRRFAUDB.css': {size: 49936, hash: 'fm42ym0S49Y', text: () => import('./assets-chunks/styles-NRRFAUDB_css.mjs').then(m => m.default)}
  },
};
