/*
 * @Email: deuntlt@gmail.com
 * @Author: hogger
 * @Github: xxxx
 * @Date: 2022-02-06 16:47:45
 * @Description: 路由配置文件
 */
import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
// 公开路由表
//使用懒加载 import
//制定对应的路由规则
const publicRoutes = [{
  path: '/login',
  component: () => import('@/views/login/index')

}]

// 此处传入的key肯定还是routes的，设立公用和私用应该是要根据用户登录的权限来做动态的切换
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})
export default router
