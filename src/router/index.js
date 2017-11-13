import Vue from 'vue'
import Router from 'vue-router'
const index = r => require.ensure([], () => r(require('../components/index')), 'index')
const personalCenter = r => require.ensure([], () => r(require('../components/personal/personalCenter')), 'personalCenter')
const historyList = r => require.ensure([], () => r(require('../components/personal/historyList')), 'historyList')
const integralList = r => require.ensure([], () => r(require('../components/personal/integralList')), 'integralList')
const exchangeRecord = r => require.ensure([], () => r(require('../components/personal/exchangeRecord')), 'exchangeRecord')
const prizeInfo = r => require.ensure([], () => r(require('../components/commodity/prizeInfo')), 'prizeInfo')
const exchange = r => require.ensure([], () => r(require('../components/commodity/exchange')), 'exchange')
const exchangeSuccess = r => require.ensure([], () => r(require('../components/commodity/exchangeSuccess')), 'exchangeSuccess')
const activityRules = r => require.ensure([], () => r(require('../components/other/activityRules')), 'activityRules')
const accountBinding = r => require.ensure([], () => r(require('../components/other/accountBinding')), 'accountBinding')

Vue.use(Router)

export default new Router({
  mode: 'history',
  history: true,
  routes: [
    {path: '/',component: index,meta: {title:'首页'}},//首页
    {path: '/personal/personalCenter',component: personalCenter/*,meta: {title:'个人中心'}*/},//个人中心
    {path: '/personal/historyList',component: historyList/*,meta: {title:'历史排行榜冠军'}*/},//历史排行榜记录
    {path: '/personal/integralList',component: integralList/*,meta: {title:'今日积分排行榜'}*/},//积分排行榜
    {path: '/personal/exchangeRecord',component: exchangeRecord/*,meta: {title:'兑换记录'}*/},//兑换记录
    {path: '/commodity/prizeInfo',component: prizeInfo/*,meta: {title:'奖品详情'}*/},//奖品信息
    {path: '/commodity/exchange',component: exchange/*,meta: {title:'兑换商品'}*/},//兑换商品
    {path: '/commodity/exchangeSuccess',component: exchangeSuccess/*,meta: {title:'兑换商品'}*/},//兑换成功
    {path: '/other/activityRules',component: activityRules/*,meta: {title:'活动规则'}*/},//活动规则
    {path: '/other/accountBinding',component: accountBinding/*,meta: {title:'账号绑定'}*/},//账号绑定
 
  ]
})
