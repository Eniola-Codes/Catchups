# Bucket List application

A BucketList application which you can use to set activities or task you want to do in the future, or you have dont in the past.

**End Result**

Click Link Here : https://bucketlistapp-by-eniola.netlify.app/
# Description

**Details**

My bucket list application is used to set activities which you would love to do in the future, or that you have done in the past.

The application takes on three input from the user in a form which are :

- The Task
- The Date
- Status (Which can take on only one of the three values below)
    - Completed
    - Not Completed
    - Failed

![Form](https://github.com/Eniola-Codes/Bucket-List-App/blob/main/src/asset/bucketform.png?raw=true)

The form comes with a validation, if you input an invalid value, you will get an error message in a modal and the form data will not be processed. 

![Error messsage](https://github.com/Eniola-Codes/Bucket-List-App/blob/main/src/asset/bucketerror.png?raw=true)

On the other hand, when you submit a valid value,an item is added to the bucket list

![Bucket list item](https://github.com/Eniola-Codes/Bucket-List-App/blob/main/src/asset/bucketitem.png?raw=true) 

**Technologies**

Technologies i used to build this are React.js and css

I used React.js framework to bootstrap this project because of the below functionalities : 

- Seperation of concerns (Having leaner files and components by breaking down the code into smaller parts)
- Prop drilling to pass some data from component to component with ease.
- Css modules which prevent clashing of classnames around components therefore avoiding unwanted results

# Installation and Running

git clone or pull the project using your terminal, open the project folder on your local laptop in a code editor and run "npm start" in your editors terminal.
