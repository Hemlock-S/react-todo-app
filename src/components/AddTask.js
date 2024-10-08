import {  useRef, useState } from 'react';

const AddTask = () => {
  const [task, setTask] = useState('');

  const inputRef = useRef(null);

  // addTaskHAndle Event 
  const addTaskHandler = (e) => {
    e.preventDefault();

    // post task into server
    taskposting(task);

    inputRef.current.blur(); //focus blur
    setTask('');
  }

  // task posting
  // use "text" 
  const taskposting = async (text) => {
    const res = await fetch('https://aluminum-delicate-snowshoe.glitch.me/tasks', {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({text}),
    }
  )
}


  return (
    <form className='bg-gray-900 container mx-auto flex justify-between p-10' onSubmit={addTaskHandler}>

      <input 
      ref={inputRef}
      type="text" 
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder='What things to do?' 
      required 
      className='bg-transparent outline-none border-b-2 border-gray-400 py-2 px-5 focus:border-teal-600'/>

      <button type="submit" className='bg-teal-900/30 py-2 px-5 border-2 border-teal-500 rounded text-teal-600 hover:bg-teal-500 hover:text-gray-900 duration-300'>Add Task</button>

    </form>
  )
}

export default AddTask;
