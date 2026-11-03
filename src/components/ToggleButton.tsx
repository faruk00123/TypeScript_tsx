import { useTheme } from "../context/ThemeContext"

const ToggleButton = () => {
    const {theme, toggleTheme} = useTheme()
  return (
    <button onClick={toggleTheme} className='bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
      Switch to {theme === 'light' ? 'dark' : 'light'} Mode
    </button>
  )
}

export default ToggleButton