import * as angular from 'angular';
// import MockdataService from '../../services/MockDataService';

class ManageController {
  static $inject = ['$scope', 'toastr', 'MockdataService' , '$state'];
    constructor($scope: ng.IController, toastr: angular.toastr.IToastrService ,
       serv: any , $state: ng.ui.IStateService) {
        $scope.posts = [];
        // var serv = new MockdataService();
        // $scope.posts = serv.getpostdatas();
        $scope.basicInfo = serv.getBasicInfoData();
        $scope.social = serv.getsocial();

        $scope.basicInfoEdit = angular.copy($scope.basicInfo);
        $scope.socialEdit = angular.copy($scope.social);


        $scope.saveBasicForm = function() {
            serv.saveBasicinfo($scope.basicInfoEdit.name, $scope.basicInfoEdit.introduction);
            $scope.basicInfo = angular.copy($scope.basicInfoEdit);
            toastr.success('Basic info saved successfully!');
            $state.reload();
          };

          $scope.saveSocialForm = function() {
            serv.saveSocial($scope.socialEdit.works, $scope.socialEdit.lives, $scope.socialEdit.birthday, $scope.socialEdit.from);
            $scope.social = serv.getsocial();
            toastr.success('Your social data is safe and sound now.', 'It is saved successfully');
            $state.reload();
          };
 }
}
export class Manage implements ng.IComponentOptions {
    static selector = 'manage';
    static template = require('./manage.html');
    static controller = ManageController;
}
