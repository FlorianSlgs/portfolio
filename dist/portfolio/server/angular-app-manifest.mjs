
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
    'index.csr.html': {size: 33629, hash: '8056e71f9b5ad8c1e381c86a573e14ecf1b2260a42dd563d1f2c44905f964689', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25129, hash: '968ae161b7acf76f3d63e38a2e8688d505c11a7434d5131a4a3fab7f162b37d7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 108295, hash: '03bc44758e83e74474f29d5c0d47d438d479c71df3ccf6f88d2d1c0e264b2165', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5SLDIR27.css': {size: 49920, hash: 'pb9OZ8FHx1s', text: () => import('./assets-chunks/styles-5SLDIR27_css.mjs').then(m => m.default)}
  },
};
