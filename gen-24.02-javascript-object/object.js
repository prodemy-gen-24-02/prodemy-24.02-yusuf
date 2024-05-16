import readline from "readline";
const userObject = {
    name: "Kent",
    age: 30,
    city: "catophia",
    country: "imagination",
    race: "himalayan",
};

console.log("initial Object: ");
console.log(userObject);
console.log();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const updateUserObject = (key, value) => {
    userObject[key] = value;
    console.log(`\nUpdated object:`);
    console.log(userObject);
};

rl.question("Enter the key you want to update: ", (key) => {
    rl.question("Enter the new value: ", (value) => {
        updateUserObject(key, value);
        rl.close();
    });
});
