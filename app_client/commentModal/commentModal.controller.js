//one major issue: routes - :venueName or eventDetail? 
(function () {

  angular
    .module('myApp')
    .controller('commentModalCtrl', commentModalCtrl);

    //eventData may need to be added to several lines, see reviewFormData
  commentModalCtrl.$inject = ['$modalInstance', '$http', 'eventData'];
  function commentModalCtrl ($modalInstance, $http, eventData) {
    var vm = this;
    vm.eventData = eventData; //note, eventData is defined under resolve for eventDetail controller. right now all eventData has is the venueName

    vm.onSubmit = function () {
      vm.formError = "";
      if (!vm.formData.commentAuthor || !vm.formData.rating || !vm.formData.commentContent || !vm.formData.commentTimestamp) {
        vm.formError = "All fields required, please try again";
        return false;
      } else {
        vm.doAddComment(vm.eventData.eventid, vm.formData); //need to change venueName to eventid eventually
      }
    };

    vm.doAddComment = function (eventid, formData) { //change venueName to eventid
      
      //adds comment to backend 
      //may need to add functionality to update comment? will deal with later. 
      $http.post('/viewevent/:eventid/comments', //need to do by :eventid once route is updated
      {
        commentAuthor : formData.commentAuthor,
        rating : formData.rating,
        commentContent : formData.commentContent,
        commentTimestamp : formData.commentTimestamp
      })
        .success(function (data) {
          vm.modal.close(data);
        })
        .error(function (data) {
          vm.formError = "Your comment has not been saved, please try again";
        });
      return false;
    };

    vm.modal = {
      close : function (result) {
        $modalInstance.close(result);
      },
      cancel : function () {
        $modalInstance.dismiss('cancel');
      }
    };

  }

})();