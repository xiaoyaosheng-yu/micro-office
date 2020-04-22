import {print} from './print';
export function initData (vm) {
  let el = vm._el;
  let fileName = vm._filename;
  let headData = [];
  let bodyData = [];
  if (!el) {
    return console.log('data sources must be identified!');
  }
  if (el && !el.__proto__.constructor === HTMLTableElement) {
    return console.log('el must be an HTMLTableElement!');
  }
  let tr = el.getElementsByTagName('tr');
  for (let i = 0; i < tr.length; i++) {
    bodyData.push(getRowData(tr[i]));
  }
  print(headData, bodyData, fileName);
}

export function getRowData (tr) {
  let itemList = [];
  let children = tr.children;
  for (let i = 0; i < children.length; i++) {
    itemList.push({
      value: children[i].innerText,
      type: "ROW_HEADER"
    })
  }
  return itemList;
}
