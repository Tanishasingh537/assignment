Task 1: Create a "Person" Component
The Person component will take two props: name and age, and display them in a paragraph element.

javascript
Copy code
import React from 'react';

const Person = ({ name, age }) => {
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
};

export default Person;
Task 2: Create a "Button" Component
The Button component will take two props: text and onClick. It will render a button with the given text and trigger the onClick function when the button is clicked.

javascript
Copy code
import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
Task 3: Create a "Header" Component
The Header component will take one prop: title. It will display the title inside an h1 element.

javascript
Copy code
import React from 'react';

const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  );
};

export default Header;
Task 4: Create a "List" Component
The List component will take one prop: items. It will render an unordered list (<ul>) with the provided list items.

javascript
Copy code
import React from 'react';

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
Example Usage
To see how these components work together, you can create an App component and use all of the components you've created:

javascript
Copy code
import React from 'react';
import Person from './Person';
import Button from './Button';
import Header from './Header';
import List from './List';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <Header title="Welcome to My App" />
      <Person name="John Doe" age={30} />
      <Button text="Click Me" onClick={handleClick} />
      <List items={items} />
    </div>
  );
};

export default App;
Running the App
Set Up a React Project: If you haven't already, set up a React project using create-react-app or your preferred method.

bash
Copy code
npx create-react-app my-app
cd my-app
Add the Components: Replace the content of App.js with the example usage code provided above. Create separate files for Person.js, Button.js, Header.js, and List.js in the src directory, and paste the corresponding component code into each file.

Run the Project: Start the React app using:

bash
Copy code
npm start
