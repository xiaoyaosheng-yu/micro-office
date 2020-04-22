import {print} from './print';
export function initData (vm) {
  let el = vm._el;
  let headData = [];
  if (!el) {
    return console.log('data sources must be identified!');
  }
  if (el && !el.__proto__.constructor === HTMLTableElement) {
    return console.log('el must be an HTMLTableElement!');
  }
  // 不应该根据thead和tbody，而应该根据tr
  let thead = el.getElementsByTagName('thead');
  let tbody = el.getElementsByTagName('tbody');
  // 判断thead是否存在
  if (thead.length > 0) {
    let th = thead[0].getElementsByTagName('th');
    headData = getHeadData(th);
  }

  let tr = tbody[0].getElementsByTagName('tr');
  let bodyData = getBodyData(tr);
  print(headData, bodyData, 'report');
}

export function getHeadData (th) {
  let res = [];
  for (let i = 0; i < th.length; i++) {
    res.push({
      value: th[i].innerText,
      "type": "ROW_HEADER_HEADER",
      "datatype": "string"
    })
  }
  return res;
}

export function getBodyData (tr) {
  let res = [];
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName('td');
    let value = getTdData(td);
    res.push(value);
  }
  return res;
}

export function getTdData (td) {
  let res = [];
  for (let i = 0; i < td.length; i++) {
    let value = td[i].innerText;
    res.push({
      value: value,
      type: "ROW_HEADER"
    })
  }
  return res;
}
