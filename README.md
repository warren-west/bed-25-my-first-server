# My First Server
Written with JavaScript, running on NodeJS.

## Installation
Clone this project with the command:
```
git clone https://github.com/warren-west/bed-25-my-first-server.git
```
## Usage
### Basic Server
Start the server with the command:
```
node server
```
This will start on port 8888.
- First try navigate to http://localhost:8888 in your browser to ping the server.
- Next try manipulating the URL in the address bar to http://localhost:8888/home
- then http://localhost:8888/login
- then http://localhost:8888/admin
- and lastly something else like http://localhost:8888/blablabla
<br>
Notice the different responses sent to your browser.

### Pet Server
Start the *pet* server with the command:
```
node pet-server
```
This will start on port 8000.

Try navigating to the different URLs:
- `localhost:8000/pets`: Retrieves a list of pets.
- `localhost:8000/vets`: Retrieves a list of vets.
- `localhost:8000/species`: Retrieves a list of pet species.
<br>

*We have used some advanced code to get our server to return JSON data. Don't pay any attention to it for now. We will get there at a later stage.*

## Explanation
We use the `http` module which exists in NodeJS to configure and run a server.
To import the `http` module into our server.js file we use the line of code:
```javascript
// import the 'http' module from NodeJS
const http = require('http')
```
This `http` object allows us to create a server, using the `createServer()` function. We can implement it with the following code:
```javascript
// Create the server object
const server = http.createServer((req, res) => {
  // code block that will execute every time a request is received
})
```
The `createServer` function receieves a callback function which exposes **request** and **response** objects to us. The **request** is the message the browser sent to us, including important properties like `method` (remember we spoke about *HTTP methods* yesterday?) and `url` (remember we spoke about the *request URI* yesterday?). The **response** object is what we will generate to send back to the client. For now, we will send back a plain text message, but later we will send back JSON data. Remember how APIs send you JSON data when you make a fetch request to them? That's what our goal is. (This is what we've tried to imitate in the pet-server.js file.)

We can generate a response for our client, by using the `write()` function that exists on the response object:
```javascript
// Configure the server, and expose the req and res objects
const server = http.createServer((req, res) => {
  res.write("Hello from the server!")
  res.end() // don't forget to use .end() to finalise the transaction
  // if you forget the .end(), your server thinks you are still building onto the request and your request times out. (The browser's loading icon keeps spinning.)
})
```
Lastly, it's time for us to run the server, so that it's alive and listening for requests from clients. We have to specify a port number for the server to run on, in this case I've chosen port 8888 for no particular reason. Other port numbers often used are 3000, 8000, 4200, the LiveServer extension in VSCode uses 5500.
```javascript
// Start the server on port number 8888
server.listen(8888, () => {
  // usually we just log a message here to the console showing which port the server is running on
  console.log(`Server is listening on port 8888...`)
})
```
For now, I understand that a lot of this won't really make a lot of sense. You will probably have a lot of "why" questions. But the more time we spend with this, the more it will become clear and the mysteries will unravel.
<br><br>
Thank you ✌️
