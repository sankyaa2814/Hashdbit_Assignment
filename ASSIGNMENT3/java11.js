const students = [
    {
        student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    },
    {
        student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    },
    {
        student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    }
];

const output = students.map(studentObj => {
    // Get student name (key)
    const studentName = Object.keys(studentObj)[0];
    // Get subjects object
    const subjects = studentObj[studentName];
    // Calculate average
    const total = Object.values(subjects).reduce((sum, score) => sum + score, 0);
    const average = total / Object.values(subjects).length;

    // Return new object with average
    return { [studentName]: { average: average } };
});

console.log(output);
