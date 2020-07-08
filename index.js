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
        type: 'checkbox',
        name: 'license',
        message: "Include license URL here.",
        choices: [  
         { key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
        },
        {
        
          key: 'lgpl-3.0',
          name: 'GNU Lesser General Public License v3.0',
          spdx_id: 'LGPL-3.0',
          url: 'https://api.github.com/licenses/lgpl-3.0'
        },
        {
          key: "mpl-2.0",
          name: "Mozilla Public License 2.0",
          spdx_id: "MPL-2.0",
          url: "https://api.github.com/licenses/mpl-2.0"
        },
        {
          key: "agpl-3.0",
          name: "GNU Affero General Public License v3.0",
          spdx_id: "AGPL-3.0",
          url: "https://api.github.com/licenses/agpl-3.0"
        },
        {
          key: "unlicense",
          name: "The Unlicense",
          spdx_id: "Unlicense",
          url: "https://api.github.com/licenses/unlicense"
        },
        {
          key: "apache-2.0",
          name: "Apache License 2.0",
          spdx_id: "Apache-2.0",
          url: "https://api.github.com/licenses/apache-2.0"
        },
        {
          key: "gpl-3.0",
          name: "GNU General Public License v3.0",
          spdx_id: "GPL-3.0",
          url: "https://api.github.com/licenses/gpl-3.0"
        }
      ]
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
