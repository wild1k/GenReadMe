const inquirer = require("inquirer");
const fs = require("fs"); 
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function promptUser(){ 
return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Project Name?"
      },
      {
        type: "input",
        name: "usage",
        message: "This project is useful for?"
      },
      {
        type: "input",
        name: "description",
        message: "Project description?"
      },
      {
        type: "input",
        name: "homePage",
        message: "What is the URL for your project?"
      },
      {
        type: "input",
        name: "author",
        message: "Who created this project?"
      },
       {
        type: "input",
        name: "contributors",
        message: "Who contributed to this project?"
      },
       {
        type: "input",
        name: "prerequisites",
        message: "What packages are necessary?"
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL."
      },  
      {
        type: "input",
        name: "licensesName",
        message: "Name of license"
      },
      {
        type: "input",
        name: "licenses",
        message: "Include license URL here."
      },
    
      {
        type: "input",
        name: "installCommands",
        message: "What dependencies were used?"
      },
      {
        type: "input",
        name: "tests",
        message: "Test Commands?"
      },
    
]);
}


// function to write README file
// function writeToFile(data, ) {
//   console.log("writing")
// }
// writeToFile(generateMarkdown.data);
// function to initialize program
async function init() {
    console.log("hi")
    try {
      const data = await promptUser();
  
      const html = generateMarkdown(data);
  
      await writeFileAsync("index.html", html);
  
      console.log("Successfully wrote to index.html");
    } catch(err) {
      console.log(err);
    }
}

// function call to initialize program
init();
