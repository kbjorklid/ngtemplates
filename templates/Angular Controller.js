(function() {
  'use strict';

  angular.module('${ModuleName}')
    .controller('${NAME}', ${NAME});

  /* @ngInject */
  function ${NAME}(${dependency}) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;

    activate();

    function activate() { }
  }
})();
