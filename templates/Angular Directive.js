(function() {
  angular.module('${ModuleName}')
    .directive('${NAME}', ${NAME});

  function ${NAME}() {
    var directive = {
      restrict: 'EA',
      templateUrl: '${TemplateUrl}',
      scope: {
      },
      link: link
    };
    return directive;
  }

  function link(scope, element, attrs) {
  }
})
