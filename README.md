# throw_the_pitch

This is a pitch logger for baseball enthusiasts. Type in a pitch to queue up and when ready, fire away! We'll track your thrown pithes and log them in MySQL.


### Prerequisites

* [Visual Studio Code](https://code.visualstudio.com/)
* [MySQL](https://www.mysql.com/)

### Installation Guide

* You will need to download this folder to your computer. You may do this either by downloading the document as a zip file, or by cloning the git repository to a folder on your computer using Git Bash. In order to do this, click the green button labled "Clone or Download", and select your method of retrieving the file.

* If you want to use the git clone method, your first step is to copyh the link provided. From here, you want to navigate to the desitred location on your computer in your Git Bash terminal, or navigate to the desitred location via your explorer, right click and select "Git Bash Here". Within your Git Bash terminal, type the following: `git clone https:git@github.com:jdavis3333/throw_the_pitch.git`

* Once the repository exists locally on your computer, navigate to within the newly downloaded folder using git bash, or use the "Git Bash Here" method to open the terminal within the correct folder.

* To ensure you are in the coorect folder, type the following and hit enter: `ls`

* Finally, you will need to ensure that all of the required npm packages are installed. Type the following into your Git Bash terminal: `npm i`



### Use

![GIF](/throw.gif)

* Created schema
```
CREATE TABLE pitches
(
	id int NOT NULL AUTO_INCREMENT,
	pitch_type varchar(255) NOT NULL,
    thrown BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
)
```      
* created PUT request
```
 $.ajax("/api/ball/" + id, {
        type: "PUT",
        data: newPitchState
      }).then(
        function() {
          console.log("changed Pitch to", newPitch);
          // Reload the page to get the updated list
          location.reload();  
```
## Built With

* [MySQL](https://www.mysql.com/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [NodeJS](https://nodejs.org/en/)
* [Heroku](https://heroku.com)
* [Express](https://expressjs.com/)
* [Handlebars](https://handlebarsjs.com/)

## Authors

* Joe Davis 

- [Link to Portfolio](https://jdavis3333.github.io/updated-portfolio/)
- [Link to Github](https://github.com/)
- [Link to LinkedIn](https://www.linkedin.com/)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
