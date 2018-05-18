// imports.

export default [
  {
    path: '/',
    component: () => import('src/layouts/main/main'),
    children: [
      {path: '', name: 'home', component: () => import('src/pages/index/index'), meta: {weight: 10}},
      {path: 'posts', name: 'posts', component: () => import('src/pages/index/index'), meta: {weight: 10}},
      {
        path: 'posts/:category',
        name: 'posts-category',
        component: () => import('src/pages/index/index'),
        meta: {weight: 10, order: 'created'}
      },
      {
        path: 'trending/:category',
        name: 'posts.trending',
        component: () => import('src/pages/index/index'),
        meta: {weight: 10, order: 'trending'}
      },
      {
        path: 'new/:category',
        name: 'posts.new',
        component: () => import('src/pages/index/index'),
        meta: {weight: 10, order: 'created'}
      },
      {
        path: ':category/:author/:permlink',
        name: 'post',
        component: () => import('src/pages/post/post'),
        meta: {weight: 10}
      },
      {path: 'create', name: 'create', component: () => import('src/pages/create/create'), meta: {weight: 10}},
      {path: 'activity', name: 'activity', component: () => import('src/pages/activity/activity'), meta: {weight: 20}},
      {path: 'settings', name: 'settings', component: () => import('src/pages/settings/settings'), meta: {weight: 50}}
    ]
  },
  {
    path: '/auth',
    component: () => import('src/layouts/guest/guest'),
    children: [
      {path: 'login', name: 'auth.login', component: () => import('src/pages/auth/login'), meta: {weight: 10}},
      {path: 'callback', name: 'auth.callback', component: () => import('src/pages/auth/callback'), meta: {weight: 10}}
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('src/pages/404/404')
  }
]
