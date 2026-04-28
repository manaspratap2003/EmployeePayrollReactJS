import EmployeeLocalStorage from './EmployeeLocalStorage';

const EmployeeCRUDService = {
  getAll()             { return EmployeeLocalStorage.getAll(); },
  add(emp)             { return EmployeeLocalStorage.add(emp); },
  update(emp)          { EmployeeLocalStorage.update(emp); },
  remove(id)           { EmployeeLocalStorage.remove(id); },
  searchByName(q)      {
    return EmployeeLocalStorage.getAll()
      .filter(e => e.name.toLowerCase().includes(q.toLowerCase()));
  },
  sortBySalary(order)  {
    return [...EmployeeLocalStorage.getAll()]
      .sort((a,b) => order === 'asc' ? a.salary-b.salary : b.salary-a.salary);
  },
  getById(id)          {
    return EmployeeLocalStorage.getAll().find(e => e.id === id) || null;
  }
};

export default EmployeeCRUDService;