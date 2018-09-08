# Star Wars React Redux

Was created with [Create React App](https://github.com/facebookincubator/create-react-app) and uses the [Star Wars API](https://swapi.co/) to search for Star Wars characters.

This file is created with intent to make people work on this project


########----ABOUT------######
This project has a login screen which let starwar characters login and then allows you to search planets. On typing anything in search input a list with all planets similar to input value will appear. Bigger the planet population bigger will be its size. On click of the list a overlay will appear displaying all the planet information.


########---How to run-----######
To run simply download this project and unzip or clone this repository https://github.com/upenderbhardwaj/react-starwars-login-planet
1)  npm i // to install all node packages
2)  npm start // to run project on localhost
3)  npm test {fileName.spec.js} // to run test case

####--Enable CORS--####
#It is a demo project which uses the starwar api. Since this api is on http and we are normally on local we have to allow CORS with the help of CORS enable add on in chrome or firefox. Otherwise this app will not work.

####---Test Cases---#####
#Test case are added for demo purpose only for component Overlay. To run this type like npm test OverlayBottomTop.spec.js 
Test cases are written in Enzyme and are configured in project to generate a report to show test case status for all files.


##############-- -------Detailed Design ------ -------########
  This project does not show a particular approach towards doing similar things to demonstrate varied ways in which react can use composition model
  Functionality includes a login screen which takes username and password(both case sensitive) and let you enter into the next page where a search bar is displayed for searching star war planets.
  Username is character name and password is its birth year.
  If usernamem is not Luke Skywalker you are only allowed to search 15 times in a minute(please note that each character typing is considered as one search)
  It has a logout button which take to login page.
  To search simply click on input box and start typing. Result will be shown along the way user types.
  Search can be little slow since it is getting values form API and it takes time
  List shown is clickable and planet with bigger population is shown in bigger fonts(Coding thing --This can be improved from $if to $swtich)
  On clicking on any list Item an overlay with fantastic Darth vader theme will appear showing details of that planet.
  Overlay has X button on top right to close it.
  
########-----Libraries and Versioning------########
Latest version of react, redux and React-redux is used for this project.
Along with latest version of Jest and Enzyme for unit tests.
Redux is used to store data received from API calls and React-redux is use to connect react and redux
React-custom-scroll is used to add scroll bar. It is cross browser compatible

#########-----STYLES---------###########
 Currently css is used for each files separately and is used by importing in each component.
 Global css is also present and is included in root of this file mainly for backgroud image and basic tags styles.
 For big project using pre-processor will be suggested

#########-------Coding standards and improvements-------##########

   Lifting states up in main component is done for login page which is an ideal approach.
   For search component internal state is not used and data is managed at child level only.
   For making api calls a separate service file where various service is called using browser fetch method. It has a lot of downsides like it return promise which does not work well with older version of browsers. To overcome this axios is suggested but since it is a small project we have made our way with fetch().
   Normal CSS is used but for big project using pre-processor will be suggested
   This project includes stateless components and statefull component which have their own benefits/drawbacks.
   Redux is implemented which as actions, reducers, store and redux Thunk is used as middleware
   Redux is only used for making API calls and storing end results.
   Life cycle hooks like componentWillReceiveProps(){} are used to get redux data.
   No comments are added as this code is fairly simple to understand. In large project adding comments is suggested
  
  
  
  ***********-------------End Of File---------------------**********


