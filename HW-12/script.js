const user = {
    name: "user1",
    password: "password",
    age: 19,
}

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (let key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

function countProps(obj) {
  return Object.keys(obj).length;
}

console.log(countProps(user));





function findBestEmployee(employees) {
  let bestEmployee = null;
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  return bestEmployee;
}


const employees = {
  Jack: 29,
  Sofia: 35,
  David: 42,
  Nastya: 31
};

console.log(findBestEmployee(employees)); 


function countTotalSalary(employees) {
  let total = 0;

  for (const salary of Object.values(employees)) {
    total += salary;
  }

  return total;
}


const employees2 = {
  John: 1000,
  Sarah: 1200,
  David: 1500,
  Kate: 1100
};

console.log(countTotalSalary(employees2));


function getAllPropValues(arr, prop) {
  const values = [];

  for (const obj of arr) {
    if (obj.hasOwnProperty(prop)) {
      values.push(obj[prop]);
    }
  }

  return values;
}

const products = [
  { name: "Laptop", price: 1500, quantity: 4 },
  { name: "Phone", price: 800, quantity: 10 },
  { name: "Tablet", price: 600, quantity: 5 },
  { name: "Monitor", price: 300 }
];

console.log(getAllPropValues(products, "name"));

console.log(getAllPropValues(products, "quantity"));

console.log(getAllPropValues(products, "category"));




function calculateTotalPrice(allProducts, productName) {
  let total = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      total += product.price * product.quantity;
    }
  }

  return total;
}


const products2 = [
  { name: "Laptop", price: 1500, quantity: 4 },
  { name: "Phone", price: 800, quantity: 10 },
  { name: "Tablet", price: 600, quantity: 5 },
  { name: "Monitor", price: 300, quantity: 3 },
  { name: "Phone", price: 750, quantity: 2 } 
];

console.log(calculateTotalPrice(products2, "Laptop"));  
console.log(calculateTotalPrice(products2, "Phone"));   
console.log(calculateTotalPrice(products2, "Tablet"));  
console.log(calculateTotalPrice(products2, "Monitor")); 
console.log(calculateTotalPrice(products2, "Camera"));  


