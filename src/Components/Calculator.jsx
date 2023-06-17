import React from 'react'
import { useState } from 'react';

function Calculator() {

  

    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);
  
    const handleTextChange = (e) => {
      const inputText = e.target.value;
      setText(inputText);
      const words = inputText.trim().split(/\s+/);
      setWordCount(words.length);

    };
    
    
    
  
    return (

    <div className=' shadow-2xl animate-border rounded-xl inline-block  bg-white bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-[length:400%_400%] p-[3px]'>
        <div className='space-y-8 flex flex-col items-center p-10 bg-white rounded-xl '>
        <h1 className='mx-auto w-fit text-4xl font-bold'>Word Counter</h1>
        <h4 className='font-semibold text-sm'>Enter text to start counting!</h4>

        <textarea 
          value={text}
          onChange={handleTextChange}
          placeholder="Enter your text here..."  className='p-2 h-32 border-[1px] w-full  text-sm rounded-lg font-mono focus:outline-none focus:border-black/30 hover:border-black/30 border-black/10'  type="date" />
          {/* <button onClick={calculateAge} className=' bg-white text-slate-500 border-2 px-3 py-2 rounded-lg text-sm hover:bg-slate-100'>Calculate Age</button> */}
        </div>
        {!text && <div className='rounded-b-xl p-5 py-5 flex justify-center items-center mt-1'>
                    <h3 className='text-2xl font-bold text-white' >Made By - Aayush Yadav</h3>
        </div>}
        {text && <div className='rounded-b-xl p-5 py-5 flex justify-center items-center mt-1'>
                    <h3 className='text-2xl font-bold text-white' >Words - {wordCount}</h3>
        </div>}
        
        {}


    </div>
  )
}

export default Calculator
