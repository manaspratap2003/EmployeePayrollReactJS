const BASE_URL = 'http://localhost:3001/employees';

const EmployeePayrollService = {
  // GET all employees
  getEmployees() {
    return fetch(BASE_URL)
      .then(res => { if (!res.ok) throw new Error('GET failed'); return res.json(); });
  },

  // GET single employee by id
  getById(id) {
    return fetch(BASE_URL + '/' + id)
      .then(res => { if (!res.ok) throw new Error('Employee not found'); return res.json(); });
  },

  // POST - add new employee
  addEmployee(employee) {
    return fetch(BASE_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(employee)
    }).then(res => { if (!res.ok) throw new Error('POST failed'); return res.json(); });
  },

  // PUT - update employee
  updateEmployee(id, employee) {
    return fetch(BASE_URL + '/' + id, {
      method:  'PUT',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(employee)
    }).then(res => { if (!res.ok) throw new Error('PUT failed'); return res.json(); });
  },

  // DELETE - remove employee
  deleteEmployee(id) {
    return fetch(BASE_URL + '/' + id, { method: 'DELETE' })
      .then(res => { if (!res.ok) throw new Error('DELETE failed'); return res.json(); });
  }
};

export default EmployeePayrollService;