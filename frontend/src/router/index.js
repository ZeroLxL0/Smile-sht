import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AssessmentView from '../views/AssessmentView.vue'
import ActivityView from '../views/ActivityView.vue'
import ResultView from '../views/ResultView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/evaluacion', name: 'assessment', component: AssessmentView },
    { path: '/actividad', name: 'activity', component: ActivityView },
    { path: '/resultado', name: 'result', component: ResultView },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

export default router
