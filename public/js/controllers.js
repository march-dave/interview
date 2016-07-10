'use strict';

var app = angular.module('routerApp');

app.controller('homeCtrl', function($scope) {

  $scope.profileSettingUpdated = function() {
    $scope.profileSetting.labelfirstname = $scope.profileSetting.firstname;
    $scope.isDisabled = true;

    $scope.master = {};

    // $scope.master = angular.copy($scope.profileSetting);
    $scope.master = $scope.profileSetting;

    console.log('master', $scope.master);

    $scope.master.firstname = 'bbb';

    console.log('profileSetting', $scope.profileSetting.firstname);


  }

  $scope.btnCancel = function() {
    console.log('btnCancel()');

    $scope.isDisabled = false;
  }
})
