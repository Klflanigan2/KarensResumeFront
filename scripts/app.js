var app = angular.module("ResumeApp", [
    'ui.router',
    'ngTouch',
    'ngAnimate',
    'ui.bootstrap'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/HomePageView.html',
            controller: "homeCtrl"
        })
        .state('about', {
            url:'/about',
            templateUrl: 'views/AboutSiteView.html'
        })
    console.log("Configured.");
});

app.run(function () {
    console.log("Running.");
});

app.controller('homeCtrl', [
    '$scope',
    function (
        $scope
    ) {
        angular.extend($scope, {

        });
    }
]);

app.controller("indexCtrl",
    [
        '$scope',
        '$uibModal',
        function ($scope,
                  $uibModal) {
            angular.extend($scope,
                {
                    openEducationModal: function () {
                        $uibModal.open({
                            templateUrl: "views/modals/EducationModal.html",
                            controller: 'EducationModalCtrl'
                        });
                    },
                    openTeachModal: function () {
                        $uibModal.open({
                            templateUrl: "views/modals/TeachingModal.html",
                            controller: 'TeachModalCtrl'
                        });
                    },
                    openCodingModal: function () {
                        $uibModal.open({
                            templateUrl: "views/modals/CodingModal.html",
                            controller: 'CodingModalCtrl'
                        });
                    },
                    openAboutMeModal: function () {
                        $uibModal.open({
                            templateUrl: "views/modals/AboutMeModal.html",
                            controller: 'AboutMeModalCtrl'
                        });
                    }

                });
        }
    ]
);
