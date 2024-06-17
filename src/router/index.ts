import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "@/views/web/login/LoginPage.vue";
import { useAuthStore } from '@/stores/counter';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage,
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore()

        if (authStore.isAuthenticated) {
          next('/inicio')
        } else {
          next()
        }
      }
    },
    {
      path: '/inicio',
      name: 'home',
      component: () => import('@/views/app/home/HomePage.vue'),
      meta: {
        auth: true
      }
    },
    {
      path: '/ageCommissiona/b2b/financeiro',
      name: 'auditPage',
      component: () => import('@/views/app/ageCommission/b2b/audit/AuditPage.vue'),
      meta: {
        auth: true
      }
    },
    {
      path: '/ageCommissiona/b2b/dasboard/executivo',
      name: 'DetailsSellerComponent',
      component: () => import('@/components/app/ageCommission/b2b/financial/audit/DetailsSellerComponent.vue'),
      meta: {
        auth: true
      }
    },
    {
      path: '/ageIntegra/agenda-aniel',
      name: 'ScheduleCapacity',
      component: () => import('@/views/app/ageIntegrator/aniel/ScheduleCapacity.vue'),
      meta: {
        auth: true
      }
    },
    {
      path: '/ageIntegra/agenda-aniel/aprovacao',
      name: 'ApprovalScheduleCapacity',
      component: () => import('@/views/app/ageIntegrator/aniel/ApprovalScheduleCapacity.vue'),
      meta: {
        auth: true
      }
    },
    {
      path: '/ageComunica/relatorio-envio',
      name: 'DashboardReportSendings',
      component: () => import('@/views/app/ageCommunicate/reports/DashboardReportSendings.vue'),
      meta: {
        auth: true
      }
    },
    {
      path: '/:catchAll(.*)', // Captura qualquer rota não definida
      redirect: '/inicio' // Redireciona para a página inicial se tentar acessar qualquer outra rota
    },
  ]
})


router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  to.meta.auth && !authStore.isAuthenticated ? next('/') : next();
});


export default router
  