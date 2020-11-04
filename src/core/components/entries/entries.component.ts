import MockdataService from '../../services/MockDataService';
class BlogEntryController {
    static $inject = ['$scope', 'MockdataService', 'toastr'];
    constructor($scope: ng.IController, serv: any, toastr: angular.toastr.IToastrService) {


        $scope.basicInfo = serv.getBasicInfoData();
        $scope.social = serv.getsocial();
        $scope.postEdit = MockdataService.createnewPost('Rameswar', 'new Post');
        $scope.submitPost = function() {
            serv.createPost($scope.postEdit);
            toastr.success('Your new post is published');

    };
}
  }

  export class BlogEntries implements angular.IComponentOptions {
      static selector = 'blogs';
      static controller = BlogEntryController;
      static template = require('./manage.html');
      // static template = '<a ui-sref="app">Click to see app</a><div class="btn btn-primary">Boot button</div><div ui-view></div>';
  }
