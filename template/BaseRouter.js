import BaseTemplate from './Base.html';
import BaseCtrl from './BaseCtrl';

export default function BaseRouter($stateProvider) {
  'ngInject';
  $stateProvider
    .state('app.Base', {
      url: '/base',
      views: {
        'menuContent': {
          templateUrl: BaseTemplate,
          controller: BaseCtrl,
          controllerAs: 'vm'
        }
      },
      authentication: 'all'
    });
}
