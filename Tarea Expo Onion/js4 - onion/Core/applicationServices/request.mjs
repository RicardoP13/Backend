import prompt from "prompt";
import { addEmployee } from "../domainServices/addEmployee.mjs";

prompt.start();
prompt.get(["name", "title"], function (err, result) {
  console.log("Add Employee name and press Enter:");
  console.log("Add Employee title and press Enter:");
  console.log("  name: " + result.name);
  console.log("  title: " + result.title);
  addEmployee(result.name, result.title);
});
