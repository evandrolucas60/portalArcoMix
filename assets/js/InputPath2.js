/* Lê o arquivo .xlsx */
const filePath = './assets/archives/PM.xlsx';
const req = new XMLHttpRequest();
req.open('GET', filePath, true);
req.responseType = 'arraybuffer';
req.onload = function(e) {
  const data = new Uint8Array(req.response);

  /* Lê a planilha */
  const workbook = XLSX.read(data, { type: 'array' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  /* Salva os dados no localStorage */
  const dataKey = 'meus_dados';
  const jsonDataString = JSON.stringify(jsonData);
  localStorage.setItem(dataKey, jsonDataString);

  /* Cria a tabela HTML */
  const table = document.createElement('table');
  table.border = '1';

  /* Cria o cabeçalho da tabela */
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  for (let i = 0; i < jsonData[0].length; i++) {
    const headerCell = document.createElement('th');
    headerCell.textContent = jsonData[0][i];
    headerRow.appendChild(headerCell);
  }
  thead.appendChild(headerRow);
  table.appendChild(thead);

  /* Cria o corpo da tabela */
  const tbody = document.createElement('tbody');
  for (let i = 1; i < jsonData.length; i++) {
    const dataRow = document.createElement('tr');
    for (let j = 0; j < jsonData[i].length; j++) {
      const dataCell = document.createElement('td');
      dataCell.textContent = jsonData[i][j];
      dataRow.appendChild(dataCell);
    }
    tbody.appendChild(dataRow);
  }
  table.appendChild(tbody);

  /* Insere a tabela na página */
  const tabela = document.querySelector('#tabela');
  tabela.appendChild(table);
};
req.send();
