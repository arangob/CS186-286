(function() {
    angular.module('myApp').controller('EventDetailController', EventDetailController);
    function EventDetailController($http) {
        var vm = this;
        vm.updateSaved = function() {
            var img = document.getElementById('bookmark').src;
            console.log("HELL I'M IN eventdetail_controller", img);
            if (img.indexOf('unbooked.png') != -1) {
                document.getElementById('bookmark').src = 'public/bootstrap/images/booked.png';
            }
            else {
                document.getElementById('bookmark').src = 'public/bootstrap/images/unbooked.png';
            }
        };
    }
})();