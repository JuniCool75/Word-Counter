// import inquirer from "inquirer";

// let answers:{
//     Sentance: string
// } = await inquirer.prompt([
//     {
//         name: "Sentance",
//         type: "input",
//         message: "Enter you Sentance to Word Count: "
//     }
// ])

// let Words = answers.Sentance.trim().split(" ")
// console.log(`Your Sentance Word count ${Words.length}`)



import inquirer from "inquirer";

let answers:{
    Sentance: string
} = await inquirer.prompt([
    {
        name: "Sentance",
        type: "input",
        message: "Enter you Words for Count: "
    }
])

let Words = answers.Sentance.trim().split(" ")
console.log(`Your Word count ${Words.length}`)