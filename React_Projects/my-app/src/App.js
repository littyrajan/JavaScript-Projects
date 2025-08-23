// import React, { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setShow(true), 200); // Trigger fade-in after 0.2s
//   }, []);

//   return (
//     <div className="App">
//       <h1 className={`fade-in ${show ? 'show' : ''}`}>Welcome to My Page</h1>
//       <p className={`fade-in ${show ? 'show' : ''}`}>This content fades in smoothly!</p>
//       <button className={`fade-in ${show ? 'show' : ''}`}>Click Me</button>
//     </div>
//   );
// }

// export default App;


// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200); // Trigger fade-in after 0.2s
  }, []);

  return (
    <div className="App">
      <h1 className={`fade-in ${show ? 'show' : ''}`}>Welcome to My Page</h1>
      <p className={`fade-in ${show ? 'show' : ''}`}>This content fades in smoothly!</p>
      <button className={`fade-in ${show ? 'show' : ''}`}>Click Me</button>
    </div>
  );
}

export default App;

