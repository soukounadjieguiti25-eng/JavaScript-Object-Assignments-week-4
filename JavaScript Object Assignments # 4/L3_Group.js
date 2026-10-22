
const students = [
    { name: "Ali", major: "Informatics" },
    { name: "Sara", major: "Networking" },
    { name: "John", major: "Informatics" }
];

function groupByMajor(students) {
    const groups = {};

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const major = student.major;

        if (groups[major] === undefined) {
            groups[major] = [];
        }

        groups[major].push(student);
    }

    return groups;
}

const result = groupByMajor(students);
console.log(result);
