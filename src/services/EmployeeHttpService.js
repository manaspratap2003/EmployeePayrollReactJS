const BASE_URL = 'http://localhost:3001/employees';

// --- CALLBACK PATTERN ---
function getEmployeesCallback(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', BASE_URL, true);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      callback(null, JSON.parse(xhr.responseText));
    } else {
      callback(new Error('Request failed: ' + xhr.status), null);
    }
  };
  xhr.onerror = function () { callback(new Error('Network error'), null); };
  xhr.send();
}

// --- PROMISE PATTERN ---
const EmployeeHttpService = {
  getAll() {
    return fetch(BASE_URL)
      .then(res => { if (!res.ok) throw new Error('GET failed'); return res.json(); });
  },

  add(employee) {
    return fetch(BASE_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(employee)
    }).then(res => res.json());
  },

  update(id, employee) {
    return fetch(BASE_URL + '/' + id, {
      method:  'PUT',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(employee)
    }).then(res => res.json());
  },

  remove(id) {
    return fetch(BASE_URL + '/' + id, { method: 'DELETE' })
      .then(res => res.json());
  },

  // Async/Await pattern
  async getAllAsync() {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Async GET failed');
    return await response.json();
  }
};

export { getEmployeesCallback };
export default EmployeeHttpService;