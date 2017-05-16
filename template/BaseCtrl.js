
export default class BaseCtrl {

  constructor(BaseService, $scope) {
    'ngInject';
    angular.forEach(arguments, (arg, i) => this[BaseCtrl.$inject[i]] = arg);
    this.service = BaseService;
    $scope.$on('$ionicView.afterEnter', this.activate.bind(this));
  }

  activate() {
    if (!this.activated) {
      // this.getGraduationStatus().finally(() => {
      //   this.activated = true;
      // });
    }
  }
}
