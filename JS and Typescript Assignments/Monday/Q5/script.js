let employees = [
  { name: "Aditya", age: 25, salary: 6000, dob: "1999-02-10" },
  { name: "Kartik", age: 19, salary: 800, dob: "2005-06-15" },
  { name: "Neha", age: 30, salary: 7000, dob: "1994-09-21" },
  { name: "Kiran", age: 22, salary: 900, dob: "2002-11-05" },
  { name: "Mohit", age: 22, salary: 10000, dob: "2002-12-22" },
];

var highSalary = employees.filter((emp) => emp.salary > 5000);

console.log(highSalary);

var gpByAge = employees.reduce((grp, emp) => {
  if (!grp[emp.age]) {
    grp[emp.age] = [];
  }
  grp[emp.age].push(emp);
  return grp;
}, {});

console.log(gpByAge);

let updatedEmp = employees.map((emp) => {
  if (emp.salary < 1000 && emp.age > 20) {
    emp.salary *= 5;
  }
  return emp;
});

console.log(updatedEmp);
