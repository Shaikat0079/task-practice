// Task 1
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

console.log(colors["golden rod"])

// Task 2

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car["passenger capacity"] = 5;

console.log(car)

// Task 3

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student["physics"]['marks'])

// task 4

let singer = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

console.log(Object.keys(singer).length)

// task 5

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
for (const key in myObject){
    console.log("key:",key+" | "+"type:",typeof(myObject[key]))
    // console.log(key)
}
