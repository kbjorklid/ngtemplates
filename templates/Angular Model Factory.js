/*
 * https://medium.com/opinionated-angularjs/angular-model-objects-with-javascript-classes-2e6a067c73bc
 */
(function() {
  angular.module('${ModuleName}')
    .factory('${NAME}', ${NAME}Factory);

  /* @ngInject */
  function ${NAME}Factory() {

    /**
     * Constructor
     */
    function ${NAME}(firstName, lastName) {
        // Public properties.
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * Public method
     */
    ${NAME}.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    }

    var privateProperty = "private";

    function privateFunction() {
        return privateProperty;
    }

    ${NAME}.build = function (data) {
      return new User(
          data.first_name,
          data.last_name
      );
    }

    return ${NAME};
  }
})();
