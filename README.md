# Tableau UNCHR Connector

The Tableau UNCHR Connector is based on AngularJS and can be used to import data from the UNHCR API into Tableau (see http://www.tableau.com/).

Deployed on https://alexeizamyatin.github.io/tableau-unhcr-connector/

## Usage

### Using the provided website
* Step 1:
  In you Tableau Desktop distribution, add a new datasource and select "Web Data Connector" from the provided list and wait for a new window to open. 


* Step 2:
  Enter https://alexeizamyatin.github.io/tableau-unhcr-connector/ into the search field of the opened window and press the Enter-Key. 

* Step 3:
  Select the data you wish to retrieve from the UNHCR API and press "Download". For more information, follow the instructions provided on the page.

### Cloning/Downloading and starting on local machine
  Alternatively, you can clone/download this project and start the application on a server on you local machine. 
  Execute the following commands in the root directory of the project: 
  * npm install
  * bower install
  * grunt serve
  
Note: you will need to install npm (also comes with node.js) beforehand and then use it to install bower and grunt-cli (npm install bower grunt-cli). See https://www.npmjs.com/package/npm for npm installation instructions. 

Installation via npm will be provided soon. 


## License
Apache License, Version 2.0. See the LICENSE file for more information.
Copyright 2016 Alexei Zamyatin, Philipp Schindler






