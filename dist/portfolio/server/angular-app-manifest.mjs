
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
    'index.csr.html': {size: 33629, hash: '832d77d157d6fe2c1c4d8ed6054a0890f1049ba1f03148f5aa08416fe8a8984a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25129, hash: '446a985d6f06641bbb7e49a13da72023d95732c3c5e45e951af563818841be87', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 108426, hash: 'c08d00620cbd5da045090a540f7d0375bf65337cb91c22d70985b2194185a343', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IJGJW56C.css': {size: 49501, hash: 'Wt/n5ftMpVw', text: () => import('./assets-chunks/styles-IJGJW56C_css.mjs').then(m => m.default)}
  },
};
