// Task-3
// Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);

// different type
// const marksValue = student.physics.marks;
const marksValue = student.physics["marks"];
console.log(marksValue);