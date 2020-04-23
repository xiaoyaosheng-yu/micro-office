// 虚拟table节点
export class VtNode {
  constructor (options = {}) {
    this.value = options.value || '';
    this.align = options.align || 'left';
    this.nowrap = options.nowrap || '';
    this.colspan = options.colspan || 1;
    this.rowspan = options.rowspan || 1;
    // this.width = options.width || '100%';
  }
}
