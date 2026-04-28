// UC6 - Callback vs Promise demonstration (for Node.js terminal)

const http = require('http');

// Callback style
function getEmployeesCB(callback) {
  http.get('http://localhost:3001/employees', (res) => {
    let data = '';
    res.on('data', chunk => { data += chunk; });
    res.on('end', () => {
      try { callback(null, JSON.parse(data)); }
      catch (e) { callback(e, null); }
    });
  }).on('error', (err) => callback(err, null));
}

// Promise style
function getEmployeesPromise() {
  return new Promise((resolve, reject) => {
    http.get('http://localhost:3001/employees', (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

// Demo runs
console.log('=== Callback Demo ===');
getEmployeesCB((err, data) => {
  if (err) { console.error('Error:', err.message); return; }
  console.log('Employees (Callback):', data);
});

console.log('=== Promise Demo ===');
getEmployeesPromise()
  .then(data => console.log('Employees (Promise):', data))
  .catch(err => console.error('Error:', err.message));

module.exports = { getEmployeesCB, getEmployeesPromise };