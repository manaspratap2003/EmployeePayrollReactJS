class EmployeeModel {
  constructor(name, department, salary, gender, startDate, note) {
    this.name       = name;
    this.department = department;
    this.salary     = Number(salary);
    this.gender     = gender;
    this.startDate  = startDate;
    this.note       = note;
  }
}

export default EmployeeModel;