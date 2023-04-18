//Iniciando o DataTables com JavaScript

$(document).ready(function() {
    $('#inputFile').on('change', function(e) {
      let files = e.target.files;
      let f = files[0];
      let reader = new FileReader();
      reader.onload = function(e) {
        let data = e.target.result;
        let workbook = XLSX.read(data, {
          type: 'binary'
        });
        let sheet_name_list = workbook.SheetNames;
        let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        $('#tabela').DataTable({
          data: xlData,
          columns: Object.keys(xlData[0]).map(function(key) {
            return {
              title: key,
              data: key
            };
          })
        });
      };
      reader.readAsBinaryString(f);
    });
  });