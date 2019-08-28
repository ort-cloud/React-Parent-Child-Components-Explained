import React from "react";

function Nav() {
  return (
    <nav>
      <h1>Parent & Child Components Explained</h1>
      <h2>Use the codesandbox link below to follow along.</h2>
      <h3>This h3 is coming from Nav.js.</h3>
      <p>This paragraph element is also also from Nav.js. As are the list items below.</p>
      <ul>
        <li>Nav.js will be imported by App.js</li>
        <li>App.js will imports all component files</li>
        <li>All component files in this app are stored in the <em>components</em> folder.</li>
        <li>
          index.js will import App.js and render App.js and it's components
        </li>
        <li>
          Components imported by App.js:
          <ul>
            <li>Nav.js</li>
            <li>MainContent.js</li>
            <li>Footer.js</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
