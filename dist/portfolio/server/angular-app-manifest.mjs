
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
    'index.csr.html': {size: 33676, hash: '522a8e1cdc176ec79261de1efa1539049e22682f41ef192b406af7af1648f667', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25176, hash: '98fce45ff02f3d14c994c037390ba0e061b50fc120013cc128c9a12a31745df2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 113379, hash: 'f65790d4c8445040f90fe26fddeebf1868b55d101d6bb57916c5ebb0feaff6f4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QJBCH4QL.css': {size: 49862, hash: '1tUU5LmCfIY', text: () => import('./assets-chunks/styles-QJBCH4QL_css.mjs').then(m => m.default)}
  },
};
