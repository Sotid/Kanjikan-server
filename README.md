# Kanjikan



## Description

This is an app to learn basic Kanji (logographic Japanese characters) and keep track of the lessons completed.

## User Stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
- **Signup:** As an anon I can sign up in the platform so that I can start learning
- **Login:** As a user I can login to the platform so that I can access my current lesson or revisit previous ones
- **Logout:** As a user I can logout from the platform so no one else can use it
- **Add to bookmarks** As a user I can add a kanji to my bookmarks so I can read it again later
- **Delete from bookmarks** As a user I can delete a kanji from my list
- **Edit my profile** As a user I can edit my profile
- **View Completed lessons** As a user I can see the lessons I've already done
- **Search** as I user I can search for an English word and receive the translation in Japanese

## Backlog

User profile:

- see my profile
- change tournament mode to FFA
- Add weather widget
- lottie interactions
- users can bet
- add geolocation to events when creating



# Client / Frontend

## React Router Routes (React App)

| Path                       | Component           | Permissions                | Behavior                                                     |
| -------------------------- | ------------------- | -------------------------- | ------------------------------------------------------------ |
| `/signup`                  | SignupPage          | anon only `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`                   | LoginPage           | anon only `<AnonRoute>`    | Login form, link to signup, navigate to homepage after login |
| `/lessons`                 | LessonsListPage     | user only `<PrivateRoute>` | Shows all lessons                                            |
| `/lessons/kanji/:id`       | KanjiDetailPage     | user only `<PrivateRoute>` | Shows current step of the lesson                             |
| `/lesson/:id/quiz`         | QuizPage            | user only `<PrivateRoute>` | Shows quiz                                                   |
| `/lesson/:id/quiz/results` | LessonCompletedPage | user only `<PrivateRoute>` | Shows lesson completion                                      |
| `/myprofile`               | ProfilePage         | user only `<PrivateRoute>` | Shows personal information and list of bookmarks             |
| `/search-results`          | SearchResultsPage   | user only `<PrivateRoute>` | Shows results of search                                      |
|                            |                     |                            |                                                              |

## Pages

- LoginPage
- SignupPage
- LessonsListPage
- KanjiDetailPage
- QuizzPage
- LessonCompletedPage
- ProfilePage
- SearchPage

## Components

- KanjiCard
- Lesson   
- Bookmarks
- Navbar
- Searchbar

## Services
- Auth Service

 - auth.login(user)
 - auth.signup(user)
 - auth.logout()
 - auth.me()

- Lessons Service

 - lessons.getAll()
 - lessons.getOne(id)
  - lessons.getOneQuiz()

- MyProfile Service
  - myProfile.getOne(id)
  - myProfile.editProfile(id, username, email, password)
  - myProfile.addToBookmarks(id)
  - myProfile.deleteFromBookmarks(id)

- Dictionary Service
  - dictionary.getAll(id)
  - dictionary.getSearchResults(query)



# Server / Backend

## Models

User model

```
{
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  lessonsCompleted: [{type: Schema.Types.ObjectId,ref:'Lesson'}]
  bookmarks: [{type: Schema.Types.ObjectId,ref:'Kanji'}]
}
```

Kanji model

```
 {
   kanji: {type: String, required: true},
   grade: {type:Number},
   stroke_count:{type:Number},
   meanings: [{type:String}],
   kun_readings: [{type:String}],
   on_readings: [{type:String}],
   name_readings: [{type:String}],
   jlpt: {type:Number},
   unicode: {type:String},
   heisig_en:{type:String},
}
```

Lesson model

```
{
  name: { type: String },
  img: { type: String },
  kanji: [
    { kanji: { type: String, required: true } ,
    grade: { type: Number },
    stroke_count: { type: Number } ,
     meanings: { type: String } ,
     kun_readings: { type: String } ,
     on_readings: { type: String } ,
     name_readings: { type: String } ,
     heisig_en: { type: String } ,
    }],
}
  



## API Endpoints (backend routes)

| HTTP Method | URL                                 | Request Body                | Success status | Error Status | Description                                                  |
| ----------- | ----------------------------------- | --------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| POST        | `/auth/signup`                      | {username, email, password} | 201            | 404          | Checks if fields not empty and user not exists, then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                       | {username, password}        | 200            | 401          | Checks if fields not empty, if user exists and if password matches. Then stores user in session |
| GET         | `/auth/logout`                      | (empty)                     | 204            | 400          | Logs out the user                                            |
| GET         | /auth/me                            | (empty)                     | 200            | 401          | Gets current user data                                       |
| GET         | `/api/lessons`                      |                             | 200            | 500          | Show all lessons                                             |
| GET         | `/api/lessons/:id`                  | {id}                        | 200            | 500          | Show specific kanji in a lesson **AND START THE CARDS**      |
|             |                                     |                             |                |              |                                                              |
| **GET**     | **`/api/lesson/:id/quiz`**          | **{id}**                    | **200**        | **400**      | **shows quiz**                                               |
| **GET**     | **`api/lesson/:id/quiz/results`**   | **{id}**                    |                |              | **shows results of the completed quiz**                      |
| GET         | `/api/dictionary`                   |                             | 200            | 404          | shows dictionary page                                        |
| GET         | /api/dictionary/search[?q=str]      |                             | 200            | 404          | sends results of search                                      |
| GET         | /api/myprofile                      |                             | 200            | 500          | shows user`s profile                                         |
| PUT         | /api/myprofile/edit/:id             |                             |                |              |                                                              |
| **DELETE**  | **`/api/myprofile/kanjiId/delete`** | **Saved session**           | **200**        | **404**      | **Deletes user's bookmar**k                                  |
| **POST**    | **/api/myprofile/:kanjiId/add**     | **{id}**                    | **200**        | **400**      | **Adds current kanji to user's bookmarks**                   |
|             |                                     |                             |                |              |                                                              |



## Links

### Trello/Kanban

https://trello.com/b/EBOE2TWZ/kanji

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/Sotid/project-3-client.git)

[Server repository Link](https://github.com/Sotid/project-3-server.git)

[Deployed App Link]()

### Slides

The url to your presentation slides

[Slides Link](