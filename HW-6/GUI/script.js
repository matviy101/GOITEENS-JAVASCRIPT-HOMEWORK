let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

for (let even = 2; even <= 20; even += 2) {
    console.log(even);
}


for (let num = 1; num <= 10; num++) {
    console.log("7 x" + num + "=" + (7 * num));
}

let n = 9;

for (let int = 1; int <=20; int++) {
    if (int >= n) {
        break;
    }
    console.log(int);
}

let w = 1;

while (w <= 20) {
  if (w % 3 === 0) {
    w++; 
    continue;
  }

  console.log(w);
  w++;
}
