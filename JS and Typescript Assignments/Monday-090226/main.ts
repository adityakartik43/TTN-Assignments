// Q1

interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}


// Q2

class UserManager {
  private users: User[] = [];

  addUser = (user: User): void => {
    this.users = [...this.users, user];
  };

  removeUser = (user: User): void => {
    this.users = [...this.users, user];
  };

  getUserbyId = (id: number): User | undefined => {
    return this.users.find((user) => user.id === id);
  };

  getAllUsers = (): User[] => {
    return [...this.users];
  };


  // Q3

  getUser = (name: string = "Guest"): string => {
    return `Hello, ${name}! Welcome.`;
  };
}


//Q4

function printUserDetails(user: User): void {
  const { id, name, email, age } = user; 

  console.log(`ID: ${id}`);
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Age: ${age ?? "Not Provided"}`);
}


const mg = new UserManager();

mg.addUser({
  id: 1,
  name: "Aditya",
  email: "aditya@gmail.com",
  age: 21
})

const usr = mg.getUserbyId(1);

if (usr) {
  printUserDetails(usr);
}

console.log(mg.getUser());
console.log(mg.getUser("Aditya"));
console.log(mg.getAllUsers());



