(function() {
  'use strict';
  angular.module('${ModuleName}')
    .factory('${NAME}', ${NAME});

  /* @ngInject */
  function ${NAME}() {
    var service = {
      exampleFunction: exampleFunction
    };

    return service;

    function exampleFunction() {
    }
  }
})();
