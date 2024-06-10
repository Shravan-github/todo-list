import React from 'react'
import "./style.css"

function InputSection() {
  return (
    <div>
        <form className='input'>
            <input type='input' placeholder='Enter a task' className='input_box'></input>
             <button className='submit' type='submit'>Go</button>
        </form>
    </div>
  )
}

export default InputSection