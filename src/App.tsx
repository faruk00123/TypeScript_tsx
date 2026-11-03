import React from 'react'
import ToggleButton from './components/ToggleButton'

const App = () => {
  return (
    <div className='bg-black dark:bg-white w-full h-screen'>
      <div className='flex justify-end w-full p-4'>
        <ToggleButton/>
      </div>
      <h1 className='text-3xl text-white dark:text-black font-bold underline'>
        Hello world!
      </h1>
      <p className='text-white dark:text-black'>
        This is a paragraph with Tailwind CSS classes.
      </p>
      
    </div>
  )
}

export default App