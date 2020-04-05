## Homework

* Create .env.development.local and fill it with your values
* Refactor BlogPage using httpReducer like it is in BlogDetailPage
* Add new functionality Update and Delete Blog entry
  * Create new EditBlogPage wich uses BlogForm to update and delete the blog entry (use [update](https://firebase.google.com/docs/reference/js/firebase.database.Reference?authuser=0#update) and [remove](https://firebase.google.com/docs/reference/js/firebase.database.Reference?authuser=0#remove); to delete you need to know the blog id like .ref(`blogs/${uid}`).remove())
  * Use httpReducer to display the error and loading indicators
  * Create new updatedAt field
  * Display createdAt and updatedAt (if exist) dates at BlogEntry
* Understand [useEffect](https://michalzalecki.com/versatility-and-use-cases-of-react-use-effect-hook/) and [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) Hooks
* Understand [Promises](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)

