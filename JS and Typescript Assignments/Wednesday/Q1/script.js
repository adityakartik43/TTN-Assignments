const person = {
    fname: "Aditya",
    lname: "Kartik",
    contact: "999999999",

    getPersonInfo: function (){
        console.log(`Name is ${this.fname + this.lname} and contact number is ${this.contact}`)
    }
}

person.getPersonInfo();

const emp = Object.create(person);

emp.empId = 23334,
emp.company= "TTN",

emp.getEmpInfo = function (){
        console.log(`${this.empId}: ${this.fname + " " + this.lname} and company: ${this.company}`)

    }



emp.getEmpInfo()


const dev = Object.create(emp)

dev.comp = "JS"
dev.exp = 5

dev.getDevInfo = function() {
    console.log(`Name: ${this.fname + this.lname} with EMP ID: ${this.empId} is in ${this.comp} comp and ${this.exp} year of experience`)
}

// console.log(dev)

dev.getDevInfo()