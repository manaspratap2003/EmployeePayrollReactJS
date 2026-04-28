import React, { useState } from 'react';
import EmployeeModel from '../EmployeeModel';
import './EmployeeForm.css';

const departments = ['HR', 'IT', 'Finance', 'Marketing', 'Operations'];

function EmployeeForm({ onAdd }) {
  const [form, setForm] = useState({
    name: '', department: '', salary: '', gender: 'Male', startDate: '', note: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emp = new EmployeeModel(
      form.name, form.department, form.salary,
      form.gender, form.startDate, form.note
    );
    onAdd(emp);
    setForm({ name:'', department:'', salary:'', gender:'Male', startDate:'', note:'' });
  };

  return (
    <form className="emp-form" onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <input  name="name"       placeholder="Full Name"    value={form.name}       onChange={handleChange} required />
      <select name="department" value={form.department}    onChange={handleChange} required>
        <option value="">Select Department</option>
        {departments.map(d => <option key={d}>{d}</option>)}
      </select>
      <input  name="salary"     placeholder="Salary"       value={form.salary}     onChange={handleChange} type="number" required />
      <select name="gender"     value={form.gender}        onChange={handleChange}>
        <option>Male</option><option>Female</option><option>Other</option>
      </select>
      <input  name="startDate"  type="date"                value={form.startDate}  onChange={handleChange} required />
      <input  name="note"       placeholder="Note"         value={form.note}       onChange={handleChange} />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;