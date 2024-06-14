import React, { useRef } from 'react'
import "./style.css"

interface props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent)=> void;
}

const InputSection: React.FC<props> = ({todo, setTodo, handleAdd}) => {
const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
        <form className='input' 
        onSubmit={(e)=>{
          handleAdd(e)
          inputRef.current?.blur()
        }}>
            <input
            ref={inputRef}
            value={todo}
             type='input'
              placeholder='Enter a task'
               className='input_box'
               onChange={(e)=>{
               setTodo(e.target.value)
               }}
               ></input>
             <button className='submit' type='submit'>Go</button>
        </form>
    </div>
  )
}

export default InputSection;