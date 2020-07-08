// function to generate markdown for README
function generateMarkdown(data) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container" style="background-color: lightblue">
    <h1 class="display-4">Project Name: ${data.name}</h1>
    <h2>Purpose: ${data.usage}.</h2>
    <h3 class="lead">Description: <br>  ${data.description}</h3>
    <ul class="list-group">
      <li class="list-group-item">Project HomePage Link: ${data.homePage}</li>
      <li class="list-group-item">Created by: ${data.author}</li>
      <li class="list-group-item">Contributors on the project: ${data.contributors}</li>
      <li class="list-group-item">Prerequisites: ${data.prerequisites}</li>
    </ul>
      <h4>Check me out on GitHub and LinkedIn: <span class="badge badge-secondary">Contact Me</span></h4>
      <table>
      <tr>
      <td class="list-group-item">${data.github}</td>
      </tr>
      <tr>
      <td class="list-group-item">${data.linkedin}</td>
      </tr>
      </table>
      <p>This project is ${data.license}.</p>
      <p>Tests:${data.tests}</p>
    
  </div>
</div>
</body>
</html>`;
}

module.exports = generateMarkdown;

