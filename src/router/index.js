import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      layout: 'MainLayout'
    },
  },
  {
    path: "/about-informatio",
    name: "about-informatio", 
    component: AboutInformatioView,
    meta: {
      layout: 'AboutLayout'
    },
  },
  {
    path: "/about-project",
    name: "about-project", 
    component: AboutProjectView,
    meta: {
      layout: 'AboutLayout'
    },
  },
  {
    path: "/professions",
    name: "professions", 
    component: ProfessionsInfoView,
    meta: {
      layout: 'StudentsLayout'
    },
  },
  {
    path: "/institutions",
    name: "institutions", 
    component: InstitutionsView,
    meta: {
      layout: 'StudentsLayout'
    },
  },
  {
    path: "/useful",
    name: "useful", 
    component: UsefulResourcesView,
    meta: {
      layout: 'StudentsLayout'
    },
  },
  {
    path: "/toteachers",
    name: "toteachers", 
    component: ToTeachersView,
    meta: {
      layout: 'TeachersLayout'
    },
  },
  {
    path: "/specialists",
    name: "specialists", 
    component: SpecialistsView,
    meta: {
      layout: 'TeachersLayout'
    },
  },
  {
    path: "/toparents",
    name: "toparents", 
    component: ToParentsView,
    meta: {
      layout: 'MainLayout'
    },
  },
  {
    path: "/vacancies",
    name: "vacancies", 
    component: VacanciesView,
    meta: {
      layout: 'MainLayout'
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
