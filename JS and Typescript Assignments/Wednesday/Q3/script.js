function greet(country) {
  console.log(this.name + " from " + country);
}

var user = { name: "Aditya" };


greet.call(user, "India");

var greetLater = greet.bind(user, "Delhi");
greetLater();