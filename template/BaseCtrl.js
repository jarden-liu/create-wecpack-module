
export default class BaseCtrl {

  constructor(BaseService, $scope,StateService, $loading, $filter) {
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

  // getGraduationStatus() {
  //   this.$loading.show();
  //   return this.service.getGraduationStatus().then(data => {
  //     console.log(data);
  //   }). finally(this.$loading.hide);
  // }


  doRefresh() {
    // setTimeout(this.getGraduationStatus.bind(this), 200);
    this.$scope.$broadcast('scroll.refreshComplete');
  }
}
