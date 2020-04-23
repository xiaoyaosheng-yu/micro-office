// 虚拟table节点
export class TableNode {
  constructor (options = {}) {
    this.align = options.align || 'left';
    this.border = options.border || 0;
    this.width = options.width || '100%';
  }
}
