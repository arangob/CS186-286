(function() {
  console.log("I MADE IT HERE");
  angular.module('myApp', ['ngRoute']).config(myConfig);
  // $routeProvider allows to set up routes 
  function myConfig($routeProvider) {
    $routeProvider // inline template
      .when('/', {
        templateUrl: 'other/layout.html'
      })
      .when('/eventlist', {
        templateUrl: 'other/eventLayout.html'
      })
      .when('/eventdetail', {
        templateUrl: 'eventdetail/eventdetail.html',
        controller: 'EventDetailController',
        controllerAs: 'eventDetailCon'
      })
      .when('/post', {
        templateUrl: 'postevent/postevent.html',
        controller: 'PostEventController',
        controllerAs: 'postEventCon'
      })
      .when('/contact', {
        templateUrl: 'other/contactLayout.html'
      })
      .when('/login', {
        templateUrl: 'other/login.html'
      })
      .when('/register', {
        templateUrl: 'other/register.html'
      })
      .when('/userprofile', {
        templateUrl: 'other/userProfile.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();