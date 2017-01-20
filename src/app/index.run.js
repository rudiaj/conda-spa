(function() {
  'use strict';

  angular
    .module('condaSpa')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
