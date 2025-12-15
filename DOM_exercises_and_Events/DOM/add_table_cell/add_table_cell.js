// Obtendo a tabel HTML
const tableHTML = document.getElementById('sampleTable');
// Criando uma linha na tabela
const insertRow = tableHTML.insertRow(0);
// Inserindo duas células nessa linha
const cell1 = insertRow.insertCell(0);
const cell2 = insertRow.insertCell(1);
// Inserindo conteúdo nessas células
cell1.innerHTML = "NEW CELL1";
cell2.innerHTML = "NEW CELL2";
// console.log(tableHTML[0]);