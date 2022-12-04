# SocialNetworkAPI

# Table-of-Contents
  * [Walk through Video](#walk-through-Video)
  * [Git Repo](#git-repo)
  * [Dependency](#dependency)
  * [User Story](#user-story)
  * [Acceptance Criteria](#acceptance-criteria)
  * [Dependency](#dependency)
  * [Application Invoked](#application-invoked)
  * [Test File Collection](#test-file-collection)



# [Walk through Video](#table-of-contents)
```
https://vimeo.com/777894278
```

# [Git Repo](#table-of-contents)
```
https://github.com/kabirfaisal1/SocialNetworkAPI.git

```

# [User Story](#table-of-contents)
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

```
# [Acceptance Criteria](#table-of-contents)
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
## [Dependency](#table-of-contents)
```
  npm i
  npm install express
  npm install mongoose
  npm install moment
  npm install nodemon

```

## [Application Invoked](#(#table-of-contents))
  To start without debugger
```
   npm run start
```
  To start with debugger
```
  npm run debug
```


## [Test File Collection](#table-of-contents)
Using Insomnia or Postman import file name SocialNetworkApi.postman_collection from the test folder
```
  test/json_ collections/SocialNetworkApi.postman_collection.json
```