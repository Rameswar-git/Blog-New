// import MockdataService from '../../services/MockDataService';
import * as angular from 'angular';
// import * as toster from 'angular-toastr';

// import angular from 'angular';

class ProfileController {
  static $inject = ['$scope', 'MockdataService', 'toastr'];
    constructor($scope: ng.IController, serv: any, toastr: angular.toastr.IToastrService) {

        $scope.posts = [];
        // tslint:disable-next-line: no-unused-expression
        $scope.postId;
        // var serv = new MockdataService();
        // $scope.posts = serv.getpostdatas();
        $scope.basicInfo = serv.getBasicInfoData();
        $scope.social = serv.getsocial();

        $scope.basicInfoEdit = angular.copy($scope.basicInfo);
        $scope.socialEdit = angular.copy($scope.social);


        $scope.saveBasicForm = function() {
            serv.saveBasicinfo($scope.basicInfoEdit.name, $scope.basicInfoEdit.introduction);
            $scope.basicInfo = angular.copy($scope.basicInfoEdit);
            this.toster.success('Basic info saved successfully!');
          };

          $scope.saveSocialForm = function() {
            serv.saveSocial($scope.socialEdit.works, $scope.socialEdit.lives, $scope.socialEdit.birthday, $scope.socialEdit.from);
            $scope.social = serv.getsocial();
            this.toster.success('Your social data is safe and sound now.', 'It is saved successfully');
          };

    }
}

export class Profile implements angular.IComponentOptions {
  static selector = 'profile';
  static controller = ProfileController;
  static template = require('./view.html');
  // static template = '<a ui-sref="app">Click to see app</a><div class="btn btn-primary">Boot button</div><div ui-view></div>';
}
