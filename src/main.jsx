import  React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <h1>Hello cả lớp</h1>
//   </StrictMode>,
// );
const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(<App />)

// const element1 = React.createElement("h1", {className: "heading1 heading2", id: "heading1"}, "Hello");
// const element2 = React.createElement("h2", {className: "heading1 heading2", id: "heading2"}, "Toi ten la Duy");
// const username = 'Duy';

// function Myapp({name,age }) {

//   return "Hello " + name + " " + age
// }

// root.render(
//   <>
//     {element1}
//     {element2}
//     <p>My name is {username}</p>
//   </>  
// );

// root.render(Myapp("F8"));
// root.render(<Myapp name = 'F8' age= {10} />);
