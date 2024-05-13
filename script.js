// This is just a mock function that simulates an asynchronous operation
function asyncOperation() {
  return new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 1000));
}

// This is where you manipulate the DOM
async function populateTable() {
  const output = document.getElementById('output');
  
  // Add the loading row
  let row = output.insertRow();
  let cell = row.insertCell();
  cell.colSpan = 2;
  cell.textContent = 'Loading...';
  
  // Perform the asynchronous operations
  const results = await Promise.all([asyncOperation(), asyncOperation(), asyncOperation(), asyncOperation()]);
  
  // Remove the loading row
  output.deleteRow(0);
  
  // Add the result rows
  for (let i = 0; i < results.length; i++) {
    let row = output.insertRow();
    row.insertCell().textContent = `Promise ${i + 1}`;
    row.insertCell().textContent = results[i];
  }
}

// Call the function when the script loads
populateTable();