// Looping
// For Loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("Even Numbers:");
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

console.log("Odd Numbers:");
for (let i = 1; i < 10; i += 2) {
  console.log(i);
}

// Nested Loop
for (let i = 1; i <= 3; i++) {
  console.log("Number:" + i);
  for (let j = 1; j <= 5; j++) {
    console.log("   No:" + j);
  }
}

// For Each Single Array
let num = [1, 2, 3, 4];

num.forEach((numbers, i) => {
  console.log(`Index ${i + 1} : ${numbers}`);
});

// For Each Multi Array
let grades = [
  ["Math", "Science", "English"],
  ["90", "80", "20"],
];

grades.forEach((Items) => {
  Items.forEach((data) => {
    console.log(data);
  });
});

// For of Single Array
let number = [1, 2, 3, 4, 5];

for (let nums of number) {
  console.log(nums);
}

// For of Multi Array
let seatingArrangement = [
  ["Joshua", "Juan"],
  ["Maria", "Angel"],
  ["Andres", "Emilio"],
];

for (let row of seatingArrangement) {
  for (let student of row) {
    console.log(student);
  }
}

// For of Object Loop
let grade = {
  jose: 80,
  maria: 82,
  juan: 90,
  andres: 100,
};

for (let score of Object.values(grade)) {
  console.log(score);
}

// For in Object Loop
let grade = {
  jose: 80,
  maria: 82,
  juan: 90,
  andres: 100,
};

for (let person in grade) {
  console.log(`${person} : ${grade[person]}`);
}
