import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false); // abhi no. allow nhi h
  const [charAllowed, setCharAllowed] = useState(false); // abhi char allow nhi h
  const [password, setPassword] = useState(""); // store password

  const passwordRef = useRef(null); // This will store reference of input element.

  function generaratePassword(){
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed===true){
      str += "1234567890";
    }
    if(charAllowed===true){
      str += "@#$%^&*(";
    }
    
    let pass = "";
    setPassword(pass);
    for(let i=0;i<length;i++){
      let randomIdx = Math.floor(Math.random() * str.length);
      pass += str[randomIdx]
    }
    setPassword(pass);

  }

  useEffect(() => {
    generaratePassword();
  }, [length, numberAllowed, charAllowed]); // jab bhi a sab change hoga, tab a function chalega
 
  function copyPassword(){
    navigator.clipboard.writeText(password)
    // select text
    passwordRef.current.select();
  }


  return (
    <div className="h-screen bg-green-950 flex justify-center items-center">
      <div className="bg-gray-700 text-white text-xl w-200 h-100 p-10 rounded-2xl">
        <h1 className="text-yellow-600 font-stretch-expanded text-3xl flex justify-center">Password Generator</h1>

        <div className="p-6 flex justify-center items-center space-x-2">
          <label htmlFor="text" className="block text-sm font-medium"></label>
          <input
            type="text"
            ref={passwordRef}
            className="bg-white text-yellow-700 text-2sm w-70 h-9 font-bold self-center"
            value={password}
          />
          <button className="bg-blue-800 rounded-xl p-2 hover:bg-blue-900 cursor-pointer"
          onClick={copyPassword}
          
          >Copy</button>
        </div>

        <div className="p-3 bg-sky-900 inline-flex items-center gap-2 rounded-2xl">
          <label htmlFor="range" className="">
            Range: {length}
          </label>
          <input 
            type="range" 
            min={4}
            max={30}
            className='w-40'
            value={length}
            onChange={(e) => {setLength(e.target.value)}}
          />
        </div>

        <div className= 'inline justify-center  p-3 space-x-3'>
          <label>
            Numbers <input type="checkbox" name="myCheckbox" className="size-4"
            onChange={() => {setNumberAllowed(!numberAllowed)}}
           />
          </label>
        </div>

        <div className= 'inline justify-center  p-3 space-x-3'>
          <label>
            Characters <input type="checkbox" name="myCheckbox" className="size-4" 
            onChange={() => {setCharAllowed(!charAllowed)}}
            />
          </label>
        </div>

      </div>
    </div>
  );
}

export default App;
