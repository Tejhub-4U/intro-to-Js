const students = ["Jignesh", "pranay", "mohiht", "shantan", "Tejith"];





console.log(students.length);

students.push("Parthiv");
console.log(students);

students.pop();
console.log(students)

console.log(students[2])

//forEach() 
//map()
//filter()
//find()

students.forEach((student) => {
    console.log(student);
})

const score = [90, 80, 95, 70, 85];
console.log(score)

const extraScore = score.map((score) => score + 5)
console.log(extraScore)

const topScores = extraScore.filter((score) => score >= 85);
console.log(topScores)

const topper = topScores.find((score) => score >= 95);
console.log(topper)

const student = {
    name: "Tejith",
    age: 18,
    gener: "Male",
    Course: "JavaScript",
    mark: 81,
    "passing year": 2030
};
console.log(student);
console.log(student.name);
console.log(student.mark);
console.log(student["passing year"]);

// arrays of objects

const newStudents = [
    {
        name: "Tejith",
        age: 18,
        mark: 81
    },
    {
        name: "Jignesh",
        age: 18,
        mark: 75,

    },
    {
        name: "Pranay",
        age: 17,
        mark: 90
    }
]
console.log(newStudents);