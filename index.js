import {initData} from './lib/init/index';
/**
 * Export
 * @param {*} options
 */

class Export {
  constructor (options) {
    this.el = options.el || null; // 挂载点
    this.data = options.data || {};
    if (!this.el && !this.data) {
      return console.log('data sources must be identified!');
    }
    if (this.el && !this.el.__proto__.constructor === HTMLTableElement) {
      return console.log('el must be an HTMLTableElement!');
    }
    if (this.data && !this.data.__proto__.constructor === Object) {
      return console.log('data must be a Object!');
    }
  }
  export () {
    initData(this.el);
  }
}

window.Export = Export;
