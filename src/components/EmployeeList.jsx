import React, { useEffect, useState } from 'react';
import EmployeeCRUDService from '../services/EmployeeCRUDService';
import './EmployeeList.css';

function EmployeeList({ refresh }) {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch]       = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const load = () => setEmployees(EmployeeCRUDService.getAll());

  useEffect(() => { load(); }, [refresh]);

  const handleDelete = (id) => {
    if (window.confirm('Delete this employee?')) {
      EmployeeCRUDService.remove(id);
      load();
    }
  };

  const displayed = search
    ? EmployeeCRUDService.searchByName(search)
    : EmployeeCRUDService.sortBySalary(sortOrder);

  return (
    <div className="emp-list">
      <div className="controls">
        <input placeholder="Search by name..." value={search}
          onChange={e => setSearch(e.target.value)} />
        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
          <option value="asc">Salary: Low to High</option>
          <option value="desc">Salary: High to Low</option>
        </select>
      </div>
      {displayed.length === 0 ? <p>No employees found.</p> : (
        <table>
          <thead>
            <tr>
              <th>Name</th><th>Dept</th><th>Salary</th>
              <th>Gender</th><th>Start</th><th>Note</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayed.map(emp => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>Rs. {emp.salary}</td>
                <td>{emp.gender}</td>
                <td>{emp.startDate}</td>
                <td>{emp.note}</td>
                <td>
                  <button className="del-btn" onClick={() => handleDelete(emp.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeList;