Task 1: Create a package.json File Using npm
To create a package.json file, follow these steps:

Navigate to Your Project Directory:
Open your terminal and navigate to the directory where you want to create your Node.js project.

Initialize the Project:
Run the following command to initialize a Node.js project:

bash
Copy code
npm init
Follow the prompts to provide details such as the project name, version, description, entry point (usually index.js), etc. If you want to skip the prompts and create a package.json with default values, you can use:

bash
Copy code
npm init -y
Expected Folder Structure:
After running npm init, you will have a package.json file in your project directory, which will look something like this:

go
Copy code
project-directory/
├── package.json
Task 2: Create index.js and Write Node.js Architecture to a File
Create index.js:
In the same project directory, create a file named index.js.

Write Node.js Architecture Information to a File:
In index.js, use the fs module to create and write to a file named nodejs_architecture.txt.

javascript
Copy code
const fs = require('fs');

const architectureInfo = `
Node.js Architecture:
- Single-threaded
- Event-driven
- Non-blocking I/O model
- Built on Google Chrome's V8 JavaScript engine
`;

fs.writeFile('nodejs_architecture.txt', architectureInfo, (err) => {
    if (err) throw err;
    console.log('Node.js architecture information has been written to nodejs_architecture.txt');
});
Task 3: Read and Print the Content of nodejs_architecture.txt
Modify index.js to Read the File:
Extend the index.js file to read the content of nodejs_architecture.txt and print it to the console.

javascript
Copy code
const fs = require('fs');

fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
Task 4: Append Data to nodejs_architecture.txt and Print Content
Append Advantages of Node.js:
Modify index.js to append additional content to nodejs_architecture.txt.

javascript
Copy code
const fs = require('fs');

const additionalInfo = `
Advantages of Node.js:
- High scalability
- Fast execution with V8 engine
- Strong community support
- Easy to learn and use
`;

fs.appendFile('nodejs_architecture.txt', additionalInfo, (err) => {
    if (err) throw err;
    console.log('Additional information has been appended.');

    // Read and print the content
    fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
});
Task 5: Delete nodejs_architecture.txt
Delete the File and Print Confirmation:
Add code to index.js to delete the nodejs_architecture.txt file.

javascript
Copy code
const fs = require('fs');

fs.unlink('nodejs_architecture.txt', (err) => {
    if (err) throw err;
    console.log('File Deleted Successfully');
});
Task 6: Print OS Name and Release Version Using os Module
Use os Module to Get OS Information:
Add code to index.js to print the operating system name and release version.

javascript
Copy code
const os = require('os');

console.log('OS Name:', os.type());
console.log('OS Release Version:', os.release());
Task 7: Create an HTTP Server in Node.js
Create a Basic HTTP Server:
Modify index.js to create a server that responds with a message.

javascript
Copy code
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!');
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
Task 8: Create and Trigger a Custom Event Using events Module
Create a Custom Event:
Add code to index.js to create and trigger a subscribe event.

javascript
Copy code
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('subscribe', () => {
    console.log('User has subscribed');
});

// Trigger the event
eventEmitter.emit('subscribe');
Task 9: Remove an Event Handler and Observe Behavior
Remove an Event Handler:
Modify index.js to remove an event handler and observe the behavior.

javascript
Copy code
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const subscribeHandler = () => {
    console.log('User has subscribed');
};

eventEmitter.on('subscribe', subscribeHandler);

// Remove the event handler
eventEmitter.off('subscribe', subscribeHandler);

// Try to trigger the event
eventEmitter.emit('subscribe'); // No output since the handler is removed
Task 10: Set Maximum Number of Event Listeners
Set and Get Maximum Event Listeners:
Modify index.js to set the maximum number of event listeners.

javascript
Copy code
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Set the maximum number of listeners to 5
eventEmitter.setMaxListeners(5);

console.log('Maximum listeners:', eventEmitter.getMaxListeners());
