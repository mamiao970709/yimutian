/*
 * @Author: your name
 * @Date: 2019-11-09 09:45:43
 * @LastEditTime: 2019-11-15 11:21:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workspacee:\projects\ymt\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import DetailsPage from '@/pages/DetailsPage'
import GoodsListPage from '@/pages/GoodsListPage'
import ShoppingCarPage from '@/pages/ShoppingCarPage'
import SearchPage from '@/pages/SearchPage'
import FruitPage from '@/pages/FruitPage'
import SettlePage from '@/pages/SettlePage'
import NewAddresPage from '@/pages/NewAddresPage'
import mePage from '@/pages/mePage'
import regPage from '@/pages/regPage'
import LoginPage from '@/pages/LoginPage'
 
 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
      {
        path: '/DetailsPage/:id',
        name: 'DetailsPage',
        component: DetailsPage,
        props:true
      },
      {
        path: '/GoodsListPage',
        name: 'GoodsListPage',
        component: GoodsListPage
      },
      {
        path: '/ShoppingCarPage',
        name: 'ShoppingCarPage',
        component: ShoppingCarPage
      },
      {
        path: '/SearchPage',
        name: 'SearchPage',
        component: SearchPage
      },
      {
        path: '/FruitPage',
        name: 'FruitPage',
        component: FruitPage
      },
      {
        path: '/SettlePage/:id',
        name: 'SettlePage',
        component: SettlePage,
        props:true
      },
      {
        path: '/NewAddresPage',
        name: 'NewAddresPage',
        component: NewAddresPage
      },
      {
        path: '/mePage',
        name: 'mePage',
        component: mePage
      },
      {
        path: '/regPage',
        name: 'regPage',
        component: regPage
      }, 
      {
        path: '/LoginPage',
        name: 'LoginPage',
        component: LoginPage
      }
  ]
})
