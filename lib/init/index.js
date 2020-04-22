import {print} from './print';
export function initData (el) {
  if (!el) {
    return console.log('data sources must be identified!');
  }
  if (el && !el.__proto__.constructor === HTMLTableElement) {
    return console.log('el must be an HTMLTableElement!');
  }
  let thead = el.getElementsByTagName('thead')[0];
  let tbody = el.getElementsByTagName('tbody')[0];
  let th = thead.getElementsByTagName('th');
  let tr = tbody.getElementsByTagName('tr');
  let headData = getHeadData(th);
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
