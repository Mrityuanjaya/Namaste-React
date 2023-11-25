const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!"
);

// React Element or Object
console.log(heading);

// Render method is responsible for taking this heading obejct and converting it into <h1> tag
root.render(heading);

/*
<div id="parent">
    <div id="child">
        <h1>First Heading</h1>
        <h2>Second Heading</h2>
    </div>
</div>
*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "First Heading"),
    React.createElement("h2", {}, "Second Heading"),
  ])
);

// Notice that the heading which we rendered earlier is replaced with the parent
root.render(parent);
