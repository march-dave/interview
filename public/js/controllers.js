'use strict';

var app = angular.module('routerApp');

app.controller('homeCtrl', function($scope) {

  $scope.profileSettingUpdated = function( ) {

    console.log('homeCtrl', $scope.profileSetting);
    console.log('homeCtrl', $scope.profileSetting);
    console.log('homeCtrl', $scope.profileSetting);


    $scope.profileSetting.name = $scope.profileSetting.firstname;

     $scope.isDisabled = true;
  }

})

app.controller('cancelCtrl', function( $scope) {
  console.log('cancelCtrl');

   $scope.isEnabled = false;
})
