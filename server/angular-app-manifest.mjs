
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Remzi-frontend/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "route": "/Remzi-frontend"
  },
  {
    "renderMode": 1,
    "route": "/Remzi-frontend/customer-review"
  },
  {
    "renderMode": 1,
    "route": "/Remzi-frontend/admin"
  },
  {
    "renderMode": 1,
    "route": "/Remzi-frontend/admin-home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3897, hash: 'f7a546fb9e472faaa83219a8932ff4f6e670bfc1e3aa5e8ccde7c4a0ea236910', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3903, hash: '170caf905252afed73798e65f36bbc6aff8011655548d60ae8cf9ab610b18caf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FDT34XNC.css': {size: 436, hash: 'kdrSyhyO7jk', text: () => import('./assets-chunks/styles-FDT34XNC_css.mjs').then(m => m.default)}
  },
};
