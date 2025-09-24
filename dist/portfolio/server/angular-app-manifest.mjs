
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
    'index.csr.html': {size: 33676, hash: '1168fe7019213501bd0355080d14031a2ed0d75034ec6d47c89195015598d15e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25176, hash: '58a23591bd4c196aa3a34752eafb9b86f9c64326be5aea7fb3b00a53d0c0057d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 108085, hash: '569495915a892f00523cec828c0da799ed5c2e6fff1e78779e8be4f0f4ef8e32', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-USAOG273.css': {size: 49509, hash: '6Th1Z2TyEPQ', text: () => import('./assets-chunks/styles-USAOG273_css.mjs').then(m => m.default)}
  },
};
