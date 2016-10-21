(function () {
    'use strict';

    angular
        .module('app')
        .service('TaskService', Service);

    function Service($http, $q) {
        var service = {};

        /*service.GetCurrent = GetCurrent;
        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;*/
        service.Create = Create;
        service.Update = Update;
        service.GetAll = GetAll;
        /*service.Delete = Delete;*/

        return service;

        /*function GetCurrent() {
            return $http.get('/api/users/current').then(handleSuccess, handleError);
        }

        

        function GetById(_id) {
            return $http.get('/api/users/' + _id).then(handleSuccess, handleError);
        }

        function GetByUsername(username) {
            return $http.get('/api/users/' + username).then(handleSuccess, handleError);
        }*/

        function GetAll() {
            return $http.get('/api/tasks').then(handleSuccess, handleError);
        }

        function Create(task) {

            alert("In the task.service.Create");
            return $http.post('/api/tasks', task).then(handleSuccess, handleError);
        }

        function Update(task) {
            return $http.put('/api/tasks/' + task._id, task).then(handleSuccess, handleError);
        }

        /*function Update(user) {
            return $http.put('/api/users/' + user._id, user).then(handleSuccess, handleError);
        }

        function Delete(_id) {
            return $http.delete('/api/users/' + _id).then(handleSuccess, handleError);
        }*/

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
