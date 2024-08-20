Task 1: Build a Server Using the http Module in Node.js
Setup Project Directory:

Create a directory for your project.
Navigate to the directory and create a package.json file using npm init -y.
Create a file named index.js.
Create the Server with API Endpoints:
In index.js, you can use the http module to create a server with the required endpoints.

javascript
Copy code
const http = require('http');

const menProducts = [
    { id: 1, name: 'Men Product 1', price: 100 },
    { id: 2, name: 'Men Product 2', price: 150 },
    { id: 3, name: 'Men Product 3', price: 200 },
    { id: 4, name: 'Men Product 4', price: 250 },
    { id: 5, name: 'Men Product 5', price: 300 },
    { id: 6, name: 'Men Product 6', price: 350 },
    { id: 7, name: 'Men Product 7', price: 400 },
    { id: 8, name: 'Men Product 8', price: 450 },
    { id: 9, name: 'Men Product 9', price: 500 },
    { id: 10, name: 'Men Product 10', price: 550 }
];

const womenProducts = [
    { id: 1, name: 'Women Product 1', price: 100 },
    { id: 2, name: 'Women Product 2', price: 150 },
    { id: 3, name: 'Women Product 3', price: 200 },
    { id: 4, name: 'Women Product 4', price: 250 },
    { id: 5, name: 'Women Product 5', price: 300 },
    { id: 6, name: 'Women Product 6', price: 350 },
    { id: 7, name: 'Women Product 7', price: 400 },
    { id: 8, name: 'Women Product 8', price: 450 },
    { id: 9, name: 'Women Product 9', price: 500 },
    { id: 10, name: 'Women Product 10', price: 550 }
];

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Men & Women Dummy Data');
    } else if (req.url === '/men') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(menProducts));
    } else if (req.url === '/women') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(womenProducts));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
Run the Server:

In the terminal, run the server using:
bash
Copy code
node index.js
Test the endpoints using a browser or a tool like Postman.
Task 2: Backend for Counter Web App Using Express
Setup Project Directory:

Create a directory for your project.
Navigate to the directory and create a package.json file using npm init -y.
Install Express using:
bash
Copy code
npm install express
Create a file named index.js.
Create the Counter API:
In index.js, you can use Express to create the required API endpoints.

javascript
Copy code
const express = require('express');
const app = express();

let counter = 0;

app.get('/', (req, res) => {
    res.json({ counter });
});

app.get('/increment', (req, res) => {
    counter += 1;
    res.json({ counter });
});

app.get('/decrement', (req, res) => {
    counter -= 1;
    res.json({ counter });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Counter app running at http://localhost:${port}/`);
});
Run the Server:

In the terminal, run the server using:
bash
Copy code
node index.js
Test the API using a browser or Postman.
Task 3: Basic Server with Different Routes Using Express
Setup Project Directory:

This can be the same project as in Task 2.
If you don't have Express installed, install it using:
bash
Copy code
npm install express
Create or modify the index.js file.
Create the Routes:
In index.js, define the required routes.

javascript
Copy code
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ msg: 'I am homepage' });
});

app.get('/about', (req, res) => {
    res.json({ msg: 'I am about page' });
});

app.get('/contact', (req, res) => {
    res.json({ email: 'support@pwskills.com' });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
Run the Server:

In the terminal, run the server using:
bash
Copy code
node index.js
Test the different routes using a browser or Postman.
By following these steps, you'll have completed the tasks of building servers and APIs using both Node.js http module and Express.js.






