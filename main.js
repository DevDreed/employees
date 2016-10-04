var Employee = function() {
  this.firstName = null;
  this.lastName = null;
  this.department = null;
}

var Clinician = function() {
  this.expertise = null;
}

Clinician.prototype = new Employee();

var Operations = function() {
  this.responsibility = null;
}

var Department = function () {
  this.departmentName = null;
}

Department.prototype.setDepartmentName = function (newDepartmentName) {
  this.departmentName = newDepartmentName;
}

var FieldOffice = function() {
  this.city = null;
}

FieldOffice.prototype = new Department();

FieldOffice.prototype.setCity = function (newCity) {
  this.city = newCity;
}

var Headquarters = function() {

}

Headquarters.prototype = new Department();
//Employee 1
var Dustin = new Clinician();
Dustin.firstName = "Dustin";
Dustin.lastName = "Reed";
Dustin.expertise = "phrenologist";
var newDep1 = new FieldOffice();
newDep1.setCity("Marshall");
newDep1.setDepartmentName("Fun Department");
Dustin.department = newDep1;
console.log("Dustin", Dustin);

//Employee 2
var Kelly = new Operations();
Kelly.firstName = "Kelly";
Kelly.lastName = "Reed";
Kelly.responsibility = "accounting";
var newDep2 = new Headquarters();
newDep2.setDepartmentName("Accounting Department");
Kelly.department = newDep2;
console.log("Kelly", Kelly);

//Employee 3
var Briella = new Clinician();
Briella.firstName = "Briella";
Briella.lastName = "Reed";
Briella.expertise = "physical therapist";
var newDep3 = new FieldOffice();
newDep3.setCity("Atlanta");
newDep3.setDepartmentName("Health Department");
Briella.department = newDep3;
console.log("Briella", Briella);

//Employee 4
var Hunter = new Operations();
Hunter.firstName = "Hunter";
Hunter.lastName = "Reed";
Hunter.responsibility = "IT";
var newDep4 = new Headquarters();
newDep4.setDepartmentName("IT Department");
Hunter.department = newDep4;
console.log("Hunter", Hunter);

//Employee 5
var Blain = new Clinician();
Blain.firstName = "Blain";
Blain.lastName = "Reed";
Blain.expertise = "anesthesiologist";
var newDep5 = new FieldOffice();
newDep5.setCity("Tampa");
newDep5.setDepartmentName("Hospital");
Blain.department = newDep5;
console.log("Blain", Blain);

//Logout Employees
console.log(`${Dustin.firstName} ${Dustin.lastName} works as a clinician, in the ${Dustin.department.city} field office, and is a ${Dustin.expertise}.`);
console.log(`${Kelly.firstName} ${Kelly.lastName} works in operations, in the headquarters, and is responsible for ${Kelly.responsibility}.`);
console.log(`${Briella.firstName} ${Briella.lastName} works as a clinician, in the ${Briella.department.city} field office, and is a ${Briella.expertise}.`);
console.log(`${Hunter.firstName} ${Hunter.lastName} works in operations, in the headquarters, and is responsible for ${Hunter.responsibility}.`);
console.log(`${Blain.firstName} ${Blain.lastName} works as a clinician, in the ${Blain.department.city} field office, and is a ${Blain.expertise}.`);
