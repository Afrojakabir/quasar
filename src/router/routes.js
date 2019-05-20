
const routes = [
  {
    path: '/',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/cart', component: () => import('pages/CartPage.vue') },
      { path: '/orderList', component: () => import('pages/OrderList.vue') },
      { path: '/checkout', component: () => import('pages/CheckoutPage.vue') }

    ]
  },
  {
    path: '/',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/registration', component: () => import('pages/Registration.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
