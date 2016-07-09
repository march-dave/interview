'use strict';

var app = angular.module('routerApp');

app.controller('homeCtrl', function($scope) {

  $scope.profileSettingUpdated = function() {

    console.log('select', $scope.profileSetting.select);

    $scope.isDisabled = true;
  }

  $scope.btnCancel = function() {
    console.log('btnCancel()');

    $scope.isDisabled = false;

  }
})
