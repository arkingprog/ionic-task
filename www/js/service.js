  angular.module('starter.service',[])
    .factory('Users',function($http){
      return{
        getUsers:function(){
          return $http.get('../data/users.json');
        }
      }
    });

