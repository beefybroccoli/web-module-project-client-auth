const API_URL = "http://localhost:5000";
//[POST] to `/api/login`
export const API_URL_POST_Login = API_URL + "/api/login";
//[POST] to `/api/logout`
export const API_URL_POST_Logout = API_URL + "/api/logout";
//[GET] to `/api/friends`
export const API_URL_GET_Friends = API_URL + "/api/friends";
//[GET] to `/api/friends/123`
export const API_URL_GET_Friend = API_URL + "/api/friends/";
//[POST] to `/api/friends`
export const API_URL_POST_Add_Friend = API_URL + "/api/friends";
//if (username === 'lambda' && password === 'school') {
export const userName = "lambda";
export const password = "school";

/*
* If you'd like, you can create multiple "view" components for your routes. You could have a component who's sole purpose is 
.....(public) to render the login form
.....(protected) one for a form for updating a user
.....(protected) another component who's sole purpose is for creating users
.....(protected) another component who's sole purpose is to delete a user.

You will however need an authentication header on all the calls except the login call.
*/

/*
* There is an API built that has authentication built into it. The API holds a list of friends and lets you add, edit, or remove friends from that list. 
* All of the API endpoints (except the login endpoint) are considered "protected", meaning you have to make the request with an authentication token in the header or the API will send back a `401` error. 
* Take your examples from the guided project and use them to build a more sophisticated application. Have fun!
* Once your server is up and running, the URL you'll be able to hit from within your app is `http://localhost:5000`. You will however need an authentication header on all the calls except the login call.
* Take a look at the endpoints that our API has to offer in `server.js`.

* [POST] to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'lambda', password: 'school' }`

* [POST] to `/api/logout`: removes a token from active use. Returns the inactive token. 

* [GET] to `/api/friends`: returns the list of friends.

* [GET] to `/api/friends/123`: returns the friend with the id passed as part of the URL (123 in example).

* [POST] to `/api/friends`: Adds in a new friend.

*/

/*
**Adding New Friends**
* Create a form to collects data for a new friend.
* Make a POST request to add a friend to the database
* Each `friend` item that is in the `friends` array should have the following format:

```js
{
  id: 1
  name: 'Joe',
  age: 24,
  email: 'joe@lambdaschool.com',
}
```
*/

/*
#### Build the App!
* Add a route for a login page and build out a simple login form with username and password inputs and a submit button (design this however you would like).
* The login function should save the returned token to localStorage. You can setup `isLoading` state in your Login component, and show a spinner on your form or in your button while the login request is happening.
* When the request returns, save the token to `localStorage`, then use the history object in your Login component to navigate your user to your FriendsList route
* Create a `<PrivateRoute />` component to protect your other routes. It should check localStorage for a token, and redirect the user to your login route if there is not a token.
* Create a protected route for your friends list. Remember, if the user isn't logged in, navigating to this protected route will redirect them to the login page.
* In your FriendsList component, rendered with `<PrivateRoute />`, you will create a list of your friends that you get from the API.
*/
