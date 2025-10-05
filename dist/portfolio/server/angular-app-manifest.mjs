
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
    'index.csr.html': {size: 33676, hash: '6b1ea102b44c5bffbc13a89bb6d348d4fc074a8ffcb130c87562d8d5d2d4b009', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25176, hash: 'b8ad70d818e0c8690e3561132a1851866c731224920e04dbe1037cd331db0a29', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 110148, hash: '504611ae8f50a47cec3cfcbd81a47a9fab7d1c084a8f3d8fccd5d015f0d31404', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QJBCH4QL.css': {size: 49862, hash: '1tUU5LmCfIY', text: () => import('./assets-chunks/styles-QJBCH4QL_css.mjs').then(m => m.default)}
  },
};
