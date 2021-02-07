import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false);
  
  // const randomizeQuestion = (data) => {
  //   let randomNumber = Math.floor(Math.random()*questions.length);
  //   console.log(randomNumber);
  // }
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={()=> setShowInfo
        (!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />
          }
        </button>

      </header>
    {showInfo && <p>{info}</p>}

    
{/* <section className='random-question'>
        <button type="button" className='btn randomize' onClick={()=>{randomizeQuestion}}
        >Randomize from the most popular questions</button>

</section> */}


    </article>
  );
};

export default Question;
