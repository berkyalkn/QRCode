
import inquirer from "inquirer";

inquirer
  .prompt([
    {message : "Type in your URL: ",
     name : "URL"   
    }])

  .then((answers) => {
    const url = answers.URL;
  })
  .catch((error) => {
    if (error.isTtyError) {

    } else {
        
    }
  });