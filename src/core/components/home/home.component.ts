import './home.scss';

class HomeController {
  currentMenu: string;
  constructor($scope: ng.IController, $state: ng.ui.IStateService) {
    this.currentMenu = 'view';
    // $scope.showval = false;
    // $scope.test = function () {
    //   $scope.showval = true;
    //   $state.go('home', {
    //     // prevent the events onStart and onSuccess from firing
    //     notify: false,
    //     // prevent reload of the current state
    //     reload: false,
    //     // replace the last record when changing the params so you don't hit the back button and get old params
    //     location: 'replace',
    //     // inherit the current params on the url
    //     inherit: true,
    //   });
    // };
  }
}

export class Home implements angular.IComponentOptions {
    static selector = 'home';
    static controller = HomeController;
    static template = require('./home.html');
    // static template = '<a ui-sref="app">Click to see app</a><div class="btn btn-primary">Boot button</div><div ui-view></div>';
}
