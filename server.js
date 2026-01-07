// 1. Import the HTTP module (built-in with NodeJS): 
const http = require('http')

// 2. Use the createServer() function to create a server:
const server = http.createServer((request, response) => {
    // Take a look at the request object
    console.log(request.method) // Remember in the client-server model, the client always sends a request with an HTTP Method and URL:
    console.log(request.url)

    // This server has access to every incoming request
    // and can generate an appropriate response:
    response.write(`Hello from the server.\n`)
    
    // Conditional logic based on the request Method:
    if (request.method == "GET") {
        response.write(`This is a GET request.\n`)
    } else if (request.method == "POST") {
        response.write(`This is a POST request.\n`)        
    } else if (request.method == "PUT") {
        response.write(`This is a PUT request.\n`)
    } else if (request.method == "DELETE") {
        response.write(`This is a DELETE request.\n`)
    }

    // Conditional logic based on the request URL:
    if (request.url == "/home") {
        response.write("Welcome home")
    } else if (request.url == "/login") {
        response.write("Welcome to the login page")
    } else if (request.url == "/admin") {
        response.write("You seem important!")
    } else {
        response.write("404, you seem lost.")
    }

    response.end()
})

// 3. Start the server:
server.listen(8888, () => {
    // Log a message to the console when the server has started.
    console.log(`Server is listening on port 8888.`)
})