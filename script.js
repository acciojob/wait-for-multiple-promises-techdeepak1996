document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");

    // Initially display "Loading..." spanning two columns
    output.innerHTML = `<tr><td colspan="2" class="text-center">Loading...</td></tr>`;

    // Function to create a promise that resolves after a random delay (1-3 seconds)
    function createPromise(index) {
        return new Promise(resolve => {
            const timeTaken = (Math.random() * 2 + 1).toFixed(3); // Random time between 1 and 3 seconds
            setTimeout(() => resolve({ index, time: timeTaken }), timeTaken * 1000);
        });
    }

    // Create and execute 3 promises
    const promises = [createPromise(1), createPromise(2), createPromise(3)];

    Promise.all(promises).then(results => {
        output.innerHTML = ""; // Clear loading row

        results.forEach((result, i) => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>Promise ${i + 1}</td><td>${result.time}</td>`;
            output.appendChild(row);
        });

        // Find max time for total row
        const maxTime = Math.max(...results.map(res => parseFloat(res.time))).toFixed(3);
        const totalRow = document.createElement("tr");
        totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${maxTime}</strong></td>`;
        output.appendChild(totalRow);
    });
});