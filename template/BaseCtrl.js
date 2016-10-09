
export default class BaseCtrl {

  constructor(BaseService, $scope) {
    'ngInject';

    var vm = this;
    $scope.$on('$ionicView.afterEnter', activate);

    function activate() {
      vm.activated = true;
    }
  }
}
