import React from "react";

function MainContent() {
  return (
    <main>
      <h3>From this h3 element down to the footer is MainContent.js </h3>
      <p>Breaking out each section into <em>components</em> (aka separate JS files)</p>
      <ul>
        <li>It makes our code less verbose and more easily read.</li>
        <li>Makes our code more flexable and easier to reuse.</li>
        <li>
          All you need to do to reuse:
          <ol>
            <li>
              Import the component. Just like Nav.js is imported to App.js
            </li>
            <li>Then make the call to it in the App function.</li>
          </ol>
        </li>
      </ul>
    </main>
  );
}

export default MainContent;
