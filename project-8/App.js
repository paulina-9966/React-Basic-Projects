import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof count);
    let amount = parseInt(count);
    if (count <= 0 ) {
      amount=1;
    }
    if (count>9) {
      amount = 9;
    }
    console.log(amount);
    setText(data.slice(0,amount));
  }
  return (
  <section className="section-center">
    <h3>Super lorem Ipsum</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor="amount">
        paragraphs:
      </label>
      <input type="number" name="amount"
      id="amount" value={count}
      onChange={(e) => setCount(e.target.value)}>
        
      </input>
      <button type="submit" className='btn'>
        generate
      </button>
    </form>
    <article className="lorem-text">
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
      elit, sed do eiusmod tempor incididunt ut labore et 
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
      elit, sed do eiusmod tempor incididunt ut labore et 
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat.</p> */}

       {text.map((item, id)=> {
         return <p key={id}>{item}</p>
       })}
      </article>
  </section>
    )
}

export default App;
