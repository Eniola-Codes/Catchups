# Bucket List application

Catchups let's you see events or activities to attend or post them for others with the needed details to attend so others can see it.

**End Result**

Click Link Here : https://catchups-by-eniola.vercel.app/
# Description

**Details**

Catchups let's you see events or activities to attend or post them for others with the needed details to attend so others can see it.

The app has three(3) pages which are the all catchups, catchup details and the add catchup.

the all catchup page which is the first page the user visits when entering the website


The application allows you to add events  takes on three input from the user in a form which are :

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
