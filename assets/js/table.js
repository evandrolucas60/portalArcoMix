document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#inputFile').addEventListener('change', handleFileSelect, false);
});

function handleFileSelect(e) {
  var files = e.target.files;
  var f = files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    var data = e.target.result;
    var workbook = XLSX.read(data, {
      type: 'binary'
    });
    var sheet_name_list = workbook.SheetNames;
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    createTable(xlData);
  };
  reader.readAsBinaryString(f);
}

function createTable(data) {
  var table = document.querySelector('#tabela');
  var headers = Object.keys(data[0]);
  var headerRow = '<thead><tr>';
  headers.forEach(function (header) {
    headerRow += '<th>' + header + '</th>';
  });
  headerRow += '</tr></thead>';
  table.innerHTML = headerRow;
  $('#tabela').DataTable({
    data: data,
    columns: headers.map(function (header) {
      return {
        title: header,
        data: header
      };
    })
  });
}