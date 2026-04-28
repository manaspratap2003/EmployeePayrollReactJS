import React, { useEffect, useState } from 'react';
import EmployeeLocalStorage from '../services/EmployeeLocalStorage';
import './PayrollHome.css';

function PayrollHome() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(EmployeeLocalStorage.getAll());
  }, []);

  return (
    <div className="payroll-home">
      <h2>Employee Payroll - Home</h2>
      {employees.length === 0 ? (
        <p className="empty">No employees found. Add employees to get started.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Department</th>
              <th>Salary (Rs.)</th>
              <th>Gender</th>
              <th>Start Date</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, i) => (
              <tr key={emp.id}>
                <td>{i + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>{emp.salary}</td>
                <td>{emp.gender}</td>
                <td>{emp.startDate}</td>
                <td>{emp.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PayrollHome;