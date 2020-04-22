export function print (head, body, fileName) {
  /*纯前端实现则不需要转化为table标签，应为其本身就是table标签*/
  //				let excel = head;

  /*前后端合作产生的表格，西安转化为JSON数据，然后转化为table表格*/
  //先转化json
  let arrData = typeof body != 'object' ? JSON.parse(body) : body;
  let excel = '<table>';
  //设置表头
  let row = "<tr>";
  for (let i = 0, l = head.length; i < l; i++) {
    row += "<td>" + head[i].value + '</td>';
  }
  //换行
  excel += row + "</tr>";
  //设置数据
  for (let i = 0; i < arrData.length; i++) {
    let row = "<tr>";
    for (let index in arrData[i]) {
      let value = arrData[i][index].value === "." ? "" : arrData[i][index].value;
      row += '<td>' + value + '</td>';
    }
    excel += row + "</tr>";
  }
  excel += "</table>";
  //转化为excel可识别的标签
  let excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
  excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
  excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel';
  excelFile += '; charset=UTF-8">';
  excelFile += "<head>";
  excelFile += "<!--[if gte mso 9]>";
  excelFile += "<xml>";
  excelFile += "<x:ExcelWorkbook>";
  excelFile += "<x:ExcelWorksheets>";
  excelFile += "<x:ExcelWorksheet>";
  excelFile += "<x:Name>";
  excelFile += "{worksheet}";
  excelFile += "</x:Name>";
  excelFile += "<x:WorksheetOptions>";
  excelFile += "<x:DisplayGridlines/>";
  excelFile += "</x:WorksheetOptions>";
  excelFile += "</x:ExcelWorksheet>";
  excelFile += "</x:ExcelWorksheets>";
  excelFile += "</x:ExcelWorkbook>";
  excelFile += "</xml>";
  excelFile += "<![endif]-->";
  excelFile += "</head>";
  excelFile += "<body>";
  excelFile += excel;
  excelFile += "</body>";
  excelFile += "</html>";
  let uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelFile);
  let link = document.createElement("a");
  link.href = uri;
  link.style = "visibility:hidden";
  link.download = fileName + ".xls";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}