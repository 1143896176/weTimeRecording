import Vue from 'vue'
import Router from 'vue-router'
import Shop from './components/shop/Shop'
import ShopGoods from './components/shop/shopGoods/ShopGoods'

import ShopInfo from './components/shop/shopInfo/ShopInfo'

import ShopRatings from './components/shop/shopRatings/ShopRatings'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            meta:{
                show:true
            },
            component: resolve => require(['./components/index/index'], resolve)
        },
        {
            path: '/search',
            name: 'search',
            meta:{
                show:true
            },
            component: resolve => require(['./components/search/search'], resolve)
        },{
            path: '/order',
            name: 'order',
            meta:{
                show:true
            },
            component: resolve => require(['./components/order/order'], resolve)
        },{
            path: '/me',
            name: 'me',
            meta:{
                show:true
            },
            component: resolve => require(['./components/me/me'], resolve)
        },{
            path: '/login',
            name: 'login',
            meta:{
                show:false
            },
            component: resolve => require(['./components/login/Login'], resolve)
        },
        {
            path: '/shop',
            component:Shop,
            children:[
                {
                    path:'/shop/ratings',
                    component:ShopRatings
                },
                {
                    path:'/shop/info',
                    component:ShopInfo
                },{
                    path:'/shop/goods',
                    component:ShopGoods
                },
                {
                    path:'',
                    redirect:"/shop/goods"
                }
            ]
        },

    ]
})
