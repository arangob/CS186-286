(function () {
    
    angular.module('myApp').controller('EventDetailController', EventDetailController);
        
    //EventDetailController.$inject = ['$routeParams', '$modal', "$http"]; 
    function EventDetailController ($http, $routeParams, $scope) {
        var vm = this; 
        
        //Kristen - for testing
        vm.name = 'Kc';
        
        //array to save data from get response
        $scope.resultArr = [];
        
        //vm.venueName = $routeParams.venueName //let's change this once we have routes for each event to :eventid
       
        //KC - variable to access through html file
        vm.eventidloc = $routeParams.eventid;
       
        //KC - variable to pass through get request 
        var eventid = $routeParams.eventid; //from our CRUD, it doesn't look like we have a URL /viewEvent/:eventid 
        //we do have a get for the venue name, but not the specific event
        
        //$http.get('/api/viewevent/:eventid/comments')
        //$http.get('/api/events/' + vm.venueName)
        //KC - changed success to then 
        //KC - changed data to response
        //KC - changed route to events/:eventid
        $http.get('/api/events/' + eventid).then(function(response) { 
            $scope.oneEvent = response.data; 
            // angular.forEach(vm.oneEvent, function(value, index){
            //   $scope.resultArr.push(value);  
            // })
    //      vm.data = { eventid : data }; 
    //      //MJ: I'm not sure how to pull the venueName name from the schema/model in events.js
    //      vm.pageHeader = {
    //                  title: vm.data.eventid.name
    //              };
    //          })
    //          .error(function(e) {
    //              console.log(e);
              });
        
    //      vm.popupCommentForm = function () {
    //          var modalInstance = $modal.open({
    //              templateUrl: '/commentModal/commentModal.view.html',
    //              controller: 'commentModalCtrl as vm',
                
    //              //need to look this up 
    //              resolve : {
    //                  eventData : function () { //eventData is a local variable referenced in commentModal files
    //                      return {
    //                          eventid : vm.eventid,
    //                          eventName : vm.data.eventid.name
    //                      };
    //                  }
    //              }
    //          });
            
    //       modalInstance.result.then(function (data) {
    //           vm.data.eventid.comment.push(data); //not sure if this is right
    //       })
            
    //      }
      }
})();