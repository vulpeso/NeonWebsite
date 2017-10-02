angular.module('baitApp', ['ngAnimate', 'ui.router', 'ngResource'])
.config(function($stateProvider, $urlRouterProvider){
   $stateProvider
      .state('main', {
         url: '/main',
         templateUrl: 'view-main.html',
         controller: 'mainController'
      })
      .state('hack', {
         url: '/hack',
         templateUrl: 'view-hack.html',
          onEnter: function ($window) {
            $window.scrollTo(0,0);
         } 
      })
      .state('robots', {
         url: '/robots',
         templateUrl: 'view-robots.html',
          onEnter: function ($window) {
              $window.scrollTo(0,0);
          }
      })
      .state('workshops', {
         url: '/workshops',
         templateUrl: 'view-workshops.html',
          onEnter: function ($window) {
              $window.scrollTo(0,0);
          }
      })
	  .state('orgs', {
         url: '/orgs',
         templateUrl: 'view-orgs.html',
          onEnter: function ($window) {
              $window.scrollTo(0,0);
          }
      });
   $urlRouterProvider.otherwise('/main');
})
.controller('mainController', function($scope, $http, $window, $state) {
    $window.scrollTo(0, 0);
        
    function setHeaderHoverTextEffect(sectionId, textId, textContent){
        $(sectionId).hover(function() {
            $(textId+" .event-info-span").shuffleLetters();
        });
    }
    setHeaderHoverTextEffect("#strip-1st", "#event-info-1st", "Turniej Robotów");
    setHeaderHoverTextEffect("#strip-2nd", "#event-info-2nd", "Hackathon");
    setHeaderHoverTextEffect("#strip-3rd", "#event-info-3rd", "Warsztaty IT");
    
    $("#strip-1st").click(function(){
        $state.go('^.robots');
    });
    $("#strip-2nd").click(function(){
        $state.go('^.hack');
    });
    $("#strip-3rd").click(function(){
        $state.go('^.workshops');
    });
});