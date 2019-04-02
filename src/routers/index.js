import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from '../routers/movie'
import mineRouter from '../routers/mine'
import cinemaRouter from '../routers/cinema'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    mineRouter,
    cinemaRouter
  ]
})
