import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import Team from '@/components/team/index'
import FirstTeam from '@/components/team/Team'
import PlayerForwards from '@/components/team/PlayerForwards'
import PlayerGoalkeepers from '@/components/team/PlayerGoalkeepers'
import PlayerMidfielders from '@/components/team/PlayerMidfielders'
import PlayerDefenders from '@/components/team/PlayerDefenders'
// import News from '@/components/news/index'
// import Images from '@/components/album/index'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'TRANG CHỦ',
      component: Home,
      meta: {
        title: 'Trang chủ'
      }
    },
    // {
    //   path: '/news',
    //   name: 'TIN TỨC',
    //   component: News,
    //   meta: {
    //     title: 'Tin tức'
    //   }
    // },
    {
      path: '/team',
      name: '',
      component: Team,
      children: [
        {
          path: '/',
          name: 'ĐỘI HÌNH',
          component: FirstTeam,
          meta: {
            title: 'Đội hình FC'
          }
        },
        {
          path: '/team/playerforwards/:id',
          name: 'PlayerForwards',
          component: PlayerForwards,
          meta: {
            title: 'Thông tin cầu thủ'
          },
        },
        {
          path: '/team/playergoalkeepers/:id',
          name: 'PlayerGoalkeepers',
          component: PlayerGoalkeepers,
          meta: {
            title: 'Thông tin cầu thủ'
          },
        },
        {
          path: '/team/playermidfielders/:id',
          name: 'PlayerMidfielders',
          component: PlayerMidfielders,
          meta: {
            title: 'Thông tin cầu thủ'
          },
        },
        {
          path: '/team/playerdefenders/:id',
          name: 'PlayerDefenders',
          component: PlayerDefenders,
          meta: {
            title: 'Thông tin cầu thủ'
          },
        }
      ]
    }
    // {
    //   path: '/album',
    //   name: 'ẢNH',
    //   component: Images,
    //   meta: {
    //     title: 'Ảnh'
    //   }
    // }
  ]

})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
