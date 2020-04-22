import {initData} from './lib/init/index';
/**
 * Export
 * @param {*} options
 */

class Export {
  constructor (options) {
    this._el = options.el || null; // 挂载点
    this._data = options.data || {};
    if (!this._el && Object.keys(this._data).length === 0) {
      return console.log('data sources must be identified!');
    }
    if (this._el && !this._el.__proto__.constructor === HTMLTableElement) {
      return console.log('el must be an HTMLTableElement!');
    }
    if (this._data && !this._data.__proto__.constructor === Object) {
      return console.log('data must be a Object!');
    }
  }
  export () {
    initData(this);
  }
}

window.Export = Export;
