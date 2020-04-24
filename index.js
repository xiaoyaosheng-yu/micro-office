import {initData} from './lib/init/index';
import XLSX from 'xlsx';
/**
 * Export
 * @param {*} options
 */

export class MicroOffice {
  constructor () {}
  export (options) {
    this._filename = this._filename = options.filename || 'report';
    this._el = options.el || null; // 挂载点
    this._data = options.data || {};
    if (!this._el && Object.keys(this._data).length === 0) {
      return console.error('data sources must be identified!');
    }
    if (this._el && !this._el.__proto__.constructor === HTMLTableElement) {
      return console.error('el must be an HTMLTableElement!');
    }
    if (this._data && !this._data.__proto__.constructor === Object) {
      return console.error('data must be a Object!');
    }
    initData(this);
  }
}

window.MicroOffice = MicroOffice;

export default MicroOffice;
