import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const jsxHeading = <h1>This is JSX</h1>;
console.log(jsxHeading);

// React Element
// const headingReactElement = <h1>I am a heading of React Element</h1>;
// root.render(headingReactElement);

// React Component
// const HeadingReactComponent = () => <h1>I am a heading of React Component</h1>;
// root.render(<HeadingReactComponent />);

// React Component inside React Element
const ReactComponent1 = () => <h1>I am a React Component</h1>;
const reactElement1 = (
  <div className="container">
    <h1>React Element Begins</h1>
    {ReactComponent1()}
    <ReactComponent1 />
    <h1>React Element Ends</h1>
  </div>
);
root.render(reactElement1);

// React Element inside React Component
const ReactElement2 = <h1> I am a React Element</h1>;
const ReactComponent2 = () => (
  <div className="container">
    <h1>React Component Begins</h1>
    {ReactElement2}
    <h1>React Component Ends</h1>
  </div>
);
root.render(<ReactComponent2 />);

// Cross-site Scripting
const maliciousData = 1234; // Lets say the API sends some malicious JS code as data
const ReactComponent3 = () => (
  <div className="container">
    <h1>React Component Begins</h1>
    {/* This line will execute that JS Code, but JS Engine does not blindly executes the JS Code and will prevent malicious attaacks*/}
    {maliciousData}
    <h1>React Component Ends</h1>
  </div>
);
root.render(<ReactComponent3/>);
