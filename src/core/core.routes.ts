// import { Home } from './components/home/home.component';
import { View } from './components/view/view.component';
import { Manage } from './components/manage/manage.component';
import { BlogEntries } from './components/entries/entries.component';


export const routing = (
  $stateProvider: angular.ui.IStateProvider,
  $urlRouterProvider: angular.ui.IUrlRouterProvider) => {
  'ngInject';
  $stateProvider.state('view', {
    url: '/',
    component: View.selector
  }).state({
    name: 'manage',
        url: '/manage',
        component: Manage.selector
    }).state({
      name: 'entries',
      url: '/entries',
      component: BlogEntries.selector
  });



  $urlRouterProvider.otherwise('/');
};

// .state('home', {
//   url: '/',
//   component: Home.selector
// })
