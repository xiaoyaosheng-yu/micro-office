
/*
 *  亲测谷歌，火狐，Safari浏览器可用
*/
/*前后端合作产生的表格*/
var data = {
  "title": [ //相当于thead的数据
    {
      "value": "集团",
      "type": "ROW_HEADER_HEADER",
      "datatype": "string"
    },
    {
      "value": "创始人",
      "type": "ROW_HEADER_HEADER",
      "datatype": "string"
    }
  ],
  "data": [ //相当于tbody的数据
    [
      {
        "value": "阿里巴巴",
        "type": "ROW_HEADER"
      },
      {
        "value": "马云",
        "type": "ROW_HEADER"
      }
    ],
    [
      {
        "value": "京东",
        "type": "ROW_HEADER"
      },
      {
        "value": "刘强东",
        "type": "ROW_HEADER"
      }
    ],
    [
      {
        "value": "腾讯",
        "type": "ROW_HEADER"
      },
      {
        "value": "马化腾",
        "type": "ROW_HEADER"
      }
    ]
  ]
};
JSONToExcelConvertor(data.data, "Report", data.title);
  
  /*
   * 原理，转换为excel可识别的table标签
   * Tbody    如果是前后端合作，则代表tbody的数据，如果是纯前端完成，则代表整个table的数据，包括table，thead，tbody，tr，td，th标签
   * FileName   保存的文件名称
   * Thead    如果是前后端合作，则代表thead的数据，如果是纯前端完成，则为空
   */
  function JSONToExcelConvertor(Tbody, FileName, Thead) {
    /*纯前端实现则不需要转化为table标签，应为其本身就是table标签*/
    //				var excel = Thead;
  
    /*前后端合作产生的表格，西安转化为JSON数据，然后转化为table表格*/
    //先转化json
    var arrData = typeof Tbody != 'object' ? JSON.parse(Tbody) : Tbody;
    var excel = '<table>';
    //设置表头
    var row = "<tr>";
    for (var i = 0, l = Thead.length; i < l; i++) {
      row += "<td>" + Thead[i].value + '</td>';
    }
    //换行
    excel += row + "</tr>";
    //设置数据
    for (var i = 0; i < arrData.length; i++) {
      var row = "<tr>";
      for (var index in arrData[i]) {
        var value = arrData[i][index].value === "." ? "" : arrData[i][index].value;
        row += '<td>' + value + '</td>';
      }
      excel += row + "</tr>";
    }
    excel += "</table>";
    //转化为excel可识别的标签
    var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
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
    var uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelFile);
    var link = document.createElement("a");
    link.href = uri;
    link.style = "visibility:hidden";
    link.download = FileName + ".xls";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }