import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import First from './First';
import { Second , Third} from './First.js';
import ClassComp from './ClassComp'
import JxsDemo from './JsxDemo';
import { ParentComponent } from './ParentComponent';
import { Comp1 } from './Comp1';
import  Comp4  from './Comp4';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Without Jsx
const element =  React.createElement("h1", {}, "Hello from element");
const element1 = <h1> Helo from jsx </h1>
const exp = <h2> {10*20} </h2>
root.render(
  <React.StrictMode>
    <Comp4 />
    <Comp4 name="Parag" age={20}/>
    
    <ParentComponent/>
    {/* {element}
    {element1}
    {exp}
    <JxsDemo/>
    <App />
    <First/>
    <Second/>
    <Third/>
    <ClassComp/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
