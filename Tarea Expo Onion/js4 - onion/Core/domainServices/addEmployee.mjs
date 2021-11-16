import Employee from "../models/Employee.mjs";
import { employeesArray } from "../../External/Infrastructure/EmployeesData.mjs";
import { strict as assert } from "assert";
//let assert=require('assert');

//const employee = new Employee('Ramiro', 'student');
//console.log(employee.describe());

export function addEmployee(name, title) {
  let new_employee = new Employee(name, title);
  employeesArray.push(new_employee);
  console.log(employeesArray);
}
