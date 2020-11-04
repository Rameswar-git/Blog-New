// below is latest method to define an custom directive
// tslint:disable-next-line: class-name
export class blogPostDirective implements ng.IDirective {
  static Name = 'blogpost';
  public restrict = 'E';
  public require = ['ngModel', 'ngScope'];
  public template = require('./blog-post.html');
  public scope = {
    post: '='
  };
  controller = ['$scope', function($scope: ng.IController) {
    $scope.messageContent = '';
    $scope.addMessage = function() {
      var newMessage = {author: 'Unknown', message: $scope.messageContent };
      $scope.post.messages.push(newMessage);
      $scope.messageContent = '';
    };
  }];
  // public replace = true;
  // public bindToController = true; //should not enable this
  static factory(): ng.IDirectiveFactory {
    const directive = ( ) => new blogPostDirective();
    return directive;
 }
}

// the other approach to define an custom directive is below code
// class MyDirectiveController {

//   static $inject = ['$scope'];
//   constructor(private $scope: ng.IController) {
//     $scope.messageContent = '';
//     $scope.addMessage = function() {
//       var newMessage = {author: 'Unknown', message: $scope.messageContent };
//       $scope.post.messages.push(newMessage);
//       $scope.messageContent = '';
//     };
//   }
// }
// export function myDirective(): ng.IDirective {
//   return {
//       restrict: 'E',
//       require: ['ngModel', 'ngScope'],
//       template: require('./blog-post.html'),
//       replace: true,
//       controller: MyDirectiveController,
//     };
//   }
