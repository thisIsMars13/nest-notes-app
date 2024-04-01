## This is note taking app using nestjs with the following feature
- Authentication using Google OAuth2.0
- CUD Operations
- Unit Testing(incomplete)

## Installation

```bash
$ npm install
```


## Unit Test

```bash
# unit tests
$ npm run test

```

## Installation
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## How to test in local environment
* Required tools and environment
  - Postman
  - NodeJS: Version: 20.8.1
  - NestJS: v 9.0.0
  - MongoDB compass
    
1. For the application to work, I will be providing a env file containing credentials.
1. Navigate through your browser and login by going to the link http://localhost:3000/api/auth/google/login, complete the login process using email address.
2. Open the browser console and navigate through Application tab and copy the app cookie ![image](https://github.com/thisIsMars13/nest-notes-app/assets/78244512/9c02f1f1-2b9a-439b-9b00-2d01a26c33dc)

3. Go to Postman, open new tab and set headers values by adding cookies that was copied from the browser. This will allow us to perform CRUD operations by imitating the session values from the browser. ![image](https://github.com/thisIsMars13/nest-notes-app/assets/78244512/e00ac728-4cd4-4fc2-8cd8-75d76e9ef048)
### After succesful login we can test the following CRUD operations
* Create note
- Method: 'POST' http://localhost:3000/api/note.
- Make sure to add the JSON data { title, content } for the body
![image](https://github.com/thisIsMars13/nest-notes-app/assets/78244512/31b26715-0fd9-4c1c-b517-6db8d414aafb)

* Get all notes of the user
- METHOD: 'GET'  http://localhost:3000/api/note

* Get the specific note by id
- METHOD: 'GET'  http://localhost:3000/api/note/{id_here}

* Update note details
- METHOD: 'PUT'  http://localhost:3000/api/note/{id_here}
- Make sure to add the JSON data { title, content } for the body
  ![image](https://github.com/thisIsMars13/nest-notes-app/assets/78244512/c3596eed-681d-428e-878f-0b576abb3652)

  * Delete note records
- METHOD: 'DELETE'  http://localhost:3000/api/note/{id_here}

