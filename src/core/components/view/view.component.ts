import MockdataService from '../../services/MockDataService';
import './view.component.scss';
class ViewController {
  constructor(
    $scope: ng.IController,
    $location: ng.ILocationService,
    $anchorScroll: ng.IAnchorScrollService
  ) {
    $scope.posts = [];
    // tslint:disable-next-line: no-unused-expression
    $scope.postId;

    var serv = new MockdataService();

    $scope.posts = serv.getpostdatas();
    $scope.basicInfo = serv.getBasicInfoData();
    $scope.social = serv.getsocial();

    $scope.focusOnPost = function (postId: any) {
      if (!postId) { return; }
      $location.hash('post' + postId);
      $anchorScroll();
    };
  }
}

export class View implements angular.IComponentOptions {
  static selector = 'view';
  static controller = ViewController;
  static template = require('./view.html');
  // static template = '<a ui-sref="app">Click to see app</a><div class="btn btn-primary">Boot button</div><div ui-view></div>';
}
