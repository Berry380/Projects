document.getElementById('uploadBtn').addEventListener('click', handleUpload);
document.getElementById('searchBtn').addEventListener('click', handleSearch);

let logs = [];

function handleUpload() {
  const fileInput = document.getElementById('logFileInput');
  const file = fileInput.files[0];
  if (!file) return alert('Please select a log file.');

  const reader = new FileReader();
  reader.onload = function(e) {
    const content = e.target.result;
    if (file.name.endsWith('.csv')) {
      logs = parseCSV(content);
    } else if (file.name.endsWith('.json')) {
      logs = JSON.parse(content);
    }
    analyzeLogs();
    renderChart();
  };
  reader.readAsText(file);
}

function parseCSV(data) {
  const lines = data.split('\n');
  const headers = lines[0].split(',');
  return lines.slice(1).map(line => {
    const values = line.split(',');
    let obj = {};
    headers.forEach((h, i) => obj[h.trim()] = values[i]?.trim());
    return obj;
  });
}

function analyzeLogs() {
  // Example: Detect failed logins
  const alerts = logs.filter(log => log.event && log.event.toLowerCase().includes('failed'));
  document.getElementById('alerts').innerText = alerts.length
    ? `Detected ${alerts.length} suspicious events!`
    : 'No suspicious events detected.';
}

function renderChart() {
  const ctx = document.getElementById('eventChart').getContext('2d');
  const eventTypes = {};
  logs.forEach(log => {
    const type = log.event || 'Unknown';
    eventTypes[type] = (eventTypes[type] || 0) + 1;
  });
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(eventTypes),
      datasets: [{
        label: 'Event Count',
        data: Object.values(eventTypes),
        backgroundColor: '#2980b9'
      }]
    }
  });
}

function handleSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const results = logs.filter(log =>
    Object.values(log).some(val => val && val.toLowerCase().includes(query))
  );
  document.getElementById('searchResults').innerHTML = results.length
    ? `<pre>${JSON.stringify(results, null, 2)}</pre>`
    : 'No results found.';
}