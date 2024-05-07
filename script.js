function getRandomDelay() {
  return Math.floor(Math.random() * 3000) + 1000; // Random time between 1 and 3 seconds
}

function createPromise(id) {
  return new Promise((resolve) => {
    const start = Date.now();
    setTimeout(() => {
      const end = Date.now();
      const timeTaken = (end - start) / 1000; // Convert milliseconds to seconds
      resolve({ id, timeTaken });
    }, getRandomDelay());
  });
}

const promises = [
  createPromise(1),
  createPromise(2),
  createPromise(3)
];

Promise.all(promises)
  .then((results) => {
    const outputElement = document.getElementById('output');

    // Remove the loading row
    const loadingRow = document.getElementById('loading');
    loadingRow.remove();

    results.forEach((result) => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>Promise ${result.id}</td><td>${result.timeTaken.toFixed(3)}</td>`;
      outputElement.appendChild(row);
    });

    // Calculate total time
    const totalTime = results.reduce((acc, result) => acc + result.timeTaken, 0).toFixed(3);
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
    outputElement.appendChild(totalRow);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });