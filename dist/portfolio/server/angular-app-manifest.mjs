
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
    'index.csr.html': {size: 33676, hash: '5da89268bd0d1b33c5367d74c73cab4fbd0a79c15d49edd1952ee6ce38e39f17', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25176, hash: 'b00e888d6dec89a6ec99ef3db4d05975431c1ab12e9694be001dc989176d5312', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 108089, hash: '888adb0c3365d57ef0ae365cf6da249e310c145d8f3b9144a6f72d987bf14d76', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-USAOG273.css': {size: 49509, hash: '6Th1Z2TyEPQ', text: () => import('./assets-chunks/styles-USAOG273_css.mjs').then(m => m.default)}
  },
};
