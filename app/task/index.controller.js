(function () {
    'use strict';

    angular
        .module('app')
        .controller('Task.IndexController', taskController);

    function taskController($window, TaskService, FlashService) {
        var vm = this;

        vm.user = null;
        vm.createTask = createTask;        
        vm.updateTask = updateTask;

        initController();

        function initController() {
            // get current user
            /*UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });*/
            alert("in the controller");
        } 

        function createTask() {

            alert("in the createTaskFunction");
            
            TaskService.Create(vm.task)
            .then(function () {
                    FlashService.Success('Task created');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

        function updateTask() {

            alert("in the updateTask Function");
            
            TaskService.Update(vm.task)
            .then(function () {
                    FlashService.Success('Task updated');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }         
    }

})();