const KEY = 'employeePayrollData';

const EmployeeLocalStorage = {
  getAll() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('LocalStorage read error:', e);
      return [];
    }
  },

  saveAll(employees) {
    localStorage.setItem(KEY, JSON.stringify(employees));
  },

  add(employee) {
    const list = this.getAll();
    employee.id = Date.now();
    list.push(employee);
    this.saveAll(list);
    return employee;
  },

  update(updated) {
    const list = this.getAll().map(e => e.id === updated.id ? updated : e);
    this.saveAll(list);
  },

  remove(id) {
    const list = this.getAll().filter(e => e.id !== id);
    this.saveAll(list);
  },

  clear() {
    localStorage.removeItem(KEY);
  }
};

export default EmployeeLocalStorage;