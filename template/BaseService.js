export default class BaseService {
  constructor(HttpService) {
    'ngInject';
    angular.forEach(arguments, (arg, i) => this[BaseService.$inject[i]] = arg);
  }

  // getGraduationStatus() {
  //   return this.HttpService.tokenGet('jyGraduationStatus');
  // }
  //
  // setTimeSetting(data) {
  //   return this.HttpService.tokenPost('jyTimeSetting', data).then(this.HttpService.showMessage);
  // }
}
