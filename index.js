/* global dscc, Chart */
dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });

function drawViz(message) {
const table = message.tables.DEFAULT;          // array of rows
if (!table || table.length === 0) {
document.body.innerHTML = 'No data';
return;
}

// First dimension (date) + second dimension (category) concatenated for label
const labels = table.map(
r => ${r['dim0']} – ${r['dim1']}
);
const values = table.map(r => r['metric0']);

// Clear previous render
document.body.innerHTML = '<canvas id="cv"></canvas>';
const canvas = document.getElementById('cv');
canvas.width  = dscc.getWidth();
canvas.height = dscc.getHeight();

new Chart(canvas.getContext('2d'), {
type: 'bar',
data: {
labels,
datasets: [{
data: values,
backgroundColor: '#2196f3'
}]
},
options: {
plugins: { legend: { display: false } },
animation: false,
responsive: false
}
});
}
