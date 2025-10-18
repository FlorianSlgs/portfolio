
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
    'index.csr.html': {size: 33676, hash: 'a6dd00f0c318111d94e264d6e843a7e3754fb9d6c1e806e3d8fd49ab1873acfc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25176, hash: 'a1ad4ddfe6aea6ecea04c400c3d992f0acc86419653ecbbe4971d4fa38bf8157', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 110351, hash: '59079f68e73da016e42795b9cb99d2566db6a5560b228a844a534c6617886cfe', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QJBCH4QL.css': {size: 49862, hash: '1tUU5LmCfIY', text: () => import('./assets-chunks/styles-QJBCH4QL_css.mjs').then(m => m.default)}
  },
};
