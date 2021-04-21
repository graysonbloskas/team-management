// Dynamic HTML file to be created from the user's prompts

const Employee = require("../lib/Employees");

const htmlTeam = (team) => {
  
  let html = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Management</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
      <link href="../style.css" rel="stylesheet">
  </head>
  <body>
      <div class="jumbotron jumbotron-fluid">
          <div class="container" style="color: white">
              <h1 class="display-4">My Team</h1>
          </div>
      </div>`;
  
      for (let employee of team) {
    html += `<div class="row">
    <div class="col-sm-6">
    <div class="card-deck">`

    switch (employee.role) {
      
      case "Manager": html += `
      <div class="card" style="width: 18rem;">
      <div class="card-header">
      <h4>${employee.getName()}</h4>
      <h4>${employee.role}</h4>
      `
      break;
      case "Engineer": html += `
      <div class="card" style="width: 18rem;">
      <div class="card-header">
      <h4>${employee.getName()}</h4>
      <h4>${employee.role}</h4>
      `
      break;
      case "Intern": html += `
      <div class="card" style="width: 18rem;">
      <div class="card-header">
      <h4>${employee.getName()}</h4>
      <h4>${employee.role}</h4>
      `
      break;
    }
  
    html += `
        </div>
        
        
        <div class="card-body">
        <p class="card-text">ID: ${employee.getId()}</p>
        <p>Email: <a href="mailto:${employee.getEmail()}" target="_blank">${employee.getEmail()}</a></p>
        `;
        switch (employee.getRole()) {
          case "Manager": html += `<p class="card-text">Office Number: ${employee.getOfficeNumber()}</p>`
          break;
          case "Engineer": html += `<p class="card=text">GitHub Username: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></p>`
          break;
          case "Intern": html += `<p class="card-text">School: ${employee.getSchool()}</p>`
        }
    
     html += `   
      </div>
    </div>
  </div>
  </div>
  </div>`
  }

html += `
  </body>
  
  </html>`

  return html;
}


module.exports = htmlTeam;