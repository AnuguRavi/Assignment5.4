var EmployeeOne = {
    name: "Ravi Anugu",
    age: 23,
    salary: 10000,
    address: {
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500084
    }
};
var EmployeeTwo = {
    name: "Dakshina Murthy",
    age: 23,
    salary: 10000,
    address: {
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500084
    }
};
var Employee = [EmployeeOne, EmployeeTwo];
console.log("Name: ", Employee[1].name);
console.log("Age: ", Employee[1].age);
console.log("Salary: ", Employee[1].salary);
console.log("City: ", Employee[1].address.city);
console.log("State: ", Employee[1].address.state);
console.log("Pincode: ", Employee[1].address.pincode);