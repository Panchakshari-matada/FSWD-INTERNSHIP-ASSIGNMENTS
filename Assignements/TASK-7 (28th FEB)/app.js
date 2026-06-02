// Student Manager using Arrays and Objects

let students = [
    {
        name: "Rahul",
        marks: [80, 75, 90]
    },
    {
        name: "Priya",
        marks: [70, 85, 88]
    },
    {
        name: "Amit",
        marks: [60, 65, 70]
    }
];

// Function to calculate average
function calculateAverage(marks) {
    let sum = 0;

    for(let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    return sum / marks.length;
}

// Display student details
students.forEach(function(student) {

    let avg = calculateAverage(student.marks);

    console.log("Student Name:", student.name);
    console.log("Marks:", student.marks.join(", "));
    console.log("Average:", avg);
    console.log("----------------------");

});