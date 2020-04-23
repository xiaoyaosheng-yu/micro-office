import {VtNode} from './../vdom/vt';
export function mergeField (ch) {
  let d = ch.localName === 'th' || ch.localName === 'td' ? ch : ch.getElementsByTagName('th')[0] || ch.getElementsByTagName('td')[0];
  return new VtNode({
    value: d.innerText,
    colspan: d.colSpan,
    rowspan: d.rowSpan,
    nowrap: d.noWrap,
    align: d.align,
    width: d.width
  });
}

export function mergeTd (node) {
  let template = '<td';
  for(let key in node) {
    if (node[key]) {
      template += ' ' + key + '="' + node[key] + '"';
    }
  }
  template += '>' + node.value + '</td>';
  return template;
}